import styled from "styled-components"
import { useContext } from "react"
import { MyContext } from "../../App"
import BagItem from "./BagItem"
import OrderForm from "../OrderForm"

function Bag() {
    let { stateBag, dispatchBag } = useContext(MyContext)

    return (
        <BagSection>
            <BagListUl>
                {stateBag.bag.map((item, index) => <BagItem key={index} product={item} />)}
            </BagListUl>
            <TotalPrice>{stateBag.bag.reduce((total, price)=> total + price.totalPrice, 0)}</TotalPrice>
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