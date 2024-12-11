import { useContext } from "react"
import {MyContext} from "../../App"

function BagList() {
    let {stateBag} = useContext(MyContext)

    

    
    return(
        <ul>
            {stateBag.bag.map((item) => <ProductsItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default BagList