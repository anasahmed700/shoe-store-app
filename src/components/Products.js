import React from 'react'
import {Outlet} from 'react-router-dom'

const Products = () => {

    
    return (
        <div>
            <h1 className="text-success">Our Products</h1>
            <hr />
            <div>
                {/* to render the nested route component */}
                <Outlet />
            </div>
        </div>
    )
}

export default Products
