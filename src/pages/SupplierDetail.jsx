import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SupplierDetail() {

  const { id } = useParams() //useParams hook
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/suppliers")
    // navigate(-1)

  }

  return <>
    <button onClick={goBack}>Go Back</button>
    <h1>Id: {id}</h1>
  </>
}

export default SupplierDetail