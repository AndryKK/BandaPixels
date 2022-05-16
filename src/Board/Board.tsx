import { BoardToDo } from "./BoardToDo/BoardToDo";
import "./Board.scss"
import { useSelector } from "react-redux";
import { getTodoComboDoneSelector, getTodoComboInProgresSelector, getTodoComboNotCompletedSelector } from "../store/selectors";
import { useEffect, useState } from "react";

export const Board = ({isShown}: {isShown: boolean}) => {
  const notCompleted = useSelector(getTodoComboNotCompletedSelector);
  const completed = useSelector(getTodoComboDoneSelector);
  const inProgres = useSelector(getTodoComboInProgresSelector);
  const [dragStyle, setDragStyle] = useState(false);

  useEffect(()=> {
  }, [notCompleted, completed, inProgres])

  return (
    <>
      {isShown && (<h1>Board</h1>)}
      <div className="Board">
        <div draggable={true} className="Board__to-do">
          <h1>To do</h1>
          {notCompleted.map(todo => 
            <BoardToDo key={todo.id} todo={todo}/>)}
        </div>
        <div className="Board__inProgress">
          <h1>In progress</h1>
          {inProgres.map(todo => 
            <BoardToDo key={todo.id} todo={todo} />)}
        </div>
        <div draggable={true} className="Board__done">
          <h1>Done</h1>
          {completed.map(todo => 
            <BoardToDo key={todo.id} todo={todo} />)}
        </div>
      </div>
    </>
  );
};
