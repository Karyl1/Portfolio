import React, { useState, useEffect } from 'react';
import Accueil from './Accueil';
import Introduction from './Introduction';
import Header from './Header';

export default function DispatchArticle(props) {

  const [ articleContent, setAricleContent ] = useState([]);

  useEffect(() => receive_article(), []);

  function receive_article() {
    const details = {
      method: 'GET',
      header: ('Content-Type: application/json'),
      mode: 'no-cors',
    };

    const adress = '/article';
    fetch(adress, details)
      .then(res => res.json())
      .then(res => setAricleContent(res))
      .catch(err => new Error(err));
  };

  return (
    <div>
      <Header />
      <Introduction />
      {articleContent.map((element, i) => <Accueil key={'Accueil' + i} a={props} article={element} />)}
    </div>
  );
}