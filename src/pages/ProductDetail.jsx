import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../api/axiosInstance'

function ProductDetail() {

    const [product, setproduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
      
        axiosInstance.get(`products/${id}`)
        .then(res => {
            setproduct(res.data)
        })
     
    }, [])
    


    return <>
            <h2>Id: {product.id}</h2>
            <h2>Name: {product.name}</h2>
            <h2>Unit Price: {product.unitPrice}</h2>

    </>
}

export default ProductDetail