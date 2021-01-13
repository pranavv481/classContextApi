import React, { Component } from 'react'
import {shopContext, ShopContext} from "../Contexts/ShopContext";
class ShowProducts extends Component {
    static contextType = shopContext
    render() {
        const {products} = this.context
        console.log(products)
        return (
        
            <div>
                <h1>Show Products</h1>
                {products.map(data=>(
                    
                    <div key={data.id}>
                        <h3>{data.name}</h3>
                        <h3>{data.price}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default ShowProducts
