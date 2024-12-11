import { useContext } from "react"
import { useEffect } from "react"
import { MyContext } from "../../App"
import { getProductsFetch } from "../../reducers/reducerFetchs/reducerProductsFetchs"
import ProductsItem from "./ProductsItem"

function ProductsList() {

    let {stateProducts, dispatchProducts} = useContext(MyContext)

    useEffect(() => {
        getProductsFetch(dispatchProducts)
    }, [])
    
    return(
        <ul>
            {stateProducts.products.map((item) => <ProductsItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default ProductsList