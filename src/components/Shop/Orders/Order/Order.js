import React from 'react';
import { CollapsibleItem } from 'react-materialize';
import util from '../../../hoc/Currency/Currency'

const order = (props) => {
    /*let products = props.products? Object.keys(props.products).map( productsKey => 
        <li key={productsKey}>{productsKey.charAt(0).toUpperCase() + productsKey.slice(1)}: {props.products[productsKey]}</li>
    ):null*/
    let productsArray = [];
    for (let productName in props.products){
        productsArray.push({
            name: productName,
            amounth: props.products[productName]
        })
    }
    const products = productsArray.map(product => 
        <li key={product.name}><span style={{textTransform: 'capitalize'}}>{product.name}</span>: {product.amounth}</li>)
    return (
        <CollapsibleItem
            expanded={false}
            header={props.name}
            node="div"
            onSelect={()=>{}}
        >
            <ul>
                {products}
                <li><b>Total price: {util.formatCurrency(4.3)}</b></li>
                <li></li>
            </ul>
        </CollapsibleItem>
    )
}
export default order