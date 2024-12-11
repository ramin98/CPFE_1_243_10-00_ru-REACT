import { createContext, useReducer } from 'react'
import './App.css'
import { initialObjectProducts, productsReducer } from './reducers/reducerStates/productsReducer'
import { bagReducer, initialObjectBag } from './reducers/reducerStates/bagReducer'
import { initialObjectOrders, ordersReducer } from './reducers/reducerStates/ordersReducer'
import Header from './components/Header'
import MainComponent from './components/MainComponent'

export const MyContext = createContext()

function App() {
  let [stateProducts, dispatchProducts] = useReducer(productsReducer, initialObjectProducts)
  let [stateBag, dispatchBag] = useReducer(bagReducer, initialObjectBag)
  let [stateOrders, dispatchOrders] = useReducer(ordersReducer, initialObjectOrders)

  return (
    <MyContext.Provider value={{
      stateProducts,
      dispatchProducts,
      stateBag,
      dispatchBag,
      stateOrders,
      dispatchOrders
    }}>
      <Header />
      <MainComponent />
    </MyContext.Provider>
  )
}

export default App
