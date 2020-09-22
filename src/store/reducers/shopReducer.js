import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { PRODUCTS_IMAGES, PRODUCTS_SIZES, PRODUCTS_PRICES } from '../../const/const';

const initalState = {
    totalPrice: 0,
    products: null,
    filterProductsList: null,
    size: '',
    errorMessage: '',
    loading: false,
    building: false,
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
const shopReducer = (state = initalState, action) => {
    switch (action.type){
        case actionTypes.ADD_PRODUCT:
            const newProductsAdd = {...state.products};
            const newProductCountAdd = newProductsAdd[action.productName] + 1;
            newProductsAdd[action.productName] = newProductCountAdd;
            
            const filterProductsListAdd = listProducts(state, newProductsAdd, '')
            const filteredProductsListAdd = filterProductsListAdd?filterProductsListAdd:newProductsAdd
            return updateObject(state,{
                products: newProductsAdd,
                filterProductsList: filteredProductsListAdd,
                totalPrice: state.totalPrice + PRODUCTS_PRICES[action.productName],
                building: true,
            })

        case actionTypes.REMOVE_PRODUCT:
            const newProductsRemove = {...state.products};
            const newProductCountRemove = newProductsRemove[action.productName]===0?newProductsRemove[action.productName]:newProductsRemove[action.productName] - 1;
            newProductsRemove[action.productName] = newProductCountRemove;

            const filterProductsListRemove = listProducts(state, newProductsRemove, '')
            const filteredProductsListRemove = filterProductsListRemove?filterProductsListRemove:newProductsRemove
            return updateObject(state,{
                products: newProductsRemove,
                filterProductsList: filteredProductsListRemove ,
                totalPrice: state.totalPrice - PRODUCTS_PRICES[action.productName],
                building: true,
            })
            
        case actionTypes.FILTER_SIZE:
            const filterProductsListSize = listProducts(state, state.products, action.size)
            return updateObject(state, {size: action.size, filterProductsList: filterProductsListSize})

        case actionTypes.SET_PRODUCTS:
            return updateObject(state, {products: action.products, filterProductsList: action.products, errorMessage: '', totalPrice: 0, size: '', building: false})

        case actionTypes.FETCH_PRODUCTS_FAILD:
            return updateObject(state, {errorMessage: 'Fetching products faild!'})
        default:
            return state;
    }
}

export default shopReducer;