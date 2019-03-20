import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_ML.png';
import Buscador from './Buscador';
import './Layout.module.css'
// import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
          <nav>
            <Link to="/">
                 <img className="logo" src={logo} alt="MercadoLibre" />
            </Link> 
            <Buscador />
          </nav>  
    )
  }

