import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';
import routes2 from '../../data/routes2';
import { Component } from 'react';
import Google from './googlelog.js';

class Header extends Component {
  


render(){

  let route;
  console.log(Google.content);
  if(Google.content == null){
    route = routes;
  }else{
    route = routes2;
  }

  return (
    <header id="header">
    <h1 className="index-link">
      {route.filter(l => l.index).map(l => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {route.filter(l => !l.index).map(l => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
  );


  }
}

  


export default Header;
