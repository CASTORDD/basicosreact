import React, { Component } from 'react'

class Producto extends Component {
  render() {
    const {nombre, precio} = this.props.productos;
    return (
      <div className="box media">
        <h3 className="title is-3 media-content">{ nombre }</h3>
        <h4 className="title is-3 media-right">$ { precio }</h4>
      </div>
    )
  }
}
export default Producto;