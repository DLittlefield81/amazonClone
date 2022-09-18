import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    //BEM
<Router>
  <Route path="/login"> 
        <Login />
      </Route>
      <div className="app">
    <Header/>
    <Switch>
    
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/"> 
        <Home />
      </Route>
    </Switch>
</div>
</Router>
  );
}

export default App;
