import React, { Component } from 'react';

import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component  {
  render(){
    return (
      <div>
        <Header />
        <Productos />
        <Footer />
      </div>
    )
  }
}

export default Aplicacion;