import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Product from './Product';
const App = () => {
    return (
      <Router>
        <div>
          <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  };
  
  export default App;
  