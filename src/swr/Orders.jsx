import React from 'react'
import { axiosInstance } from '../api/axiosInstance'
import useSWR from 'swr'


const fethcer = (url) => axiosInstance.get(url).then(res => res.data)

function Orders() {

    const { data, error, isLoading } = useSWR("orders", fethcer)



    return <>
       {
        isLoading ? <h1>loading...</h1> :  <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Order Date</th>
                <th>Required Date</th>
                <th>Customer Id</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.orderDate}</td>
                        <td>{item.requiredDate}</td>
                        <td>{item.customerId}</td>

                </tr>)
            }
        </tbody>
    </table>
       }
    </>
}

export default Orders