import React from "react";
import Accueil from './Component/Accueil';
import HeaderApp from './Component/Header';
import Introduction from './Component/Introduction';
import './App.css';

const App = () => (
  <div>
    <HeaderApp />
    <Introduction />
    <Accueil />
  </div>
);

export default App;