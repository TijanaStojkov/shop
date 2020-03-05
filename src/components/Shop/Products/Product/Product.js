import React from 'react';
import { Col, Card,Icon, CardTitle, Button } from 'react-materialize'


const product = (props) => {
    const productName = props.productName.charAt(0).toUpperCase() + props.productName.slice(1)
    return (
            <Col
                m={12}
                l={6}
            >
                <Card
                className="Card"
                actions={[
                    <div>
                        <Button node="button" className='teal lighten-3' onClick={() => props.addProduct(props.productName)} small style={{ marginRight: '5px' }}  waves="light" > <Icon>add</Icon> </Button>
                        <Button node="button" className='red lighten-3' onClick={() => props.removeProduct(props.productName)} small style={{ marginRight: '5px' }}  waves="light" > <Icon>remove</Icon> </Button>
                    </div>
                ]}
                header={<CardTitle image={props.productImages} />}
                horizontal
                >
                <h3>{productName}</h3>
                <p>Quantity: {props.productQuantity}</p>
                </Card>
            </Col>
            
    )
}
export default product;