import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Products from '../Products/Products';
import ButtonUI from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
        return(
            <Aux>
                <Products 
                    order={props.order}
                    products={props.filterProductsList} 
                    filterProductsList={props.filterProductsList}
                    productImages={props.productImages}
                    productPrices={props.productPrices}
                    productSizes={props.productSizes}/>
                    <ButtonUI ClassName = 'red lighten-3' clicked={props.onCheckoutCancle} text='Cancle' textOrIcon=''></ButtonUI>
                    <ButtonUI ClassName = 'green lighten-3' clicked={props.onCheckoutContinue} text = 'Continue' textOrIcon=''/>
            </Aux>
        )
}
export default CheckoutSummary;