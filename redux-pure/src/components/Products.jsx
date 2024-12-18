import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/reducerProducts"

function Products() {

    let dispatch = useDispatch()
    let products = useSelector((state) => state.products.products)
    console.log(products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
                <h1>PRODUCTS</h1>

            <ul>
                {products.map((item) => {
                    return (
                        <li key={item.id}>
                            <p>{item.product_name}</p>
                            <p>{item.product_description}</p>
                            <p>{item.product_price}</p>
                            <img src={item.url} alt={item.product_name} />
                            <button onClick={() => dispatch({ type: 'ADD TO BAG', payload: item })
                            }>ADD</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Products
