import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addProduct = (productName) => {
    return {
        type: actionTypes.ADD_PRODUCT, 
        productName: productName
    }
}
export const removeProduct = (productName) => {
    return {
        type: actionTypes.REMOVE_PRODUCT, 
        productName: productName
    }
}
export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    }
}
export const fetchProductsFaild = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILD,
    }
}
export const initProducts = () => {
    return dispatch => {
        axios.get('https://e-commerce-5e72e.firebaseio.com/products.json')
        .then(resp =>{
            dispatch (setProducts(resp.data))
        })
        .catch(error => {
            dispatch (fetchProductsFaild())
        })
    }
}
