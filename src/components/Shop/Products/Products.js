import React, {Component} from 'react';
import Product from './Product/Product';
import { Row } from 'react-materialize';
import { connect } from 'react-redux';


/*const products = (props) => {
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
}*/
class Products extends Component {
    render() {
         let products = Object.keys(this.props.filterProductsList).map(productKey => {
            if (productKey!=='price'){
                return (
                    this.props.order?this.props.filterProductsList[productKey]>0?
                    <Product 
                        order={this.props.order}
                        key={productKey} 
                        productName={productKey} 
                        productQuantity={this.props.filterProductsList[productKey]} 
                        productImages={this.props.productImages[productKey]}
                        productPrices={this.props.productPrices[productKey]}
                        productSizes={this.props.productSizes[productKey]}
                        />
                    :null:
                    <Product 
                        key={productKey} 
                        productName={productKey} 
                        productQuantity={this.props.filterProductsList[productKey]} 
                        productImages={this.props.productImages[productKey]}
                        productPrices={this.props.productPrices[productKey]}
                        productSizes={this.props.productSizes[productKey]}
                        removeProduct={this.props.removeProduct}
                        addProduct={this.props.addProduct}/>
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
}
const mapStateToProps = state => {
    return{
        state: state,
        filterProductsList: state.filterProductsList,
    }
}
export default connect(mapStateToProps)(Products);