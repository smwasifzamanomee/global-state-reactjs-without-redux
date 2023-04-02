import React from 'react'
import { useContext } from 'react'
import { SendName } from './App'

const Home = () => {
    const name = useContext(SendName)
    return (
        <div>
            <h1>Homepage Name: {name.name}</h1>
            <p>Number: {name.state.home}</p>
            <p>Work: {name.state.work}</p>
            <button onClick={() => name.dispatch({type: 'home', value: 10 })}>Click Me</button>
        </div>
    )
}

export default Home