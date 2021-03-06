import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import AddProduct from './components/AddProduct/AddProduct'
import ProductDetailView from './components/ListProducts/ProductDetailView'
import Provider from '../src/components/Main/Provider'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Provider>
        <BrowserRouter>
        <div>
        <Switch>
            <Route path="/products/new" component={AddProduct}/>
            <Route path="/products/:id" component={ProductDetailView}/>
            <Route path="/" component={App}/>
        </Switch>
        </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
