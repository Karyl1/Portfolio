import React, { Component } from 'react';
import Accueil from './Accueil';
import Introduction from './Introduction';

class DispatchArticle extends Component {

  state = {
    info: [],
  };

  componentDidMount() {

    const details = {
      method: 'GET',
      header: ('Content-Type: application/json'),
      mode: 'no-cors',
    };

    const adress = '/article';
    fetch(adress, details)
      .then(res => res.json())
      .then(res => this.setState({ info: res }))
      .catch(err => new Error(err));
  };

  render() {
    const { info } = this.state;
    return (
      <div>
        <Introduction />
        {info.map((element, i) => <Accueil key={'Accueil' + i} a={this.props} article={element} />)}
      </div>
    );
  }
}

export default DispatchArticle;