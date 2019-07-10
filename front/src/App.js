import React, { Component } from "react";
import DispatchArticle from './Component/DispatchArticle';
import Article from "./Component/Article";
import Contact from './Component/Contact';
import Parcours from './Component/Parcours';
import PrivateGithub from './Component/PrivateGithub';
import Footer from './Component/Footer';
import NotFound from './Component/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/' component={DispatchArticle} />
          <Route path='/articles/:project' component={Article} />
          <Route path='/parcours' component={Parcours} />
          <Route path='/contact' component={Contact} />
          <Route path='/CryptoTrader' component={PrivateGithub} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
};

export default App;