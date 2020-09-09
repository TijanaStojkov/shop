import * as actionTypes from './actionTypes';
import axios from 'axios';

//purchase products
export const initPurchase = () => {
    return {
        type: actionTypes.INIT_PURCHASE
    }
}
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

//fetch orders
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
//delete order
export const deleteOrderSuccess = () => {
    return{
        type: actionTypes.DELETE_ORDER_SUCCESS
    }
}
export const deleteOrderfError = () => {
    return{
        type: actionTypes.DELETE_ORDER_ERROR
    }
}
export const deleteOrder = (orderId) =>{
    return dispatch => {
        axios.delete('https://e-commerce-5e72e.firebaseio.com/order/'+ orderId +'.json')
        .then(resp => {
            dispatch(fetchOrders())
        })
        .catch(error => {
            dispatch(deleteOrderfError())
        })
    }
}
        