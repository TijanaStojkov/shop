import React, {Component} from 'react';
import axios from 'axios';

//components
import Spinner from '../UI/Spinner/Spinner';
import Products from './Products//Products';
import Modal from '../UI/Modal/Modal';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import OrderSummary from './OrderSummary/OrderSummary';
import Filter from '../UI/Filter/Filter';
import Aux from '../hoc/Auxilary/Auxilary';
//redux
import { connect } from 'react-redux';
//actions
import * as actionCreators from '../../store/actions/allActions';
import { PRODUCTS_IMAGES, PRODUCTS_SIZES, PRODUCTS_PRICES } from '../../const/const';

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
    componentWillUnmount() {
        this.props.clearMessage()
    }
    orderHandler = () => {
        if(this.props.isAuth){
            this.props.history.push('/checkout')
        }else{
            this.props.setAuthRedirect('/checkout')
            this.props.history.push('/auth') 
        }
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
        const successMessage = this.props.successMessage!==''?<p className='successMesage'>{this.props.successMessage}</p>: null
        return (
            <Aux>
                {successMessage}
                <h1>Our shop</h1>
                {filterProducts}
                {productsComponent}
                <p>{this.props.errorMessage}</p>
                <Modal 
                    products={this.props.products}
                    totalPrice={this.props.totalPrice}
                    orderable={this.updatePurchasable(this.props.products)}
                    orderHandler={this.orderHandler}
                    isAuth={this.props.isAuth}
                >
                    {ordeSummary}
                </Modal>
            </Aux>
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
        successMessage: state.orderReducer.successMessage,
        isAuth: state.authReducer.token!==null,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addProduct: (productName) => dispatch(actionCreators.addProduct(productName)),
        removeProduct: (productName) => dispatch(actionCreators.removeProduct(productName)),
        filterSize: (size) => dispatch(actionCreators.filterSize(size)),
        initProducts: () => dispatch(actionCreators.initProducts()),
        setAuthRedirect: (path) => dispatch(actionCreators.setAuthRedirect(path)),
        clearMessage: () => dispatch(actionCreators.clearMessage())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Shop,axios));