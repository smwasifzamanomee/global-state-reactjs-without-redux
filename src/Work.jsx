import React from 'react'
import { useStateValue } from './state/StateProvider'

const Work = () => {
  const [{work}, dispatch] = useStateValue()
  return (
    <div>
      <h1>Work - {work}</h1>
      <button onClick={() => dispatch({type: 'work', value: 1})}>Increment</button>
    </div>
  )

}

export default Work