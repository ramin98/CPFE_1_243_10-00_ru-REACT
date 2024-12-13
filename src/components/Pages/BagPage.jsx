import { useContext } from "react"
import BagList from "../Bag/BagList"
import { MyContext } from "../../App"
import OrderForm from "../Bag/OrderForm"

function BagPage() {

    let {stateBag, dispatchBag}  = useContext(MyContext)
    return (
        <section>
            <h1>BAG</h1>
            <div className="bag-page">
            <BagList/>
            <div>
                <OrderForm/>
                <p>TOTAL SUM - {stateBag.bag.reduce((total, price) => total + price.totalPrice, 0)}</p>
            </div>
            </div>
            <button onClick={() => dispatchBag({type:'CLEAR BAG'})}>CLEAR BAG</button>
        </section>
    )
}

export default BagPage