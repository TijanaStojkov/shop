import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';

class orderSummary extends Component {
    render(){
        const productsList = this.props.products?Object.keys(this.props.products).map(productKey => {
            return <li key={productKey}><span style={{textTransform: 'capitalize'}}>{productKey}</span>: {this.props.products[productKey]}</li>
        }): ""
        return(
            <Aux>
            <ul>
                {productsList}
            </ul>
            <p>Total price: {this.props.totalPrice.toFixed(2)}$</p>
        </Aux>
        )
    }
}
    
export default orderSummary;