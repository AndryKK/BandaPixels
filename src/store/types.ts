import { Action as BaseAction } from "@reduxjs/toolkit";
import { User } from "../types/User";
import { Todo } from "../types/Todo";
import { TodoCombo } from "../types/TodoCombo";

export interface State {
  todos: Todo[]
  users: User[]
  todosCombo: TodoCombo[]
}

export interface Action<T, P> extends BaseAction<T> {
  payload: P
}

export enum ActionType {
  AddTodos = 'addTodos',
  AddUsers = 'addUsers',
  ddTodosCombo = 'ddTodosCombo',
  setTodoComboTodo = 'setTodoComboTodo',
  setTodoComboCompleted = 'setTodoComboCompleted',
  setTodoComboInProgres = 'setTodoComboInProgres'
  }

export type AddTodosAction = Action<ActionType.AddTodos, Todo[]>
export type AddUsersAction = Action<ActionType.AddUsers, User[]>
export type AddTodosCombo = Action<ActionType.ddTodosCombo, TodoCombo[]>
export type setTodoComboTodo = Action<ActionType.setTodoComboTodo, TodoCombo>
export type setTodoComboCompleted = Action<ActionType.setTodoComboCompleted, TodoCombo>
export type setTodoComboInProgres = Action<ActionType.setTodoComboInProgres, TodoCombo>

export type Actions = AddTodosAction | AddUsersAction | AddTodosCombo | setTodoComboTodo | setTodoComboCompleted | setTodoComboInProgres;