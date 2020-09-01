import * as actionTypes from './actionTypes';

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
