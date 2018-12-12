import React from 'react';
import './ListProducts.css';

export const ProductDescription = (props) => {

    return (
        <div>            
            <div className="card cardstyle rounded mx-auto d-block">
                <span className="badge badge-pill badge-secondary"><h4>Category: {props.productVal.product_category}</h4></span>
                <div>
                    <h5 className="card-title productprice">{props.productVal.product_name}</h5>
                </div>
                <img className="card-img-top" src={props.productVal.product_photo} alt="Card imge " />
                <div className="card-body">
                    <h5 className="card-title productprice">{props.productVal.product_price}</h5>
                    <p className="card-text">{props.productVal.product_description}</p>
                </div>
            </div>
        </div>
    )
    
}