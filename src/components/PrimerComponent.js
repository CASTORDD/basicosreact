import React, { Component } from 'react';
import Header from './Header';

class PrimerComponente extends Component  {
  render(){
    return (
      <div>
        <Header />
        <p>Desde mi primer componente</p>
      </div>
    )
  }
}

export default PrimerComponente;