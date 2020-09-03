import React, { Component } from 'react';
import { Collapsible } from 'react-materialize';
import axios from 'axios';

//components
import Order from './Order/Order';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../hoc/Auxilary/Auxilary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

//redux
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/allActions';
class Orders extends Component {
   
    componentDidMount () {
        this.props.fetchOrders()
    }
    render() {
        let orders = this.props.orders?
        <Collapsible accordion popout >
        {this.props.orders.map(order => {
            return (
                <Order 
                    key={order.id}
                    name={order.orderData.name} 
                    deliveryMethod={order.orderData.deliveryMethod}
                    products={order.products}
                    />
            )
        })}
        </Collapsible>: null
           
        if(this.props.loading){
            orders = <Spinner/>
        }
        return (
            <Aux>
                <h3>Orders</h3>
                {orders}
            </Aux>
        )
    }
}
const mapStateToProps = store => {
    return {
        orders: store.orderReducer.orders,
        loading: store.orderReducer.loadingOrders
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(actionCreators.fetchOrders())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));