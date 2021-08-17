import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>HEADER</header>
      <HashRouter>
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/" component={Landing} />
        </Switch>
      </HashRouter>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
