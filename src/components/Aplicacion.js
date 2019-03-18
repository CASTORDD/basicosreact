import React, { Component } from 'react';

import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component  {
  
  render(){
    const productos = [
      {nombre: 'Libro', precio: 200},
      {nombre: 'Disco', precio: 150},
      {nombre: 'Instrumento', precio: 400},
      {nombre: 'Arroz', precio: 50},
      {nombre: 'Pera', precio: 15},
    ]

    return (
      <div>
        <Header 
          titulo="Nuestra tienda virtual"
        />
        <Productos 
          productos={productos}
        />
        <Footer />
      </div>
    )
  }
}

export default Aplicacion;