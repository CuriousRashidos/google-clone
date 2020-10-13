import React, { createContext, useContext, useReducer } from 'react'
//preparing the data layer
export const StateContext = createContext()
const StateProvider = ({initialState, reducer, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
//hook that allows us to pull data from the data layer  
export const useStateValue = () => useContext(StateContext)

export default StateProvider
