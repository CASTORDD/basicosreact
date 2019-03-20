import React, { Component } from 'react';

import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component  {
  state = {
    productos: []
  }

  componentDidMount(){
    const productos = [
      {nombre: 'Libro', precio: 200},
      {nombre: 'Disco', precio: 150},
      {nombre: 'Instrumento', precio: 400},
      {nombre: 'Arroz', precio: 50},
      {nombre: 'Pera', precio: 15},
    ]
    setTimeout( () => {
      this.setState({
        productos : productos
      });
    }, 3000);
  }
  
  render(){
    return (
      <div>
        <Header 
          titulo="Nuestra tienda virtual"
        />
        <Productos 
          productos={this.state.productos}
        />
        <Footer />
      </div>
    )
  }
}

export default Aplicacion;