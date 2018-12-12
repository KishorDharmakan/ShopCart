import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductApp from './components/Main/ProductApp';
import Provider from '../src/components/Main/Provider'
import Header from '../src/components/common/Header'
import Footer from '../src/components/common/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Provider>
          <div className="row"><ProductApp /></div>          
          <Link to="/products/new" className="btn btn-primary add-product-button" > Add Product </Link>
          </Provider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
