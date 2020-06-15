import React from 'react';
import Product from './Product/Product';
import { Row } from 'react-materialize'


const products = (props) => {
    let products = Object.keys(props.products).map(productKey => {
        return (
        <Product 
            key={productKey} 
            productName={productKey} 
            productQuantity={props.products[productKey]} 
            productImages={props.productImages[productKey]}
            productPrices={props.productPrices[productKey]}
            productSizes={props.productSizes[productKey]}
            removeProduct={props.removeProduct}
            addProduct={props.addProduct}/>
        )
    })
    return (
        <Row>
           {products}
        </Row>
    )
}
export default products;