import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { queryClient } from '..'

function AddCategory() {

    const [formData, setformData] = useState({
        name: "",
        description: ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target

        setformData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addCategory.mutate(formData)
    }

    const navigate = useNavigate();

    const addCategory = useMutation({
        mutationFn: (data) => {
            return axiosInstance.post("categories", data)
                .then(res => res.data)
        },
        onSuccess:() => {
            queryClient.invalidateQueries()
            navigate("/categories")
        }
    })


    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name='name' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Contact Name</label>
                <input type="text" name='description' onChange={handleChange} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>
}

export default AddCategory