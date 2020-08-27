import * as actionTypes from './actions';

const initalState = {
    totalPrice: 0,
    products: {
        pants:0,
        shert:0,
        skirt:0
    },
    filterProductsList: {
        pants:0,
        shert:0,
        skirt:0
    },
    size: '',
}
const PRODUCTS_PRICES = {
    shert: 10,
    pants: 4.3,
    skirt: 5.4,
}
const reducer = (state = initalState, action) => {
    switch (action.type){
        case actionTypes.ADD_PRODUCT:

            const newProductsAdd = {...state.products};
            const newProductCountAdd = newProductsAdd[action.productName] + 1;
            newProductsAdd[action.productName] = newProductCountAdd;
            console.log('state-add', state)

            return{
                ...state,
                products: newProductsAdd,
                filterProductsList: newProductsAdd,
                totalPrice: state.totalPrice + PRODUCTS_PRICES[action.productName]
            };
        case actionTypes.REMOVE_PRODUCT:

            const newProductsRemove = {...state.products};
            const newProductCountRemove = newProductsRemove[action.productName] - 1;
            newProductsRemove[action.productName] = newProductCountRemove;
            console.log('state-remove', state)

            return{
                ...state,
                products: newProductsRemove,
                filterProductsList: newProductsRemove,
                totalPrice: state.totalPrice - PRODUCTS_PRICES[action.productName]
            };
        case actionTypes.FILTER:
            const newFilterProductsList = action.filterProductsList;
            console.log('state-filter', state)

            return{
                ...state,
                filterProductsList: newFilterProductsList
            }
        case actionTypes.FILTER_SIZE:

            return{
                ...state,
                size: action.size
            }
            
        default:

            return state;
    }
}

export default reducer;