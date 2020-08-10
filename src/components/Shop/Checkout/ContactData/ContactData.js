import React, { Component } from 'react';
import axios from 'axios';
import ButtonUI from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import { Row, Col } from 'react-materialize';
import './ContactData.css';
import InputComponent from '../../../UI/Forms/Input/Input'


class CheckoutData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your name',
                },
                value: '',
            },
                
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your street',
                },
                value: '',
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your zipCode',
                },
                value: '',
            },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:'Your country',
                    },
                    value: '',
                },  
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder:'Your email',
                    },
                    value: '',
                },  
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value:'fastest', deliveryValue: 'Fastest'},
                            {value:'cheapest', deliveryValue: 'Cheapest'}
                        ]
                    },
                    value: '',
                },  
        },
        loading: false
    }
    orderHandler = (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const products = {
            products: this.props.products,
            price: this.props.totalPrice,
                
                deliveryMethod: 'fast'
        }
        axios.post('https://e-commerce-5e72e.firebaseio.com/order.json', products)
        .then(responce => {
            this.setState({ loading: false })
            this.props.history.push('/')
            //console.log(responce)
        })
        .catch(error => {
            this.setState({
                loading: false,
                errorMessage: "Network error post",
            })
        })
    }
    inputChangedHandler = (event, inputIdentefier) => {
        const updatedOrderForm = {...this.state.orderForm}
        const updatedFormElement = {...updatedOrderForm[inputIdentefier]}
        updatedFormElement.value = event.target.value
        updatedOrderForm[inputIdentefier] = updatedFormElement
        this.setState({
            orderForm: updatedOrderForm
        })
    }
    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form className='text-placeholder'>
               
               {formElementArray.map(formElement => (
                    <InputComponent 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        change={(event) => this.inputChangedHandler(event, formElement.id)} />
               ))}
                
            </form>
            );
        if (this.state.loading) {
               form = <Spinner/>
        }
        return(
            <div>
                <Row>
                    <Col s={3}/>
                    <Col s={6}>
                    <h4 className='center '>Enter your contact data</h4>
                    {form}
                    </Col>
                    <Col s={3}/>
                </Row>
                <Row>
                    <Col s={5}/>
                    <Col s={4}>
                    <ButtonUI  
                        ClassName = 'green lighten-2'
                        text = 'Order'
                        textOrIcon = ''
                        clicked = {this.orderHandler}
                    /></Col>
                </Row>
            </div>
        )
    }
}
export default CheckoutData;