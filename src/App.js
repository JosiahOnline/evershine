import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Services from './components/Services';
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch}/>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;