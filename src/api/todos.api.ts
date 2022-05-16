import { Todo } from "../types/Todo";
import { get } from "./api";
import { ENDPOINTS } from "./api.constants";

export const getTodos:() => Promise<Todo[]> = () => get(ENDPOINTS.todos) 
