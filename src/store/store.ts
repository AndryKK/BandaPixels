import { legacy_createStore as createStore, Reducer, Store} from 'redux'
import { Actions, ActionType, State } from "./types";

const initialState: State = {
  todos: [],
  users: [],
  todosCombo: []
}



const reducer: Reducer<State, Actions> = (state: State = initialState, action): State => {
  switch (action.type) {

    case ActionType.AddTodos:
      return {
        ...state,
        todos: [...state.todos, ...action.payload]
      }
    
    case ActionType.AddUsers:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }

    case ActionType.ddTodosCombo:
      return {
        ...state,
        todosCombo: [...state.todosCombo, ...action.payload]
      }

    case ActionType.setTodoComboTodo:
      return {
        ...state,
        todosCombo: [...state.todosCombo.map(todo => (todo.id === action.payload.id) ? {...todo, completed: {...todo.completed, completed: false, inProgres: false} } : todo)]
      }

      case ActionType.setTodoComboInProgres:
        return {
          ...state,
          todosCombo: [...state.todosCombo.map(todo => (todo.id === action.payload.id) ? {...todo, completed: { completed: false, inProgres: true} } : todo)]
        }

    case ActionType.setTodoComboCompleted:
      return {
        ...state,
        todosCombo: [...state.todosCombo.map(todo => (todo.id === action.payload.id) ? {...todo, completed: { completed: true, inProgres: false} } : todo)]
      }

    default:
      return state;
  }
}

export const store: Store<State, Actions> = createStore(reducer)