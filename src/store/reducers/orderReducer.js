import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initState = {
    orders: [],
    loading: false,
    purchased: false,
    loadingOrders: false,
    successMessage: ''
}

const orderReducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_PRODUCTS_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return updateObject (state, {loading: false, order: state.orders.concat(newOrder), purchased: true, successMessage: 'Your order was successful. We will contact you as soon as possible.'})
            
        case actionTypes.PURCHASE_PRODUCTS_FAIL:
            return updateObject (state, {loading: false})
            
        case actionTypes.PURCHASE_PRODUCTS_START:
            return updateObject (state, {loading: true})

        case actionTypes.INIT_PURCHASE:
            return updateObject (state, {purchased: false})

        case actionTypes.PURCHASE_PRODUCTS:
            return updateObject (state, {purchased: false})
          
        case actionTypes.FETCH_ORDERS_START:
            return updateObject (state, {loadingOrders: true})
            
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject (state, {orders: action.orders, loadingOrders: false})
            
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject (state, { error: action.error.message, loadingOrders: false})

        default:
            return state
    }
}

export default orderReducer;