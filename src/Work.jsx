import React from 'react'
import { SendName } from './App'
import { useContext } from 'react'

const Work = () => {
    const name = useContext(SendName)
  return (
    <div>
        <h1>Workpage Name: {name.name}</h1>
        <p>Number: {name.state.work}</p>
        <p>Home: {name.state.home}</p>
        <button onClick={() => name.dispatch({type: 'work', value: 20 })}>Click Me</button>
    </div>
  )
}

export default Work