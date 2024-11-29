import styled from "styled-components"
import { useContext } from "react"
import { MyContext } from "../App"
import BagItem from "./BagItem"

function Bag() {
    let { state, dispatch } = useContext(MyContext)

    return (
        <BagSection>
            <BagListUl>
                {state.bag.map((item, index) => <BagItem key={index} product={item} />)}
            </BagListUl>
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
