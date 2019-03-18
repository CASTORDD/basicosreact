import React, { Component } from 'react'
import Producto from './Producto';

export default class Productos extends Component {
  render() {
    return (
      <div className="column">
        <h2 className="title is-2">Listado de productos</h2>
        { Object.keys(this.props.productos).map(key => (
          <Producto 
            key={key}
            productos={ this.props.productos[key]}
          />
        ))}
      </div>
    )
  }
}
