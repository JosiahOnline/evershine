import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/products/Categories';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import Services from './components/services/Services';
import NavigationBar from './components/NavigationBar'
import Footer from './components/homepage/Footer';
import ProductDetails from './components/products/Valves/productExample'

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
            <Route path="/product/:product_id" component={ProductDetails} />
            <Route path ="/404" component={NotFoundPage}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>
        <Footer />
    </React.Fragment>
  );
}

export default App;