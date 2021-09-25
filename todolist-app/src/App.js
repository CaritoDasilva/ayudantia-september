import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import { ListProvider } from "./contexts/ListContext";
import LisToDos from "./views/ListTodos";
import TodoForm from "./views/TodoForm";

function App() {
  return (
    <div className="App">
      <ListProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/todoForm">Crear Tarea</Link>
            </li>
            <li>
              <Link to="/list">Ver tareas</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>
            <Switch>
          <Route path="/todoForm">
            <TodoForm />           

          </Route>
          <Route path="/list">
            <LisToDos />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>

      </ListProvider>
    </div>
  );
}

export default App;
