import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { colorChoseer } from '../api/functions/colorChoseer';
import { getUsersAndTodosSelector } from '../store/selectors';
import './TicketList.scss'

export const TicetList = ({isShown, setIsShown}: {isShown: boolean, setIsShown: (x: boolean) => void}) => {
  const todosAndUsers = useSelector(getUsersAndTodosSelector);

  useEffect(()=> {
  }, [todosAndUsers])

  return (
    <>
      <div className="ticket-list--wrap">
        {isShown ? (<h1 className="ticket-list--wrap__name">Ticket list</h1>) : (<h1 className="ticket-list--wrap__name">Board</h1>)}
        <button className="ticket-list--wrap__button" type='button' onClick={() => setIsShown(!isShown)}>{isShown ? "Hide" : "Show ticket list"}</button>
      </div>
      {isShown &&(
        <div className="App__Ticket-list Ticket-list">
        {todosAndUsers.map(todo => 
          <div key={todo.id} className="Ticket-list__todo todo">
            <div className="Board__avatar" style={{background: colorChoseer(todo.userId)}}>
              <span className="todo__avatar__name">
                {(todo.user !== "No User") ? (todo.user.name.split(' ').map(w => w.slice(0, 1)).join('').slice(0, 2)) : "N/F"}
              </span>
            </div>
            <div className="todo__text-status-wrap">
              <span className="todo__text">
                {todo.title}
              </span>
              <span className="todo__status">
                {(todo.completed.completed && !todo.completed.inProgres) && "Done"}
                {(!todo.completed.completed && !todo.completed.inProgres) && "To Do"}
                {(todo.completed.inProgres) && "In progres"}
              </span>
            </div>
          </div>
        )}
      </div>
      )}
    </>
  );
};
