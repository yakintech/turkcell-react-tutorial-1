import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function Products() {

    const [products, setproducts] = useState(productsData)
    const [isSorted, setisSorted] = useState(false)


    let totalPrice = 0

    products.forEach(item => {
        totalPrice = totalPrice + item.unitPrice
    })

    let avgPrice = totalPrice / (products.length)


    const deleteProduct = (id) => {

        var result = window.confirm("Are u sure?")

        if (result) {
            let filteredProducts = products.filter(q => q.id != id)
            setproducts(filteredProducts)
        }

    }


    const sortByPrice = () => {
        let sortedProducts = []
        if (!isSorted)
            sortedProducts = products.sort((a, b) => a.unitPrice - b.unitPrice)
        else
            sortedProducts = products.sort((a, b) => b.unitPrice - a.unitPrice)
        

        setisSorted(!isSorted)
        setproducts([...sortedProducts])
    }


    return <>
        <hr />
        <h2>Total Price: {totalPrice}</h2>
        <hr />
        <h2>Avg: {avgPrice.toFixed(2)}</h2>
        <hr />
        <h2>Length: {products.length}</h2>
        <hr />
        <button onClick={() => setproducts([])}>Clear All</button>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{ cursor: "pointer" }} onClick={() => sortByPrice()}>Unit Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.unitsInStock}</td>
                        <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Products