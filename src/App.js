import './App.css';
import Navbar from './Navbar';
import Cameras from './Cameras';
import Home from './Home';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="contents">
        <Switch>
          <Route exact path = "/">
            <Login/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cameras">
            <Cameras />
          </Route>
        </Switch>
          
      </div>
      </div>
    </Router>
  
    
  );
}

export default App;
