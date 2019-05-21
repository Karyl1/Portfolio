import React, { Component } from "react";
import DispatchArticle from './Component/DispatchArticle';
import HeaderApp from './Component/Header';
import Article from "./Component/Article";
import Contact from './Component/Contact';
import Parcours from './Component/Parcours';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={HeaderApp} />
        <Route exact path='/' component={DispatchArticle} />
        <Route path='/article/:project' component={Article} />
        <Route path='/parcours' component={Parcours} />
        <Route path='/contact' component={Contact} />
      </Router>
    )
  }
};

export default App;