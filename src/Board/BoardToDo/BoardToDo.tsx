import { TodoCombo } from "../../types/TodoCombo";
import "./BoardToDo.scss"
import { colorChoseer } from "../../api/functions/colorChoseer";
import { useDispatch } from "react-redux";
import { setTodoComboCompletedCreator, setTodoComboInProgresCreator, setTodoComboTodoCreator } from "../../store/actions";
import { useState } from "react";

export const BoardToDo = ({todo}:{todo: TodoCombo})=> {
  const dispatch = useDispatch();
  const [dragStyle, setDragStyle] = useState(false);

  const DragEndHandler  = (e: React.DragEvent<HTMLDivElement>, todo: TodoCombo) => {

    setTimeout(() => {
      setDragStyle(false);
    }, 500)

    const check = e.pageX / window.innerWidth;

    if (check < 0.333) {
      dispatch(setTodoComboTodoCreator(todo))
    }

    if (check > 0.333 && check < 0.666) {
      dispatch(setTodoComboInProgresCreator(todo))
    }

    if (check > 0.666) {
      dispatch(setTodoComboCompletedCreator(todo))
    }
  }

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, tood: TodoCombo) => {
    setDragStyle(true);
  }
  

  return (
    <div
      className={!dragStyle ? "Board__todo" : "Board__todo drag"}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, todo)}
      onDrag={(e) => dragStartHandler(e, todo)}
      onDragEnd={(e) => DragEndHandler(e, todo)}
    >
      <div className="Board__avatar" style={{background: colorChoseer(todo.userId)}}>
        <span className="todo__avatar__name">
        {(todo.user !== "No User") ? (todo.user.name.split(' ').map(w => w.slice(0, 1)).join('').slice(0,2)) : "N/F"}
        </span>
      </div>
      <span className="Board__text">
        {todo.title}
      </span>
    </div>
  );
};

