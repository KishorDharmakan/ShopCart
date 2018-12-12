import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ProductListValues from '../../stub/ProductList';
import AddForm from './AddForm';
import Header from '../common/Header'
import Footer from '../common/Footer'
import './AddProduct.css'

class AddProduct extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         productList: ProductListValues.Products
    //     }
    // }
    
    render() {   
    
        return (
            <div>
                <Header/>
                <div  className="container">
                    <Link to="/" className="badge badge-primary" > Back To Product Listing Page </Link>
                    <h3 className="headerTitle">Create Product <span className="badge badge-secondary">New</span></h3>
                    <AddForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AddProduct;
