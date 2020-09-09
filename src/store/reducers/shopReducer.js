import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initalState = {
    totalPrice: 0,
    products: null,
    filterProductsList: null,
    size: '',
    errorMessage: '',
    loading: false
}
const PRODUCTS_SIZES = {
    blackSkirt: ["X", "L", "XL", "XXL"],
    pinkSkirt: ["X", "M", "XL"],
    redSkirt: ["S", "X", "XXL"],
    blackWhiteSkirt: ["X", "L", "M", "XXL"],
    skirtWithFlowers: ["S", "M", "XL"],
    liteblueShirt: ["S", "X", "XXL"],
    blueShirt: ["X", "L", "XL", "XXL"],
    brownPants: ["X", "M", "XL"],
    creamPants: ["S", "X", "XXL"],
    greenPants: ["S", "M", "XL"],
    jeans: ["S", "X", "XXL"],
    pisotivityShirt: ["S", "M", "XL"],
    shirtBlackWhite: ["S", "X", "XXL"],
    shirtLongSleeves: ["S", "M", "XL"],
    whiteShirt: ["S", "X", "XXL"],
    wightPants: ["S", "M", "XL"]
}
const PRODUCTS_PRICES = {
    blackSkirt: 15.0,
    pinkSkirt: 20.4,
    redSkirt: 18.7,
    blackWhiteSkirt: 22.5,
    skirtWithFlowers: 22.4,
    liteblueShirt: 20.1,
    blueShirt: 17.3,
    brownPants: 30.4,
    creamPants: 35.5,
    greenPants: 30.1,
    jeans: 33.3,
    pisotivityShirt: 15.8,
    shirtBlackWhite: 20.3,
    shirtLongSleeves: 29.4,
    whiteShirt: 25.1,
    wightPants: 30.0
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
            })

        case actionTypes.REMOVE_PRODUCT:
            const newProductsRemove = {...state.products};
            const newProductCountRemove = newProductsRemove[action.productName] - 1;
            newProductsRemove[action.productName] = newProductCountRemove;

            const filterProductsListRemove = listProducts(state, newProductsRemove, '')
            const filteredProductsListRemove = filterProductsListRemove?filterProductsListRemove:newProductsRemove
            return updateObject(state,{
                products: newProductsRemove,
                filterProductsList: filteredProductsListRemove ,
                totalPrice: state.totalPrice - PRODUCTS_PRICES[action.productName]
            })
            
        case actionTypes.FILTER_SIZE:
            const filterProductsListSize = listProducts(state, state.products, action.size)
            return updateObject(state, {size: action.size, filterProductsList: filterProductsListSize})

        case actionTypes.SET_PRODUCTS:
            return updateObject(state, {products: action.products, filterProductsList: action.products, errorMessage: '', totalPrice: 0, size: ''})

        case actionTypes.FETCH_PRODUCTS_FAILD:
            return updateObject(state, {errorMessage: 'Fetching products faild!'})
        default:
            return state;
    }
}

export default shopReducer;