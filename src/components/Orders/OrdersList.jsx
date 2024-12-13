import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import OrdersItem from "./OrdersItem";
import { getOrders } from "../../reducers/reducerFetchs/reducerOrdersFetchs";

function OrdersList() {
    let { stateOrders , dispatchOrders} = useContext(MyContext)

    useEffect(() => {
        getOrders(dispatchOrders)
    },[])

    return (
        <ul>
            {stateOrders.orders.map((item) => <OrdersItem key={item.id} {...item}/>)}
        </ul>
    )
}
export default OrdersList;
