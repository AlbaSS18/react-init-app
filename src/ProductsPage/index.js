import * as React from "react";
import {getPriceColor, orderByPrice} from "./helpers";

export default class  ProductsPage extends React.Component{

    state = {
        products: [
            {
                id: 1,
                name: 'Plátanos',
                price: 30
            },
            {
                id: 2,
                name: 'Manzanas',
                price: 25
            },
            {
                id: 3,
                name: 'Peras',
                price: 15
            }
        ]
    }

    changeOrderByPrice = () => {
        // Should order all products by price in ascending order
        let products = orderByPrice(this.state.products);
        this.setState({products})
    }



    render() {
        return (
            <>
                <h1>Products</h1>
                <button onClick={this.changeOrderByPrice}>Change order</button>
                {
                    this.state.products.map(product => (
                        <div key={product.id} style={{color: getPriceColor(product.price)}}>
                            {product.name} - {product.price}
                        </div>
                    ))
                }
            </>
        )
    }

}

