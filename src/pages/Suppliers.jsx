import React from 'react'
import { suppliersData } from '../data/suppliersData'
import { Link } from 'react-router-dom'

function Suppliers() {
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
                    suppliersData.map(item => <tr>
                        <td><Link to={"/suppliers/" + item.id}>{item.id}</Link></td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                    </tr>)
                }
            </tbody>
        </table>

    </>
}

export default Suppliers