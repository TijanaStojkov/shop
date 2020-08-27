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
import * as actionTypes from '../../store/actions'

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
        errorMessage: "",
        size: '',
        order:true
    }
    updatePurchasable = (products) => {
        const sum = Object.keys(products)
        .map(productKey =>{
            return products[productKey]
        })
        .reduce((first, next) => {
            return first + next
        },0)
        return  sum>0;
    }
    componentDidMount () {
        /*axios.get('https://e-commerce-5e72e.firebaseio.com/products.json')
        .then(resp =>{
            this.setState({
                products: resp.data,
                filterProductsList: resp.data
            })
        })
        .catch(error => {
            this.setState({
                errorMessage: "Network error get"
            })
        })*/
    }
    orderHandler = () => {
        this.props.history.push('/checkout')
       }
    addProduct = (productName) => {
        this.props.addProduct(productName);
        window.setTimeout (() => { this.listProducts(); }, 0);
    }
    removeProduct = (productName) => {
        this.props.removeProduct(productName);
        window.setTimeout (() => { this.listProducts(); }, 0);
    }
    filterSize = (e) => {
        this.setState({
            size: e.target.value
        }, function () {
            this.listProducts()
        })
    }
    listProducts = () => {
        if(this.state.size!==''){
            const selected = this.state.size;
            var filterProductsList = {...this.props.products};
            Object.keys(PRODUCTS_SIZES).forEach(element => {
                if(PRODUCTS_SIZES[element].indexOf(selected.toUpperCase())<0){
                delete filterProductsList[element]
                }
            });
            this.props.filterProducts(filterProductsList)
        }
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
                filterSize={this.filterSize}
            />
        }
        return (
            <div>
                <h1>Our shop</h1>
                {filterProducts}
                {productsComponent}
                <p>{this.state.errorMessage}</p>
                <Modal 
                    products={this.props.products}
                    totalPrice={this.state.totalPrice}
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
        products: state.products,
        filterProductsList: state.filterProductsList,
        size: state.size,
        totalPrice: state.totalPrice
    }
};
const mapDispachToProps = dispach => {
    return {
        addProduct: (productName) => dispach({type: actionTypes.ADD_PRODUCT, productName: productName}),
        removeProduct: (productName) => dispach({type: actionTypes.REMOVE_PRODUCT, productName: productName}),
        filterProducts: (filterProductsList) => dispach({type: actionTypes.FILTER, filterProductsList: filterProductsList}),
        filterSize: (size) => dispach({type: actionTypes.FILTER_SIZE, value: size})
    }
}

export default connect(mapStateToProps,mapDispachToProps)(withErrorHandler(Shop,axios));