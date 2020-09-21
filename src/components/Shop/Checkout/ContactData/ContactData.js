import React, { Component } from 'react';
import axios from 'axios';
import './ContactData.scss';
import $ from 'jquery';

//components
import ButtonUI from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import InputComponent from '../../../UI/Forms/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

//react-materialize
import { Row, Col } from 'react-materialize';

//redux
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions/allActions';

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
                validation: {
                    required: true
                },
                valid: false,
                tuched: false
            },
                
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your street',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                tuched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your zipCode',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false,
                tuched: false
            },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:'Your country',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    tuched: false
                },  
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder:'Your email',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    tuched: false
                },  
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value:'fastest', deliveryValue: 'Fastest'},
                            {value:'cheapest', deliveryValue: 'Cheapest'}
                        ]
                    },
                    validation: {},
                    value: 'fastest',
                    valid: true
                },  
        },
        formIsValid: false,
    }
    checkValidity (value,rules){
        let isValid = true
        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid
    }
    orderHandler = (e) => {
        e.preventDefault()
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        const products = {
            products: this.props.products,
            price: this.props.totalPrice,
            orderData: formData,
            userId: this.props.userId,
        }
        this.props.purchaseProducts(products, this.props.token)
    }
    inputChangedHandler = (event, inputIdentefier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputIdentefier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity (updatedFormElement.value,updatedFormElement.validation)
        
        updatedFormElement.tuched = true;
        updatedOrderForm[inputIdentefier] = updatedFormElement;
        let formIsValid = true;
        for (let inputIndentifiers in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIndentifiers].valid && formIsValid;
        }
        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        })
    }
    componentDidMount(){
        $(document).ready(function() {
            window.$('select').formSelect();
          });
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
            <form onSubmit={this.orderHandler} className='text-placeholder'>
               
               {formElementArray.map(formElement => (
                    <InputComponent 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        change={(event) => this.inputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        tuched={formElement.config.tuched} />
               ))}
                <ButtonUI  
                        ClassName = 'green lighten-2'
                        text = 'Order'
                        textOrIcon = ''
                        disabled={!this.state.formIsValid}
                    />
            </form>
            );
        if (this.props.loading) {
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.shopReducer.products,
        totalPrice: state.shopReducer.totalPrice,
        loading: state.shopReducer.loading,
        token: state.authReducer.token,
        userId: state.authReducer.userId
    }
}
const mapDispachToProps = dispatch =>{
    return {
        purchaseProducts: (orderData,token) => dispatch(actionCreators.purchaseProducts(orderData,token))
    }
}
export default connect(mapStateToProps, mapDispachToProps)(withErrorHandler(CheckoutData,axios));