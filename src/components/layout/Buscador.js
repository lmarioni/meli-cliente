import React, { Component } from 'react'
import Styles from './Layout.module.css'
import lupa from '../../assets/Search.png';
import { withRouter } from 'react-router-dom';

class Buscador extends Component {
  state = {
    search: ''
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  handleSubmit (e) {
    e.preventDefault();
      if(this.state.search !== ''){
        //al menos que ponga un caracter
        this.props.history.replace(`/items?search=${this.state.search}`);
      }
	}

  render() {
    const { search } = this.state
 
      return (
        <div className={Styles.Search}>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <input 
              className={Styles.Buscar}  
              type="text"
              name="search"
              value={search}
              onChange={this.handleChange}
              placeholder="Buscar productos, marcas y más..."  />
              <button type="submit" className={Styles.BtnBuscar} >
                <img className={Styles.ImgLupa} alt="Buscar" src={lupa} />
              </button>    
          </form>
        </div>
      )
    
  }
}
export default withRouter(Buscador);