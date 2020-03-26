import React from 'react';
import Nav from "./components/nav/nav-component";
import News from "./pages/news/news";
import Prices from "./pages/prices/prices";
import {Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
      <div className="App">
        <Nav/>
        <section className="App-header">
          <Switch>
          <Route path='/' exact component={News} />
          <Route path='/prices' exact component={Prices} />
          </Switch>

      </section>
    </div>
  );
}

export default App;
