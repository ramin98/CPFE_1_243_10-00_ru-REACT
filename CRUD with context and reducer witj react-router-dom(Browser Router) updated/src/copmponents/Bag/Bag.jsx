import styled from "styled-components"
import { useContext } from "react"
import { MyContext } from "../../App"
import BagItem from "./BagItem"
import OrderForm from "../OrderForm"

function Bag() {
    let { stateBag } = useContext(MyContext)

    let totalSum = stateBag.bag.reduce((total, price)=> total + price.totalPrice, 0)

    return (
        <BagSection>
            <BagListUl>
                {stateBag.bag.map((item) => <BagItem key={item.id} product={item} />)}
            </BagListUl>
            <TotalPrice>{totalSum}</TotalPrice>
            <OrderForm/>
        </BagSection>
    )
}

export default Bag

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