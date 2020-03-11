import React, {Component} from 'react';
import Aux from '../Auxilary/Auxilary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor (props) {
            super(props)
            this.state = {
                error: null
            }
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error.message
                })
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        
      
        hideModal = () => {
            this.setState({
                error: null
            })
        }
        render () {
            return (
                <Aux>
                   <p>{this.state.error}</p>
                    <WrappedComponent {...this.props} />
                </Aux>    
            )
        }
    } 
}

export default withErrorHandler;