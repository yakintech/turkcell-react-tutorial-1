import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Customers() {

    const [customers, setcustomers] = useState([])
    const [loading, setloading] = useState(true)


    //Aşağıda bulunan kod bloğu sadece 1 KEZ çalışır. formun load eventine benzetebilirsiniz. Component ayağa kalkarken çalışacak
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        fetch("https://northwind.vercel.app/api/customers")
            .then(res => res.json())
            .then(data => {
                setcustomers(data)
                setloading(false)
            })
    }


    const deleteCustomer = (id) => {
        var result = window.confirm("Are u sure?")
        if (result) {
            fetch("https://northwind.vercel.app/api/customers/" + id, {
                method: "DELETE"
            }).then(res => {
                loadData()
            })
        }
    }

    return <>
        <hr />
            <Link to="/customers/add">Add New Customer</Link>
        <hr />
        {
            loading ? <h1>loading...</h1> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers && customers.map(item => <tr>
                            <td><Link to={`/customers/${item.id}`}>{item.id}</Link></td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default Customers