import { useContext } from "react"
import { useEffect } from "react"
import { MyContext } from "../../App"
import { getProductsFetch } from "../../reducers/reducerFetchs/reducerProductsFetchs"
import ProductsItem from "./ProductsItem"

function ProductsList() {

    let {stateProducts, dispatchProducts} = useContext(MyContext)

    useEffect(() => {
        if(!localStorage.getItem('bag')){
            localStorage.setItem('bag', JSON.stringify([]))
        }

        getProductsFetch(dispatchProducts)
    }, [])
    
    return(
        <ul>
            {stateProducts.products.map((item) => <ProductsItem key={item.id} obj={item}/>)}
        </ul>
    )
}

export default ProductsList