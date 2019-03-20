import React, { Component } from 'react'
import { Col } from 'react-flexbox-grid';
import shipping from '../../../assets/Shipping.png';
import { Link } from 'react-router-dom';

class Item extends Component {
   
  render() {
    const { ...item } = this.props
    const { id } = item

    return (
      <Col md={12}>
      <Link to={`/items/${id}`} style={{textDecoration: 'none',color: "#333333"}}>
        <div className="item">
            <img className="item-imagen" src={item.picture} alt={item.title} />
            <div className="item-info">
              <h2 className="item-precio">
                  $ {item.price.amount}
                  { item.free_shipping ? <img alt={item.title} className="img-shipping" src={shipping} /> : '' }
              </h2>
              <h1 className="item-titulo">{item.title} {item.free_shipping}</h1>
            </div>
        </div>

        <style jsx="true">{`
          .item {
            cursor: pointer;
            display: flex;
            position: relative;
            height: 214px;
            margin-top: 30px;
          }
          .item::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            width: 100%;
            border-bottom: 1px solid #eee;

            
          }
          .item-imagen {
            margin: 16px;
            display: inline-block;
            width: 180px;
            height: 180px;
          }
          .item-info {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
          }
          .item-precio {
            color: #333;
            font-size: 24px;
            font-weight: 400;
            text-align: left;
            margin: 0px;
            padding-bottom: 32px;
          }
          .img-shipping {
              width: 18px;
              margin-left: 10px;
          }
          .item-titulo {
            color: #333;
            font-size: 18px;
            font-weight: 300;
            margin: 0px;
            padding: 0px;
            text-align: left;

          }
          
          @media (max-width: 480px) {
            item-precio {
              font-size: 24px;
            }
            .item-titulo {
              font-size: 18px;
            }
            .item-imagen{
                min-width: 180px;
                height: auto;
            }
          }
        `}</style>
        </Link>
      </Col>
    )
  }
}

export default Item