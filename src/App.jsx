import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Jheader from './components/common/jheader/Jheader';
import Home from './components/pages/home/Home';
import Detail from './components/pages/detail/Detail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Jheader></Jheader>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
