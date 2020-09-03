import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import { Route, Redirect } from 'react-router-dom'

//components
import CheckoutSummary from './CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData'

//images
import shert from '../../../assets/images/products/shert.jpg';
import pants from '../../../assets/images/products/pants.jpg';
import skirt from '../../../assets/images/products/skirt.jpg';

//redux
import { connect } from 'react-redux';

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
        orderable: false,
        errorMessage: "",
        order:true
    }
    onCheckoutCancle = () => {
        this.props.history.goBack();
    }
    onCheckoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    render(){
        let summary = <Redirect to='/'/>

        if(this.props.products){
            const purchasedRedirect =  this.props.purchased? <Redirect to='/'/>:null;
            summary =  <div>
                            {purchasedRedirect}
                            <CheckoutSummary
                                order={this.state.order}
                                products={this.props.products}
                                productImages={PRODUCTS_IMAGES}
                                productPrices={PRODUCTS_PRICES}
                                productSizes={PRODUCTS_SIZES}
                                onCheckoutCancle={this.onCheckoutCancle}
                                onCheckoutContinue={this.onCheckoutContinue}
                            />
                             <Route 
                                path={this.props.match.path + '/contact-data'} 
                                component={ContactData} />
                        </div>
        }
        return(
            <Aux>
               {summary}
            </Aux>
        )
    }   
}

const mapStateToProps = state => {
    return {
        products: state.shopReducer.products,
        purchased: state.orderReducer.purchased
    }
}
export default connect(mapStateToProps)(Checkout);