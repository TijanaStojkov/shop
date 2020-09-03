import * as actionTypes from './actionTypes';
import axios from 'axios';

export const purchaseProductsStart = () => {
    return {
        type: actionTypes.PURCHASE_PRODUCTS_START
    }
}
export const PurchaseProductsSuccess = (orderId, orderData) => {
    return {
        type: actionTypes.PURCHASE_PRODUCTS_SUCCESS,
        orderId: orderId,
        orderData: orderData
    }
}
export const PurchaseProductsFail = (error) => {
    return {
        type: actionTypes.PURCHASE_PRODUCTS_FAIL,
        error: error
    }
}
export const purchaseProducts = (orderData) => {
    return dispatch => {
        dispatch(purchaseProductsStart());
        axios.post('https://e-commerce-5e72e.firebaseio.com/order.json', orderData)
        .then(response => {
            dispatch(PurchaseProductsSuccess(response.data.name, orderData))
        })
        .catch(error => {
            dispatch(PurchaseProductsFail(error))
        })
    }
}
export const initPurchase = () => {
    return {
        type: actionTypes.INIT_PURCHASE
    }
}
export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    }
}
export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}
export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}
export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('https://e-commerce-5e72e.firebaseio.com/order.json')
            .then ( response => {
                const orders = []
                for (let key in response.data){
                    console.log(response.data[key],key,response.data)
                    orders.push ({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch (fetchOrdersSuccess(orders))
            })
            .catch( error => {
                dispatch (fetchOrdersFail(error))
            })
    }
}
        