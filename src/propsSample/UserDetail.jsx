import React from 'react'

function UserDetail(props) {

  const {name, surname, address, age = 22, hello} = props

  return <>
  <h1>Name: {name}</h1>
  <h1>Surname: {surname}</h1>
  <h1>Age: {age}</h1>
  <h1>Address: {address?.city}</h1>
  <button onClick={hello}>Hello Reactjs</button>
  </>
}

export default UserDetail


