import React, { createContext, useContext, useReducer } from 'react';
import { initialState } from './reducer';

export const Contexts = createContext();
export const DataContext = () => useContext(Contexts);

export default function Context({ children }) {
  const [state, dispatch] = useReducer(() => { }, initialState)
  return (
    <Contexts.Provider value={ [state, dispatch] }>
      { children }
    </Contexts.Provider>
  )
}
