import React from 'react';
import { Col, Card, CardTitle, Icon} from 'react-materialize';
import ButtonUI from '../../../UI/Button/Button';
import util from '../../../hoc/Currency/Currency'

const product = (props) => {
    const sizes = props.productSizes.map((size,index) =>
        (index+1===props.productSizes.length)?size : size +', '
    )
    const actionButtons = !props.order?[
        <span key='1'>
            <ButtonUI
                ClassName = 'teal lighten-3'
                clicked = {() => props.addProduct(props.productName)}
                textOrIcon = 'add'
            ></ButtonUI>
        </span>,
        <span key='2'>
            <ButtonUI
                ClassName = 'red lighten-3'
                clicked = {() => props.removeProduct(props.productName)}
                textOrIcon = 'remove'
            ></ButtonUI>
        </span>
]:null
    return (
            <Col
                m={12}
                l={6}
            >
                <Card
                className="Card"
                actions={actionButtons}
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                header={<CardTitle image={props.productImages} />}
                horizontal
                >
                <h3>{props.productName}</h3>
                <h3>{props.order}</h3>
                <p>Quantity: {props.productQuantity}</p>
                <p>Price: {util.formatCurrency(props.productPrices)}</p>
                <p>Sizes: {sizes}</p>
                </Card>
            </Col>
            
    )
}
export default product;