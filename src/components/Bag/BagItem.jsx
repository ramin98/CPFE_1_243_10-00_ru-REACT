import { useContext } from "react"
import { MyContext } from "../../App"

function BagItem(props) {

    let {dispatchBag} = useContext(MyContext)

    return (
        <li>
            <p>{props.product_name}</p>
            <p>{props.product_description}</p>
            <p>{props.product_price}</p>
            <img src={props.url} alt={props.product_name} />
            <button onClick={() => dispatchBag({type:'DELETE FROM BAG', payload:props.id})}>DELETE</button>
            <button onClick={() => dispatchBag({type:'MINUS PRODUCT', payload:props.id})}>-</button>
            <p>{props.count}</p>
            <button onClick={() => dispatchBag({type:'PLUS PRODUCT', payload:props.id})}>+</button>
        </li>
    )
}

export default BagItem