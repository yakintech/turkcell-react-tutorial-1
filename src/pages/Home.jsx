import React, { useState } from 'react'
import { queryClient } from '..'

function Home() {

  const [formData, setformData] = useState({
    name: "",
    surname: "",
    email: ""
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
    console.log("formData", formData)
  }


  const cacheClear = () => {
    // Invalidate every query in the cache
    queryClient.invalidateQueries()
    // Invalidate every query with a key that starts with `categories`
    // queryClient.invalidateQueries({ queryKey: ['categories'] })
  }

  return <>

    <button onClick={cacheClear}>Clear Cache</button>

    <hr />
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" required name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Surname</label>
          <input type="text" required name="surname" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">EMail</label>
          <input type="email" required name="email" onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>

      </form>
    </div>

  </>
}

export default Home