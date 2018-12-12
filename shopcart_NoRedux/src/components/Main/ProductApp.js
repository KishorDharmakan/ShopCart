
import React from 'react';
import { ContextConsumer } from './Provider';
import ProductListView from '../ListProducts/ProductListView';

const ProductApp = props => {

    return (
        <ContextConsumer>
            {(val) => {
                console.log('context:', val);
                console.log('context.state:', val.state);
                return <ProductListView productlist={val.state.productList} />
            }
            }
        </ContextConsumer>
    );
}


export default ProductApp;