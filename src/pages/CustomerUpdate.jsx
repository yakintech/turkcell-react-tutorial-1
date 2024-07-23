import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CustomerUpdate() {

    const [formData, setformData] = useState({
        companyName: "",
        contactName: "",
        contactTitle: ""
    })
    const { id } = useParams()
    const navigate  = useNavigate()

    useEffect(() => {

        fetch(`https://northwind.vercel.app/api/customers/${id}`)
            .then(res => res.json())
            .then(data => {
                setformData({
                    companyName: data.companyName,
                    contactName: data.contactName,
                    contactTitle: data.contactTitle
                })
            })

    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;

        setformData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://northwind.vercel.app/api/customers/" + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(formData)

        })
            .then(res => {
                navigate("/customers")
            })

    }

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Company Name: </label>
                <input name='companyName' type='text' value={formData.companyName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Contact Name: </label>
                <input name='contactName' type='text' value={formData.contactName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Contact Title: </label>
                <input name='contactTitle' type='text' value={formData.contactTitle} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Update</button>
            </div>
        </form>

    </>
}

export default CustomerUpdate