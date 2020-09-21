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
        this.props.fetchOrders(this.props.token, this.props.userId)
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
                    deleteOrder={() => this.props.deleteOrder(order.id, this.props.token)}
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
const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loadingOrders,
        token: state.authReducer.token,
        userId: state.authReducer.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token,userId) => dispatch(actionCreators.fetchOrders(token,userId)),
        deleteOrder: (orderId, token) => dispatch(actionCreators.deleteOrder(orderId, token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));