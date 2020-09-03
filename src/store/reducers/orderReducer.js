import * as actionTypes from '../actions/actionTypes';

const initState = {
    orders: [],
    loading: false,
    purchased: false,
    loadingOrders: false
}

const orderReducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_PRODUCTS_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                order: state.orders.concat(newOrder),
                purchased: true
            }
        case actionTypes.PURCHASE_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.PURCHASE_PRODUCTS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.INIT_PURCHASE:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.FETCH_ORDERS:
            return {
                ...state,
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loadingOrders: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loadingOrders: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                error: action.error.message,
                loadingOrders: false
            }
        default:
            return state
}
}

export default orderReducer;