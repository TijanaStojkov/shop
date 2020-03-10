import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import OrderSummary from '../../Shop/OrderSummary/OrderSummary'

class ModalComponent extends Component {
    componentDidUpdate () {
        console.log(this.props.order)
    }
    shouldComponentUpdate (nextProps, nextState) {
        return (this.props.orderable !== nextProps.orderable || this.props.products !== nextProps.products)
    }
    
    render () {
        return (
        <Modal
            actions={[
                <span key='1'><Button flat modal="close" node="button" waves="green">Close</Button></span>,
                <span key='2'><Button flat modal="close" node="button" waves="green" onClick={this.props.order}>Order</Button></span>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Order summary"
            id="modal-0"
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button node="button" disabled={!this.props.orderable} onClick={this.props.updateModalComponentHandler}>Order summary</Button>}
            >
            <p>
                <OrderSummary 
                products={this.props.products}
                totalPrice={this.props.totalPrice}
                />
            </p>
        </Modal>
        )
    }
}

export default ModalComponent;