/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { Todo } from "../types/Todo";
import { TodoCombo } from "../types/TodoCombo";
import { User } from "../types/User";
import { State } from "./types";


export const getTodosSelector = (state: State): Todo[] => state.todos;
export const getUsersSelector = (state: State): User[] => state.users;

export const getUsersAndTodosStartSelector = (state: State): TodoCombo[] => {
  return state.todos.map(todo => {
    return (
      { ...todo, completed: {
        completed: todo.completed,
        inProgres: false
      },
       user: state.users.find(user => user.id === todo.userId) || "No User" 
      });
  });
}

export const getUsersAndTodosSelector = (state: State): TodoCombo[] => {
  return state.todosCombo
}

export const getTodoComboDoneSelector = (state: State) => {
  return [...state.todosCombo.filter(todo => todo.completed.completed === true && todo.completed.inProgres === false)];
}

export const getTodoComboNotCompletedSelector = (state: State) => {
  return [...state.todosCombo.filter(todo => todo.completed.completed === false && todo.completed.inProgres === false)];
}

export const getTodoComboInProgresSelector = (state: State) => {
  return [...state.todosCombo.filter(todo => todo.completed.inProgres === true)];
}
