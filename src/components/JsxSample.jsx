import React from 'react'

function JsxSample() {

    var name = "Çağatay"
    var age = 18
    var onlineStatus = true
    var points = [3, 5, 2, 7]
    var address = {
        street:"Süleyman Seba Cad.",
        city:"İstanbul"
    }

    const hello = () => {
        alert("Hello Reactjs!")
    }
    

    return <>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        {
            onlineStatus == true ? <h3>User Online!</h3> : <h3>User Offline</h3>
        }
        <ul>
            {
                points.map(item => <li>{item}</li>)
            }
        </ul>
        <p>{address.street}</p>
        <p>{address.city}</p>
        <button onClick={hello}>Hello</button>
        <button onClick={() => hello()}>Hello-2</button>
    </>

}

export default JsxSample