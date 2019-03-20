import React, { Component } from 'react'
import queryString from 'query-string'
import axios from 'axios';
import { Row } from 'react-flexbox-grid';
import MDSpinner from "react-md-spinner";
import Item from './Item';
import NoResult from '../error/NoResult';

export default class Items extends Component {
  state ={
    result: {},
    cargando: true //variable para ver si pongo o no el spinner de carga
  }
  componentDidMount(){
    const values = queryString.parse(this.props.location.search);
    this.getItems(values);
  }

  getItems(values){
    //busco en la API los items
    axios.get(`http://localhost:4000/items?q=${values.search}`)
    .then(res => {
        this.setState({
          result: res.data,
          cargando: false
        });
        if(values.search){
          document.title = values.search.charAt(0).toUpperCase() + values.search.slice(1) + ' en Mercado Libre';//cambio el title si hay un parametro de busqueda
        }else{
          document.title = "Mercado Libre Argentina"; 
        }
    })
  }

  componentWillMount() {
    //me fijo si cambia la url, esto es para se hace una nueva busqueda estando en /items (ya que componentDidMount no ejecutaria de nuevo)
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({
        cargando:true
      });
    const values = queryString.parse(location.search);
      this.getItems(values);
    });
  }
  componentWillUnmount() {
    //dejo de escuchar cuando se desmonta el componente
      this.unlisten();
  }

  render() {

    const { items } = this.state.result;

    if(this.state.cargando){ // pongo spinnet
      return (
        <div style={{marginTop: 60,display: 'flex',justifyContent:'center'}}>
          <MDSpinner singleColor="#e6cf00" />
        </div>
      )
    }else{
      if(!this.state.result){ //si no hay ningun resultado o la api devuelve error
        return <NoResult />;
      }else{ //obtengo resultado de la api
        return(
          <Row style={{backgroundColor: 'white'}}>
              {items.map(item => (
                  <Item {...item} key={item.id} />
              ))}
          </Row>
        )
      }
    }
  }
}
