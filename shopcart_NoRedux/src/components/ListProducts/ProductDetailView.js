import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductListValues from '../../stub/ProductList';
import { ProductDescription } from './ProductDescription';
import Header from '../common/Header'
import Footer from '../common/Footer'

class ProductDetailView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: ProductListValues.Products
        }
    }
    
    render() {
        const { id } = this.props.match.params; 
        console.log("id:", id);
        console.log("this.state.productList:", this.state.productList);
        let product=this.state.productList.filter((val) => {
                console.log("val:", val);
                return val.product_id===id;
            }
    
            ).map((val) => {
                console.log('val in map:', val)
                return <div><ProductDescription key={val.product_id} productVal={ val }/></div>;
            })     
    
        return (
            <div>
                <Header/>
                <div  className="container">
                    <Link to="/" className="badge badge-primary" > Back To Product Listing Page </Link>
                    {product}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ProductDetailView;
