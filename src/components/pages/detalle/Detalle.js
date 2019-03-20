import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-flexbox-grid';
import MDSpinner from "react-md-spinner";

export default class Detalle extends Component {

  state = {
    result: {},
    cargando: true
  }

  componentDidMount () { //traigo detalle del item
    const { id } = this.props.match.params
    axios.get(`http://localhost:4000/items/${id}`)
    .then(res => {
        this.setState({
          result: res.data,
          cargando: false
        });
        document.title = this.state.result.item.title; //cambio el title de la pestaña
    })
  }
  
  render() {

    const { cargando } = this.state;
    const { item } = this.state.result;

    if(cargando){
      return (
        <div style={{marginTop: 60,display: 'flex',justifyContent:'center'}}>
          <MDSpinner singleColor="#e6cf00" />
        </div>
      )
    }else{
      return (
        <div className="detalle-container">
          <Row>
                <Col md={8} className="img-container">
                  <img alt={item.title} className="item-imagen" src={item.picture} />
                </Col>
                <Col md={4} className="info-container">
                  <span className="item-conditions">
                    {item.condition === 'used' ? 'Usado' : 'Nuevo'} - {item.sold_quantity} vendidos
                  </span>
                  <h1 className="item-title">{item.title}</h1>
                  <h2 className="item-price">$ {item.price.amount}</h2>
                  <button className="boton-comprar">Comprar</button>
                  {item.free_shipping && (
                    <p className="shipping">
                      <span>Envíos a todo el país</span>
                    </p>
                  )}
                </Col>
          </Row>
          <Row>
              <Col md={8}  className="description-container">
                <h3 className="description-title">Descripción del producto</h3>
                <p className="description-text" dangerouslySetInnerHTML={{__html: item.description}} />
              </Col>
          </Row>
          

    <style jsx="true">{`
    .detalle-container {
      min-height: 600px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
      margin-bottom: 20px;
    }
      .description-container{
        padding: 32px;
        text-align: left;
      }
      .description-title{
        margin: 0px;
        padding-bottom: 32px;
        font-size: 28px;
      }
      .description-text{
        font-size: 16px;
        color: #999999;
        font-weight: 400;
        text-overflow: ellipsis;
      }
      .info-container{
        text-align: left;
        padding-top: 32px;
        padding-right: 32px;
      }
      .item-conditions {
        font-size: 14px;
        color: #666;
      }
      .item-title{
        color: #333;
        margin: 0px;
        font-size: 24px;
        margin-top: 16px;
        font-weight: 600;
        line-height: 1.3;
      }
      .item-price{
        font-size: 46px;
        margin: 0px;
        padding: 32px 0px;
        color: #333;
        font-weight: 300;
      }
      .img-container{
        padding: 32px;
      }
      .item-imagen{
        border-radius: 4px;
        width: 680px;
        height: 'auto';
      }
      .shipping {
        color: #39b54a;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
      .boton-comprar {
        padding: 12px 24px;
        border-color: #3483fa;
        border: 1px solid;
        background-color: #3483fa;
        display: inline-block;
        width: 100%;
        font-size: 18px;
        border-radius: 4px;
        font-weight: 400;
        color: #fff;
        cursor: pointer;
      }
      @media (max-width: 770px) {
        .description-container{
          word-wrap: break-word;
        }
        .info-container {
          padding: 32px;
        }
      }
      @media (max-width: 1200px) {
        .item-imagen{
          width: 100%;
        }
      }
  
      }
    `}</style>
  </div>
      )
    }
   
  }
}
