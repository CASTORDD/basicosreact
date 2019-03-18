import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1 className="title is-1">{ props.titulo}</h1>
    </header>
  )
}

export default Header;
