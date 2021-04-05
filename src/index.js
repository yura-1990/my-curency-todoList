import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Todo from './components/Todo'
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/todo" component={Todo} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);