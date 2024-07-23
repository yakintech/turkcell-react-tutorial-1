import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { axiosInstance } from '../api/axiosInstance'
import { Link } from 'react-router-dom'

function Categories() {

    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: () => axiosInstance.get("categories").then(res => res.data),
        refetchInterval:20000
        // staleTime: 60000
    })


    return <>
        <Link to="/categories/add">Add New Category</Link>
        <hr />
        {
            isLoading ? <h1>loading...</h1> : <ul>
                {
                    data?.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        }
    </>
}

export default Categories