import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import { Route } from 'react-router-dom'

//components
import CheckoutSummary from './CheckoutSummary';
import CheckoutData from '../Checkout/ContactData/ContactData'

//images
import shert from '../../../assets/images/products/shert.jpg';
import pants from '../../../assets/images/products/pants.jpg';
import skirt from '../../../assets/images/products/skirt.jpg';
import product from '../Products/Product/Product';

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

class Checkout extends Component{
    
    state = {
        products: {
            pants:0,
            shert:1,
            skirt:4
        },
        totalPrice: 0,
        orderable: false,
        errorMessage: "",
        size: '',
        order:true
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        console.log(query)
        const products = {};
        for (let param of query.entries()){//['pants','1']
            products[param[0]] = +param[1]
        }
        this.setState({
            products: products
        })
    }
    onCheckoutCancle = () => {
        this.props.history.goBack();
    }
    onCheckoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    render(){
        return(
            <Aux>
                <CheckoutSummary
                    order={this.state.order}
                    filterProductsList={this.state.products}
                    productImages={PRODUCTS_IMAGES}
                    productPrices={PRODUCTS_PRICES}
                    productSizes={PRODUCTS_SIZES}
                    onCheckoutCancle={this.onCheckoutCancle}
                    onCheckoutContinue={this.onCheckoutContinue}
                    />
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        render={() => (<CheckoutData products={this.state.products}/>)}
                        />
            </Aux>
        )
    }
        
}
export default Checkout;