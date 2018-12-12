import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createProduct } from '../../actions/ProductList';
import './AddProduct.css';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: '',
            productName: '',
            productDescription: '',
            productPhoto: 'https://picsum.photos/200/300/?random',
            productCategory: '',
            productPrice: '',
            redirection: false
        }
    }

    handleOnChange = (event) => {
        console.log('inside handleOnChange event:', event.target.id);
        console.log('inside handleOnChange event.target.value:', event.target.value);
        const { id, value } = event.target;
        this.setState({
            [id]: value,
        })
    }

    handleOnSubmit = () => {
        console.log('inside handleOnSubmit state:', this.state);
        this.setState({
            redirection: true,
        })
        this.props.createProduct(this.state);
    }

    render() {
        console.log('inside render of ADdForm this.props:', this.props);

        if (this.state.redirection) {
            return <Redirect to="/" />
        }
        return (<div className="formstyle">
            <div className="form-group">
                <label>Product Id</label>
                <input id="productId" type="text" className="form-control" placeholder="Enter Id:[P0004]" onChange={this.handleOnChange} value={this.state.productId} />
            </div>
            <div className="form-group">
                <label >Product Name</label>
                <input id="productName" type="text" className="form-control" placeholder="Enter Product Name" onChange={this.handleOnChange} value={this.state.productName} />
            </div>
            <div className="form-group">
                <label >Product Description</label>
                <input id="productDescription" type="text" className="form-control" placeholder="Enter Product Description" onChange={this.handleOnChange} value={this.state.productDescription} />
            </div>
            <div className="form-group">
                <label >Product Photo</label>
                <input id="productPhoto" type="text" className="form-control" value="https://picsum.photos/200/300/?random" onChange={this.handleOnChange} />
            </div>
            <div className="form-group">
                <label >Product Category</label>
                <input id="productCategory" type="text" className="form-control" placeholder="Enter Software or Processor or RAM" onChange={this.handleOnChange} value={this.state.productCategory} />
            </div>

            <div className="form-group">
                <label >Product Price</label>
                <input id="productPrice" type="text" className="form-control" placeholder="Enter Product Price:[Rs 223]" onChange={this.handleOnChange} value={this.state.productPrice} />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleOnSubmit}
            >Submit</button>
        </div>)
    }
}

function mapStateToProps(state) {
    console.log('inside mapStateToProps of ProductApp state:', state);
    return { productsList: state.productsList };
}

export default connect(mapStateToProps, { createProduct })(AddForm);
