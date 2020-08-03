import React, { Component } from 'react';
import axios from 'axios';
import ButtonUI from '../../../UI/Button/Button';
import { Row, Col } from 'react-materialize';
import './ContactData.css'


class CheckoutData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCOde: ''
        }
    }
    orderHandler = (e) => {
        e.preventDefault()
        console.log(this.props.products)
        const products = {
        products: this.props.products,
        price: this.props.totalPrice,
            customer: {
                name: 'Tijana Stojkov',
                address: {
                    street: "Njegoseva",
                    zipCode: "23000",
                    country: "Greece",
                },
            },
            deliveryMethod: 'fast'
        }
        axios.post('https://e-commerce-5e72e.firebaseio.com/order.json', products)
        .then(responce => {
            console.log(responce)
        })
        .catch(error => {
            this.setState({
                errorMessage: "Network error post",
            })
        })
    }
    render() {
        return(
            <Row>
                <Col s={3}/>
                <Col s={6}>
                <h4 className='center '>Enter your contact data</h4>
                <form className='text-placeholder'>
                    <input type='text' name='name' placeholder='Your name'/>
                    <input type='email' name='email' placeholder='Your email'/>
                    <input type='text' name='street' placeholder='Your street'/>
                    <input type='text' name='postal' placeholder='Your postal'/>
                    <ButtonUI  
                        ClassName = 'green lighten-2'
                        text = 'Order'
                        textOrIcon = ''
                        clicked = {this.orderHandler}
                    />
                   
                </form>
                </Col>
                <Col s={3}/>
            </Row>
        )
    }
}
export default CheckoutData;