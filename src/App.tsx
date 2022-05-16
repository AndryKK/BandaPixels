import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './api/todos.api';
import { getUsers } from './api/users.api';
import './App.scss';
import { Board } from './Board/Board';
import { addTodosActionsCreator, addTodosComboActionsCreator, addUsersActionsCreator } from './store/actions';
import { getUsersAndTodosStartSelector } from './store/selectors';
import { TicetList } from './TicketList/TicketList';

function App() {
  const dispatch = useDispatch();
  const todosAndUsers = useSelector(getUsersAndTodosStartSelector);
  const [loaded, setLoaded] = useState(false);
  const [isShown, setIsShown] = useState(true);

  useEffect(()=> {
    getTodos().then(todosFS => dispatch(addTodosActionsCreator(todosFS)));
    getUsers().then(userFS => {dispatch(addUsersActionsCreator(userFS)); setLoaded(true)});
  },[])

  useEffect(()=> {
    dispatch(addTodosComboActionsCreator(todosAndUsers));
  },[loaded])

  useEffect(()=> {

  },[todosAndUsers])

  return (
    <div className="App">
      <TicetList isShown={isShown} setIsShown={setIsShown}/>
      <Board isShown={isShown}/>
    </div>
  );
}

export default App;
