import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import { Route, Redirect } from 'react-router-dom'

//components
import CheckoutSummary from './CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData'

//const
import { PRODUCTS_IMAGES, PRODUCTS_SIZES, PRODUCTS_PRICES } from '../../../const/const';

//redux
import { connect } from 'react-redux';


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
                            <Route 
                                path={this.props.match.path + '/contact-data'} 
                                component={ContactData} />
                            <CheckoutSummary
                                order={this.state.order}
                                products={this.props.products}
                                productImages={PRODUCTS_IMAGES}
                                productPrices={PRODUCTS_PRICES}
                                productSizes={PRODUCTS_SIZES}
                                onCheckoutCancle={this.onCheckoutCancle}
                                onCheckoutContinue={this.onCheckoutContinue}
                            />
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