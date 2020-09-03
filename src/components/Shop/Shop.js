import React, {Component} from 'react';
import axios from 'axios';
//images
import shert from '../../assets/images/products/shert.jpg';
import pants from '../../assets/images/products/pants.jpg';
import skirt from '../../assets/images/products/skirt.jpg';
//components
import Spinner from '../UI/Spinner/Spinner';
import Products from './Products//Products';
import Modal from '../UI/Modal/Modal';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import OrderSummary from './OrderSummary/OrderSummary';
import Filter from '../UI/Filter/Filter';
//redux
import { connect } from 'react-redux';
//actions
import * as actionCreators from '../../store/actions/allActions'

const PRODUCTS_IMAGES = {
    shert: shert,
    pants: pants,
    skirt: skirt,
}
const PRODUCTS_PRICES = {
    shert: 10,
    pants: 4.3,
    skirt: 5.4,
}
const PRODUCTS_SIZES = {
    shert: ["X", "L", "XL", "XXL"],
    pants: ["X", "M", "XL"],
    skirt: ["S", "X", "XXL"],
}

class Shop extends Component {
    
    state = {
        orderable: false,
        order:true
    }
    updatePurchasable = (products) => {
        if(products){
            const sum = Object.keys(products)
            .map(productKey =>{
                return products[productKey]
            })
            .reduce((first, next) => {
                return first + next
            },0)
            return  sum>0;
        }  
    }
    componentDidMount () {
        this.props.initProducts()
    }
    orderHandler = () => {
        this.props.initPurchase();
        this.props.history.push('/checkout')
       }
    addProduct = (productName) => {
        this.props.addProduct(productName);
    }
    removeProduct = (productName) => {
        this.props.removeProduct(productName);
    }
    render () {
        const productsComponent = this.props.products?  <Products 
        productImages={PRODUCTS_IMAGES}
        productPrices={PRODUCTS_PRICES}
        productSizes={PRODUCTS_SIZES}
        removeProduct={this.removeProduct}
        addProduct={this.addProduct}/>:<Spinner/>
        
        let ordeSummary = null;
        let filterProducts = null;
        if (this.props.products){
            ordeSummary = 
            <OrderSummary 
                products={this.props.products}
                totalPrice={this.props.totalPrice}
            />
            filterProducts =
            <Filter
                size={this.props.size}
                filterSize={this.props.filterSize}
            />
        }
        return (
            <div>
                <h1>Our shop</h1>
                {filterProducts}
                {productsComponent}
                <p>{this.props.errorMessage}</p>
                <Modal 
                    products={this.props.products}
                    totalPrice={this.props.totalPrice}
                    orderable={this.updatePurchasable(this.props.products)}
                    orderHandler={this.orderHandler}
                >
                    {ordeSummary}
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        products: state.shopReducer.products,
        filterProductsList: state.shopReducer.filterProductsList,
        size: state.shopReducer.size,
        totalPrice: state.shopReducer.totalPrice,
        errorMessage: state.shopReducer.errorMessage,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addProduct: (productName) => dispatch(actionCreators.addProduct(productName)),
        removeProduct: (productName) => dispatch(actionCreators.removeProduct(productName)),
        filterSize: (size) => dispatch(actionCreators.filterSize(size)),
        initProducts: () => dispatch(actionCreators.initProducts()),
        initPurchase: () => dispatch(actionCreators.initPurchase()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Shop,axios));