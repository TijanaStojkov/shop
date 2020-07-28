import React, { Component } from 'react';
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