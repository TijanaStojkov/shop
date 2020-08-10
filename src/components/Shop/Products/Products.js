import React from 'react';
import Product from './Product/Product';
import { Row } from 'react-materialize'


const products = (props) => {
    let products = Object.keys(props.products).map(productKey => {
        if (productKey!=='price'){
            return (
                props.order?props.products[productKey]>0?
                <Product 
                    order={props.order}
                    key={productKey} 
                    productName={productKey} 
                    productQuantity={props.products[productKey]} 
                    productImages={props.productImages[productKey]}
                    productPrices={props.productPrices[productKey]}
                    productSizes={props.productSizes[productKey]}
                    />
                :null:
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
            }
        }
    )
    
        
    return (
        <Row>
           {products}
        </Row>
    )
}
export default products;