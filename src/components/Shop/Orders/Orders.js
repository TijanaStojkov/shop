import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Order from './Order/Order'


class Orders extends Component {
    render() {
        return (
            <Aux>
                <h3>Orders</h3>
                <Order />
            </Aux>
        )
    }
}

export default Orders;