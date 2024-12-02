import styled from "styled-components"
import { useContext } from "react"
import { MyContext } from "../../App"
import OrdersItem from "./OrdersItem"

function OrdersList() {
    let { stateOrders, dispatchOrders } = useContext(MyContext)

    return (
        <BagSection>
            <BagListUl>
                {stateOrders.orders.map((item, index) => <OrdersItem key={index} product={item} />)}
            </BagListUl>
        </BagSection>
    )
}

export default OrdersList

const BagSection = styled.section`
  color:black;
  margin-top:40px;
  `

const BagListUl = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px 20px;
  padding: 30px;
  `
  const TotalPrice = styled.p``