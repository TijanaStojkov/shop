import React, { Component } from 'react';
import { Button } from 'react-materialize';
import InputComponent from '../UI/Forms/Input/Input';
import './Auth.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/allActions';
import Spinner from '../UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                tuched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                tuched: false
            }
        },
        isSignup: true
    }
    componentDidMount () {
        if(!this.props.shopping && this.props.authRedirectPath !== '/'){
            this.props.setAuthRedirect('/')
        }
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
    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                tuched: true,
            }
        }
        this.setState({
            controls: updatedControls
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.props.authRedirectPath)
        this.props.auth(this.state.controls.email.value,this.state.controls.password.value, this.state.isSignup)
    }
    switchAuthModeHandler = (event) => {
        event.preventDefault();
        this.setState( prevState => {
            return {isSignup: !prevState.isSignup}
        })
    }
    render () {
        const formElementArray = [];
        for(let key in this.state.controls){
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form = 
        <form onSubmit={this.submitHandler}  className='text-placeholder '>
            {formElementArray.map( formElement => 
                <InputComponent 
                            key={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig} 
                            value={formElement.config.value}
                            change={(event) => this.inputChangedHandler(event, formElement.id)}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            tuched={formElement.config.tuched} />
                )}
                <Button>Submit</Button>
            </form>
        if(this.props.loading){
            form = <Spinner/>
        };
        let errorMessage = null;
        if(this.props.error){
            errorMessage = <p className='red lighten-3' style={{padding: "5px"}}>{this.props.error==='EMAIL_EXISTS'?'Email already exists': null}</p>
        }
        let redirect = null;
        if(this.props.isAuth){
            redirect = <Redirect to={this.props.authRedirectPath}/>
        }
        console.log(this.props.isAuth)

        return (
            <div style={{padding: '20px'}} >
                {redirect}
                {errorMessage}
                {form}
                <Button style={{marginTop: '10px'}} flat node="button" waves="light" onClick={this.switchAuthModeHandler}>{this.state.isSignup?'Switch to log in':'Switch to register'}</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        loading: state.authReducer.loading,
        error: state.authReducer.error,
        isAuth: state.authReducer.token!==null,
        shopping: state.shopReducer.building,
        authRedirectPath: state.authReducer.authRedirectPath,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, isSignup) => dispatch(actions.auth(email,password, isSignup)),
        setAuthRedirect: (path) => dispatch(actions.setAuthRedirect(path))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);