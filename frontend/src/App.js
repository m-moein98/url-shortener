import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/home';
import Navbar from './components/navbar';
import Api from './components/api';
import AboutUs from './components/about-us'
function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/api" component={Api}/>
          <Route exact path="/about-us" component={AboutUs}/>
        </Switch> 
    </Router>
  );
}

export default App;
