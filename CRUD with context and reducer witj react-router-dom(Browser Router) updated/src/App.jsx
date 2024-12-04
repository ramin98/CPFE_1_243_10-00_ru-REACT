import { createContext, useReducer } from 'react'
import './App.css'
import Footer from './copmponents/Footer'
import Header from './copmponents/Header'
import Main from './copmponents/Main'
import { initialObject as initialObjectProducts, reducer as reducerProducts } from './copmponents/reducers/reducerProducts'
import { initialObject as initialObjectBag, reducer as reducerBag } from './copmponents/reducers/reducerBag'
import { initialObject as initialObjectOrders, reducer as reducerOrders } from './copmponents/reducers/reducerOrders'


export const MyContext = createContext()

function App() {

  let [stateProducts, dispatchProducts] = useReducer(reducerProducts, initialObjectProducts)
  let [stateBag, dispatchBag] = useReducer(reducerBag, initialObjectBag)
  let [stateOrders, dispatchOrders] = useReducer(reducerOrders, initialObjectOrders)


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
      <Main />
      <Footer />
    </MyContext.Provider>
  )
}

export default App
