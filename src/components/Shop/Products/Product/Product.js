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
                class = 'teal lighten-3'
                clicked = {() => props.addProduct(props.productName)}
                icon = 'add'
            ></ButtonUI>
        </span>,
        <span key='2'>
            <ButtonUI
                class = 'red lighten-3'
                clicked = {() => props.removeProduct(props.productName)}
                icon = 'remove'
            ></ButtonUI>
        </span>
]:null
const productName = (props.productName.charAt(0).toUpperCase()+props.productName.slice(1)).match(/[A-Z][a-z]+/g).join(' ')
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
                <h5>{productName}</h5>
                <h3>{props.order}</h3>
                <p>Quantity: {props.productQuantity}</p>
                <p>Price: {util.formatCurrency(props.productPrices)}</p>
                <p>Sizes: {sizes}</p>
                </Card>
            </Col>
            
    )
}
export default product;