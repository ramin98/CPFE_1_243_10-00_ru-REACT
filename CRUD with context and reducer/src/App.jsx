import { createContext, useState, useRef, useReducer } from 'react'
import './App.css'
import Footer from './copmponents/Footer'
import Header from './copmponents/Header'
import Main from './copmponents/Main'
import { goods } from './assets/data/data'
import { initialObject, reducer } from './copmponents/reducer'

export const MyContext = createContext()

function App() {

  // const deleteData = (id) => {
  //   let newArr = [...products]
  //   let elementIndex = newArr.filter((item) => item.id !== id)
  //   setProducts(elementIndex)
  // };

  let [state, dispatch] = useReducer(reducer, initialObject)

  return (
    <MyContext.Provider value={{state, dispatch}}>
      <Header />
      <Main />
      <Footer />
    </MyContext.Provider>
  )
}

export default App
