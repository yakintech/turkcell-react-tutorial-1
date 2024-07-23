import React, { useState } from 'react'

function Contact() {

  const [users, setusers] = useState([])
  const [name, setname] = useState("")

  const add = () => {
    setusers([...users, name])
    setname("")
  }

  return <>
    <div>
      <label htmlFor="">Name</label>
      <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
    </div>
    <div>
      <button onClick={add}>Add</button>
    </div>
    <ul>
      {
        users && users.map(item => <li>{item}</li>)
      }
    </ul>

  </>
}

export default Contact