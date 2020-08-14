import React, { Component } from 'react';
import { Collapsible } from 'react-materialize';
import axios from 'axios';

//components
import Order from './Order/Order';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../hoc/Auxilary/Auxilary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


class Orders extends Component {
    state={
        orders: [],
        loading: true
    }
    componentDidMount () {
        axios.get('https://e-commerce-5e72e.firebaseio.com/order.json')
            .then ( responce => {
                const orders = []
                for (let key in responce.data){
                    console.log(responce.data[key],key,responce.data)
                    orders.push ({
                        ...responce.data[key],
                        id: key
                    });
                }
                console.log(orders)
                this.setState ({
                    orders: orders,
                    loading: false
                })
            })
            .catch( error => {
                this.setState ({
                    loading: false
                })
            })
    }
    render() {
        let orders = this.state.orders?
        <Collapsible accordion popout >
        {this.state.orders.map(order => {
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
           
        if(this.state.loading){
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

export default withErrorHandler(Orders,axios);