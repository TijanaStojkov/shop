import React from 'react';
import { CollapsibleItem } from 'react-materialize';
import util from '../../../hoc/Currency/Currency';
import {  Button } from 'react-materialize';
import product from '../../Products/Product/Product';

const order = (props) => {
    let productsArray = [];
    for (let productName in props.products){
        productsArray.push({
            name: productName,
            amounth: props.products[productName]
        })
    }
    const products = productsArray.map(product => {
        return (product.amounth!==0?
        <li key={product.name}><span style={{textTransform: 'capitalize'}}>
            {(product.name.charAt(0).toUpperCase()+product.name.slice(1)).match(/[A-Z][a-z]+/g).join(' ')}
            </span>: {product.amounth}</li>
            :null
        )}
        )
    return (
        <CollapsibleItem
            expanded={false}
            header={<div  style={{width:'100%'}}><span>{props.name}</span></div>}
            node="div"
            onSelect={()=>{}}
        >
            <ul>
                {products}
                <hr/>
                <li><b>Total price: {util.formatCurrency(4.3)}</b><Button onClick={props.deleteOrder} flat node="button" className=" right red-text text-darken-2" waves="light">remove</Button></li>
            </ul>
        </CollapsibleItem>
    )
}
export default order