import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Spinner from '../../UI/Spinner/Spinner'

const orderSummary = (props) => {

    const productsList = props.products? Object.keys(props.products).map(productKey => {
        return <li><span style={{textTransform: 'capitalize'}}>{productKey}</span>: {props.products[productKey]}</li>
    }):<Spinner/>

    return (
        <Aux>
            <ul>
                {productsList}
            </ul>
            <p>Total price: {props.totalPrice.toFixed(2)}$</p>
        </Aux>
    )
}
    
export default orderSummary;