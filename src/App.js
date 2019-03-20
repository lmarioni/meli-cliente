

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Items from './components/pages/items/Items';
import Detalle from './components/pages/detalle/Detalle';
import NotFound from './components/pages/error/NotFound';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/items/:id" component={Detalle} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
