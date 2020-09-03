import React, {Component} from 'react';
import Product from './Product/Product';
import { Row } from 'react-materialize';
import { connect } from 'react-redux';

class Products extends Component {
    render() {
        let products = this.props.order?
                Object.keys(this.props.products).map(productKey =>{
                    return (
                        this.props.products[productKey]>0?
                            <Product 
                                order={this.props.order}
                                key={productKey} 
                                productName={productKey} 
                                productQuantity={this.props.products[productKey]} 
                                productImages={this.props.productImages[productKey]}
                                productPrices={this.props.productPrices[productKey]}
                                productSizes={this.props.productSizes[productKey]}
                                />
                            :null
                    )
                }):
                Object.keys(this.props.filterProductsList).map(productKey => {
                    return (
                        <Product 
                        key={productKey} 
                        productName={productKey} 
                        productQuantity={this.props.filterProductsList[productKey]} 
                        productImages={this.props.productImages[productKey]}
                        productPrices={this.props.productPrices[productKey]}
                        productSizes={this.props.productSizes[productKey]}
                        removeProduct={this.props.removeProduct}
                        addProduct={this.props.addProduct}/>
                    )})
        return (
            <Row>
                {products}
            </Row>
        )
    }
}
const mapStateToProps = state => {
    return{
        filterProductsList: state.shopReducer.filterProductsList,
        products: state.shopReducer.products
    }
}
export default connect(mapStateToProps)(Products);