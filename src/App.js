import Login from './login';
import Home from './home';
import {BrowserRouter as Router,Switch, Route, Link, NavLink,Redirect} from 'react-router-dom'
import './App.css';

function App() {
  console.log(localStorage.getItem("done"))
  return (
    <div className="App">
      
      <Router>
         <Switch>
          <Route path="/home" ><Home/>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
