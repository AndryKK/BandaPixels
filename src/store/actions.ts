import { Todo } from "../types/Todo";
import { TodoCombo } from "../types/TodoCombo";
import { User } from "../types/User";
import { ActionType, AddTodosAction, AddTodosCombo, AddUsersAction, setTodoComboCompleted, setTodoComboInProgres, setTodoComboTodo } from "./types";

export const addTodosActionsCreator = (payload: Todo[]): AddTodosAction => ({
  type: ActionType.AddTodos,
  payload: payload
})

export const addUsersActionsCreator = (payload: User[]): AddUsersAction => ({
  type: ActionType.AddUsers,
  payload: payload
})

export const addTodosComboActionsCreator = (payload: TodoCombo[]): AddTodosCombo => ({
  type: ActionType.ddTodosCombo,
  payload: payload,
})

export const setTodoComboTodoCreator = (payload: TodoCombo): setTodoComboTodo => ({
  type: ActionType.setTodoComboTodo,
  payload: payload,
})

export const setTodoComboCompletedCreator = (payload: TodoCombo): setTodoComboCompleted => ({
  type: ActionType.setTodoComboCompleted,
  payload: payload,
})

export const setTodoComboInProgresCreator = (payload: TodoCombo): setTodoComboInProgres => ({
  type: ActionType.setTodoComboInProgres,
  payload: payload,
})
