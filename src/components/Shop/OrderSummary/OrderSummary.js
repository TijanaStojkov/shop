import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import util from '../../hoc/Currency/Currency'

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
            <p><b>Total price: {util.formatCurrency(this.props.totalPrice)}</b></p>
        </Aux>
        )
    }
}
    
export default orderSummary;