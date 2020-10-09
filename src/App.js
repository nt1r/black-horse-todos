import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Homepage from './view/Homepage';
import NotFoundPage from './view/NotFoundPage';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/error" component={NotFoundPage} />
          <Route path="/" component={Homepage} />
          <Redirect push to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
