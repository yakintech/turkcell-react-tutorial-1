import React, { useEffect, useState } from 'react'

function Customers() {

    const [customers, setcustomers] = useState([])


    //Aşağıda bulunan kod bloğu sadece 1 KEZ çalışır. formun load eventine benzetebilirsiniz. Component ayağa kalkarken çalışacak
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/customers")
            .then(res => res.json())
            .then(data => {
                setcustomers(data)
            })
    }, [])



    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Customers