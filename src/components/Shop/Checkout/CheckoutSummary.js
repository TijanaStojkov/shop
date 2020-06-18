import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Products from '../Products/Products'


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
            </Aux>
        )
}
export default CheckoutSummary;