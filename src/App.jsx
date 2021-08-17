import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </header>

        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/shop" component={Shop} />
          <Route path="/" component={Landing} />
        </Switch>
        <footer>FOOTER</footer>
      </HashRouter>
    </div>
  );
}

export default App;
