import React, { Component } from 'react';
import ProductListValues from '../../stub/ProductList';
//import ProductListView from '../ListProducts/ProductListView';
const Context = React.createContext('abcd');

export class Provider extends Component {
    constructor(props) {
        console.log('inside constructor of Provider');
        super(props);
        this.state = {
            productList: []
        }
    }
    componentWillMount() {
        console.log('inside componentWillMount of Provider');
        this.setState({ productList: ProductListValues.Products })
    }
    render() {
        console.log('Context:', Context);
        return (
            <Context.Provider value={{
                state: this.state,
                updateProductList: (val) => {
                    console.log('updateProductList ProductListValues.Products:', ProductListValues.Products);
                    console.log('updateProductList val:', val);
                    const finalVal = [...ProductListValues.Products, val];
                    console.log('updateProductList finalVal:', finalVal);
                    this.setState({
                        productList: [...ProductListValues.Products, val]
                    })
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;
export const ContextConsumer = Context.Consumer;