import { useContext } from "react"
import { MyContext } from "../../App"

function ProductsItem(props) {
    let {dispatchBag} = useContext(MyContext)

    return (
        <li>
            <p>{props.product_name}</p>
            <p>{props.product_description}</p>
            <p>{props.product_price}</p>
            <img src={props.url} alt={props.product_name} />
            <button onClick={() => dispatchBag({type:'ADD TO BAG', payload: props})}>ADD</button>
        </li>
    )
}

export default ProductsItem