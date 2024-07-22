import React, { useState } from 'react'

function StateArraySample() {
    //number, string, array, objectArray state olarak tanımlanabilir.
    const [numbers, setnumbers] = useState([3, 5, 7])

    const addRandom = () => {

        var randomNumber = Math.floor(Math.random() * 1000)
        // numbers.push(randomNumber)
        setnumbers([...numbers, randomNumber])

    }

    const deleteItem = (index) => {
        numbers.splice(index, 1)
        setnumbers([...numbers])
        
    }

    return <>
        <h1>Length: {numbers.length}</h1>
        <hr />
        <button onClick={addRandom}>Add Random</button>
        <button onClick={() => setnumbers([])}>Clear</button>
        <hr />
        <ul>
            {
                numbers.map((item, key) => <li onClick={() => deleteItem(key)} style={{ cursor: 'pointer' }}>{item}</li>)
            }
        </ul>
    </>
}

export default StateArraySample