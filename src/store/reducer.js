import * as actionTypes from './actions/actionTypes';
import { updateObject } from './utility'

const initalState = {
    totalPrice: 0,
    products: null,
    filterProductsList: {
        pants:0,
        shert:0,
        skirt:0
    },
    size: '',
    errorMessage: '',
}
const PRODUCTS_SIZES = {
    shert: ["X", "L", "XL", "XXL"],
    pants: ["X", "M", "XL"],
    skirt: ["S", "X", "XXL"],
}
const PRODUCTS_PRICES = {
    shert: 10,
    pants: 4.3,
    skirt: 5.4,
}
const listProducts = (state, newProductsObject, size) => {
    if(state.size!=='' || size!==''){
        const selected = size!==''?size: state.size;
        var filterProductsList = {...newProductsObject};
        Object.keys(PRODUCTS_SIZES).forEach(element => {
            if(PRODUCTS_SIZES[element].indexOf(selected.toUpperCase())<0){
                delete filterProductsList[element]
            }
        });
        return filterProductsList
    }
}
const reducer = (state = initalState, action) => {
    switch (action.type){
        case actionTypes.ADD_PRODUCT:
            const newProductsAdd = {...state.products};
            const newProductCountAdd = newProductsAdd[action.productName] + 1;
            newProductsAdd[action.productName] = newProductCountAdd;
            
            const filterProductsListAdd = listProducts(state, newProductsAdd, '')
            const filteredProductsListAdd = filterProductsListAdd?filterProductsListAdd:newProductsAdd
            console.log('state-add', state)
            return updateObject(state,{
                products: newProductsAdd,
                filterProductsList: filteredProductsListAdd,
                totalPrice: state.totalPrice + PRODUCTS_PRICES[action.productName],
            })

        case actionTypes.REMOVE_PRODUCT:
            const newProductsRemove = {...state.products};
            const newProductCountRemove = newProductsRemove[action.productName] - 1;
            newProductsRemove[action.productName] = newProductCountRemove;

            const filterProductsListRemove = listProducts(state, newProductsRemove, '')
            const filteredProductsListRemove = filterProductsListRemove?filterProductsListRemove:newProductsRemove
            console.log('state-remove', state)
            return updateObject(state,{
                products: newProductsRemove,
                filterProductsList: filteredProductsListRemove ,
                totalPrice: state.totalPrice - PRODUCTS_PRICES[action.productName]
            })
            
        case actionTypes.FILTER_SIZE:
            const filterProductsListSize = listProducts(state, state.products, action.size)
            return updateObject(state, {size: action.size, filterProductsList: filterProductsListSize})

        case actionTypes.SET_PRODUCTS:
            return updateObject(state, {products: action.products, errorMessage: ''})

        case actionTypes.FETCH_PRODUCTS_FAILD:
            return updateObject(state, {errorMessage: 'Fetching products faild!'})
        default:
            return state;
    }
}

export default reducer;