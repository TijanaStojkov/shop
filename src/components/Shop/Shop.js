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
    render () {
        
        return (
            <div>
                <h1>Shop</h1>
                <Products products={this.state.products} productImages={productImages}/>
            </div>
        )
    }
}

export default Shop;