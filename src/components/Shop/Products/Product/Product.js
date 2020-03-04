import React from 'react';
import { Col, Card,Icon, CardTitle, Button } from 'react-materialize'


const product = (props) => {
    return (
            <Col
                m={12}
                l={6}
            >
                <Card
                actions={[
                    <a key="1" href="#">This is a link</a>
                ]}
                header={<CardTitle image={props.productImages} />}
                horizontal
                >
                <h2>{props.productName}</h2>
                <p>{props.productQuantity}</p>
                <Button node="a" small style={{ marginRight: '5px' }}  waves="light" > <Icon>add</Icon> </Button>
                <Button node="a" small style={{ marginRight: '5px' }}  waves="light" > <Icon>remove</Icon> </Button>
                </Card>
            </Col>
            
    )
}
export default product;