import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'
import { Link } from 'react-router-dom'

function ProductsList() {
    const [products, setproducts] = useState([])

    useEffect(() => {
      
        axiosInstance.get("products")
        .then(res => {
            setproducts(res.data)
        })

    }, [])
    
  return <>
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        {
            products.map(item => <tr key={item.id}>
                <td><Link to={`/products/${item.id}`}>{item.id}</Link></td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
            </tr>)
        }
    </tbody>
  </table>
  </>
}

export default ProductsList