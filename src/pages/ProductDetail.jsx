import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const [product, setproduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
      
    
     
    }, [])
    


    return (
        <div>ProductDetail</div>
    )
}

export default ProductDetail