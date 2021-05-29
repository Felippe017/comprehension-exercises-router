import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/strict-access">Strict Access</Link></li>
            </ul>
          </nav>
        <Switch>
          <Route exact path="/Users/:id" render={(props) => <Users {...props} greetingMessage={'Good MOrning'}/>} />
          <Route path="/strict-access" render={ () => ( <StrictAccess user={ { username: 'joao', password: '1234' } } />)} />
          <Route exact path="/About" component={About} />
          <Route exact path="/" component={Home} />
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
