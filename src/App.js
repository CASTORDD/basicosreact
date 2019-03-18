import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      React.createElement(
        'h1',
        {id: 'titulo', className: 'encabezado'},
        'Hola Mundo2'
      )
    );
  }
}

export default App;
