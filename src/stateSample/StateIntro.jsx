import React, { useState } from 'react'

function StateIntro() {

    console.log("State Intro rendered! ")

    const [counter, setcounter] = useState(0)

    const increase = () => {
        setcounter(20)
    }

    return <>
        <button onClick={increase}>Increase</button>
        <h1>Counter: {counter}</h1>
    </>
}

export default StateIntro