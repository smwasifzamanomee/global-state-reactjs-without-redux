import React from 'react'
import { useStateValue } from './state/StateProvider'

const Home = () => {
    const [{home}, dispatch] = useStateValue()
    return (
        <div>
            <h1>Home - {home}</h1>
            <button onClick={() => dispatch({type: 'home', value: 1})}>Increment</button>
        </div>
    )

}

export default Home