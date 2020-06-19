import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';

//components
import CheckoutSummary from './CheckoutSummary';
import ButtonUI from '../../UI/Button/Button';

//images
import shert from '../../../assets/images/products/shert.jpg';
import pants from '../../../assets/images/products/pants.jpg';
import skirt from '../../../assets/images/products/skirt.jpg';

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
        products: null,
        filterProductsList: {
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
                    products={this.state.filterProductsList} 
                    filterProductsList={this.state.filterProductsList}
                    productImages={PRODUCTS_IMAGES}
                    productPrices={PRODUCTS_PRICES}
                    productSizes={PRODUCTS_SIZES}/>
                    <ButtonUI ClassName = 'red lighten-3' clicked={this.onCheckoutCancle} text='Cancle' textOrIcon=''></ButtonUI>
                    <ButtonUI ClassName = 'green lighten-3' clicked={this.onCheckoutContinue} text = 'Continue' textOrIcon=''/>
            </Aux>
        )
    }
        
}
export default Checkout;