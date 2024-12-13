import { useContext } from "react"
import { MyContext } from "../../App"

function ProductsSorting() {
    let { dispatchProducts } = useContext(MyContext)

    return (
        <select onChange={(ev) => dispatchProducts({
            type: 'PRODUCTS SORTING',
            payload: ev.target.value
        })}>
            <option value="UP">UP</option>
            <option value="DOWN">DOWN</option>
        </select>
    )
}

export default ProductsSorting