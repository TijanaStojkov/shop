import React from 'react';
import { Modal, Button } from 'react-materialize';
import OrderSummary from '../../Shop/OrderSummary/OrderSummary'


const modal = (props) => (
    <Modal
        actions={[
            <span key='1'><Button flat modal="close" node="button" waves="green">Close</Button></span>,
            <span key='2'><Button flat modal="close" node="button" waves="green">Order</Button></span>
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
        trigger={<Button node="button" disabled={!props.orderable}>Order summary</Button>}
        >
        <p>
            <OrderSummary 
            products={props.products}
            totalPrice={props.totalPrice}
            />
        </p>
        </Modal>
)

export default modal;