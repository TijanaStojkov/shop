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
import OrderComponent from './Checkout/Checkout';

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
        products: null,
        filterProductsList: null,
        totalPrice: 0,
        orderable: false,
        errorMessage: "",
        size: '',
        order:true
    }
    removeProduct = (productName) => {
        //count
        const oldProductCount = this.state.products[productName];
        if (oldProductCount===0){
            return;
        }
        const newProductCount =  oldProductCount - 1;
        const products = {
            ...this.state.products
        }
        products[productName] = newProductCount;
        //totalPrice
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice - PRODUCTS_PRICES[productName]
 
        this.setState({
            products: products,
            filterProductsList: products,
            totalPrice: newTotalPrice
        }, function(){
            this.listProducts()
        })
        this.updatePurchasable(products);
    }
    addProduct = (productName) => {
        //count
        const oldProductCount = this.state.products[productName];
        const newProductCount =  oldProductCount + 1
        const products = {
            ...this.state.products
        }
        products[productName] = newProductCount
        //totalPrice
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice + PRODUCTS_PRICES[productName]

        this.setState({
            products: products,
            filterProductsList: products,
            totalPrice: newTotalPrice
        }, function(){
            this.listProducts()
        })
        this.updatePurchasable(products);
        
    }
    updatePurchasable = (products) => {
        const sum = Object.keys(products)
        .map(productKey =>{
            return products[productKey]
        })
        .reduce((first, next) => {
            return first + next
        },0)
        this.setState({
            orderable: sum>0
        })
    }
    componentDidMount () {
        axios.get('https://e-commerce-5e72e.firebaseio.com/products.json')
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
        })
    }
    orderHandler = () => {
        const queryParams = [];
        for (let i in this.state.products){
            queryParams.push(i + '=' + this.state.products[i])
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString = queryParams.join('&')
        //this.props.history.push('/checkout')
        this.props.history.push({
            pathname:'/checkout',
            search: '?' + queryString
        })
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
            var filterProductsList = {...this.state.products};
            Object.keys(PRODUCTS_SIZES).forEach(element => {
                if(PRODUCTS_SIZES[element].indexOf(selected.toUpperCase())<0){
                delete filterProductsList[element]
                }
            });
            this.setState({
                filterProductsList: filterProductsList
            })
        }
    }
    render () {
        const productsComponent = this.state.products?  <Products 
        products={this.state.filterProductsList} 
        filterProductsList={this.state.filterProductsList}
        productImages={PRODUCTS_IMAGES}
        productPrices={PRODUCTS_PRICES}
        productSizes={PRODUCTS_SIZES}
        removeProduct={this.removeProduct}
        addProduct={this.addProduct}/>:<Spinner/>
        
        let ordeSummary = null;
        let filterProducts = null;
        if (this.state.products){
            ordeSummary = 
            <OrderSummary 
                products={this.state.products}
                totalPrice={this.state.totalPrice}
            />
            filterProducts =
            <Filter
                size={this.state.size}
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
                    products={this.state.products}
                    totalPrice={this.state.totalPrice}
                    orderable={this.state.orderable}
                    orderHandler={this.orderHandler}
                >
                    {ordeSummary}
                </Modal>
            </div>
        )
    }
}

export default withErrorHandler(Shop,axios);