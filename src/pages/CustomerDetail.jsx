import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CustomerDetail() {

    const [customer, setcustomer] = useState({})

    const { id } = useParams()

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/customers/" + id)
            .then(res => res.json())
            .then(data => {
                setcustomer(data)
            })

    }, [])


    return <>
        <h2>Id: {customer.id}</h2>
        <h2>Company Name: {customer.companyName}</h2>
        <h2>Contact Name: {customer.contactName}</h2>
        <h2>Contact Title: {customer.contactTitle}</h2>
        <h2>City: {customer.address?.city}</h2>
        <h2>Country: {customer.address?.country}</h2>
    </>
}

export default CustomerDetail