import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Products from '../Products/Products';
import ButtonUI from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
        return(
            <Aux>
                <h1>Your order</h1>
                <Products 
                    order={props.order}
                    filterProductsList={props.products}
                    productImages={props.productImages}
                    productPrices={props.productPrices}
                    productSizes={props.productSizes}/>
                    <ButtonUI class='red lighten-3' clicked={props.onCheckoutCancle} text='Cancle' />
                    <ButtonUI class='green lighten-3' clicked={props.onCheckoutContinue} text = 'Continue' />
            </Aux>
        )
}
export default CheckoutSummary;