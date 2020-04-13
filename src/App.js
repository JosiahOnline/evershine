import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/products/Products';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Services from './components/services/Services';
import NavigationBar from './components/NavigationBar'
import Footer from './components/homepage/Footer'

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
        <Footer />
    </React.Fragment>
  );
}

export default App;