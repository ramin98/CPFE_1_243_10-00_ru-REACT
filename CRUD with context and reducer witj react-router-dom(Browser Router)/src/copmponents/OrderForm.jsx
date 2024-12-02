import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../App"
import { useNavigate } from "react-router-dom"

function OrderForm() {
    let { stateOrders, stateBag, dispatchOrders } = useContext(MyContext)

    let navigate = useNavigate()

    return (
        <FormSection>
            <FormHeader>ORDER FORM</FormHeader>
            <FormTag onSubmit={(ev) => {
                ev.preventDefault()
                dispatchOrders({ type: 'ADD ORDER', payload: ev, bag: stateBag.bag })
                navigate('/orders')
            }}>
                <FormInput type="text" name="customer_name" placeholder="customer_name" />
                <FormInput type="text" name="customer_number" placeholder="customer_number" />
                <FormInput type="text" name="customer_address" placeholder="customer_address" />
                <FormButton>SEND</FormButton>
            </FormTag>
        </FormSection>
    )
}

export default OrderForm

const FormSection = styled.section`
  color:black;
  margin-top:40px;
  `

const FormHeader = styled.h2`
  font-size:30px;
  font-weight:900;
  text-align:center;
  `

const FormTag = styled.form`
margin:auto;
margin-top:20px;
width:fit-content;
  `

const FormInput = styled.input`

  `

const FormButton = styled.button`

  `