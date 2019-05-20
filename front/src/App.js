import React from "react";
import DispatchArticle from './Component/DispatchArticle';
import HeaderApp from './Component/Header';
import Introduction from './Component/Introduction';
import Article from "./Component/Article";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <HeaderApp />
      <Introduction />
      <Route exact path='/' component={DispatchArticle} />
      <Route path='/Article/:project' component={Article} />
    </Router>
  )
};

export default App;