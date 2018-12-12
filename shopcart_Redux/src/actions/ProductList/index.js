import ProductListValues from '../../stub/ProductList';

export const FETCH_PRODUCTS = 'fetch_products';
export const CREATE_PRODUCT = 'create_product';
export const FETCH_PRODUCT = 'fetch_product';

export function fetchProducts() {
    console.log('inside fetchProducts');
    const productsList = ProductListValues.Products
    console.log('productsList:', productsList);
    return {
        type: FETCH_PRODUCTS,
        payload: productsList
    };
}

export function createProduct(values) {
    console.log('inside createProduct values:', values);
    const newValues = values;
    const formatterNewVal = {
        "product_id": newValues.productId,
        "product_name": newValues.productName,
        "product_description": newValues.productDescription,
        "product_photo": newValues.productPhoto,
        "product_category": newValues.productCategory,
        "product_price": newValues.productPrice
    }

    return {
        type: CREATE_PRODUCT,
        payload: formatterNewVal
    };
}

// Fetch Post with id (for PostShow component)
export function fetchProduct(id) {
    const productId = id

    return {
        type: FETCH_PRODUCT,
        payload: productId
    };
}
