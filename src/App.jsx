import React from 'react'
import Home from './Home'
import Work from './Work'
import { useReducer } from 'react'

const name = 'Wasif Zaman Omee'

export const SendName = React.createContext()

const initialState = {
  home: 0,
  work: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'home':
      return {
        ...state,
        home: state.home + action.value,
      }
    case 'work':
      return {
        ...state,
        work: state.work + action.value,
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <SendName.Provider value={{name: name , state: state, dispatch: dispatch}}>
        <Home />
        <Work />
      </SendName.Provider>

    </div>

  )
}

export default App