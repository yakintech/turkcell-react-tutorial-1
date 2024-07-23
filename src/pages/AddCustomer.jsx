import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddCustomer() {

    const [formData, setformData] = useState({
        companyName: "",
        contactName: "",
        contactTitle: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setformData({
            ...formData,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch("https://northwind.vercel.app/api/customers/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(formData)

        })
        .then(res => {
            navigate("/customers")
        })
    }


    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Company Name</label>
                <input type="text" name='companyName' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Contact Name</label>
                <input type="text" name='contactName' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Contact Title</label>
                <input type="text" name='contactTitle' onChange={handleChange} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>
}

export default AddCustomer