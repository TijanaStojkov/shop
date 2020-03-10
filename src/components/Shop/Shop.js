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

class Shop extends Component {
    state = {
        products: null,
        totalPrice: 0,
        orderable: false,
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
            totalPrice: newTotalPrice
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
            totalPrice: newTotalPrice
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
                products: resp.data
            })
        })
    }
   
    render () {
        const productsComponent = this.state.products?  <Products 
        products={this.state.products} 
        productImages={PRODUCTS_IMAGES}
        productPrices={PRODUCTS_PRICES}
        removeProduct={this.removeProduct}
        addProduct={this.addProduct}/>:<Spinner/>
        return (
            <div>
                <h1>Our shop</h1>
                {productsComponent}
                <Modal 
                    products={this.state.products}
                    totalPrice={this.state.totalPrice}
                    orderable={this.state.orderable}/>
            </div>
        )
    }
}

export default Shop;