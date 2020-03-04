import React from 'react';
import Product from './Product/Product';
import { Row, Col, Card,Icon, CardTitle, Button } from 'react-materialize'


const products = (props) => {
    let products = Object.keys(props.products).map(productKey => {
        return (
        <Product key={productKey} productName={productKey} productQuantity={props.products[productKey]} productImages={props.productImages[productKey]}/>
        )
    })
    return (
        <Row>
           {products}
        </Row>
    )
}
export default products;