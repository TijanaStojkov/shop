import React, {Component} from 'react';
import Products from './Products//Products';
import shert from '../../assets/images/products/shert.jpg';
import pants from '../../assets/images/products/pants.jpg';
import skirt from '../../assets/images/products/skirt.jpg';
const productImages = {
    shert: shert,
    pants: pants,
    skirt: skirt,
}

class Shop extends Component {
    state = {
        products: {
            shert: 1,
            pants: 1,
            skirt: 4,
        }
    }
    removeProduct = (productName) => {
        const oldProductCount = this.state.products[productName];
        if (oldProductCount===0){
            return;
        }
        const newProductCount =  oldProductCount - 1;
        const products = {
            ...this.state.products
        }
        products[productName] = newProductCount
        this.setState({
            products: products
        })
    }
    addProduct = (productName) => {
        const oldProductCount = this.state.products[productName];
        const newProductCount =  oldProductCount + 1
        const products = {
            ...this.state.products
        }
        products[productName] = newProductCount
        this.setState({
            products: products
        })
    }
   
    render () {
        return (
            <div>
                <h1>Shop</h1>
                <Products 
                    products={this.state.products} 
                    productImages={productImages}
                    removeProduct={this.removeProduct}
                    addProduct={this.addProduct}/>
            </div>
        )
    }
}

export default Shop;