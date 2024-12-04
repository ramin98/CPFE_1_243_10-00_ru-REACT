import { useContext, useRef } from "react";
import styled from "styled-components";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  let { dispatchProducts, dispatchBag } = useContext(MyContext)

  let productName = useRef('')
  let productDescription = useRef('')
  let productPrice = useRef('')

  const dispatchFromProducts = () => {
    dispatchProducts({ type: 'DELETE DATA', payload: product.id })
  }

  const dispatchAddToBag = () => {
    dispatchBag({ type: 'ADD TO BAG', payload: product })
  }

  const dispatchReduct = () => {
    productName.current = product.product_name
    productDescription.current = product.product_description
    productPrice.current = product.product_price

    dispatchProducts({
      type: 'SHOW FORM', payload: product
    })
  }

  const dispatchReductForm = (ev) => {
    ev.preventDefault()
    dispatchProducts({ type: 'CHANGE DATA', payload: { argument: ev, id: product.id } })
  }

  return (
    <ProductItemTag>
      <Name>{product.product_name}</Name>
      <Description>{product.product_description}</Description>
      <Price>{product.product_price}</Price>
      <Image src={product.url} alt={product.product_name} />
      <DeleteButton onClick={dispatchFromProducts}>DELETE</DeleteButton>
      <AddButton onClick={dispatchAddToBag}>ADD TO BAG</AddButton>

      <RedactButton onClick={dispatchReduct}>REDACT</RedactButton>
      <Link to={`/product/${product.id}`}>PRODUCT PAGE</Link>

      {product.open && (
        <RedactForm onSubmit={dispatchReductForm}>
          <InputName type="text" placeholder="InputName" name="product_name" defaultValue={productName.current} />
          <InputDescription
            type="text"
            placeholder="InputDescription"
            name="product_description"
            defaultValue={productDescription.current}
          />
          <InputPrice
            type="number"
            placeholder="InputPrice"
            name="product_price"
            defaultValue={productPrice.current}
          />
          <FormButton>CHANGE</FormButton>
        </RedactForm>
      )}
    </ProductItemTag>
  );
}

export default ProductItem;

const ProductItemTag = styled.li`
  border-radius: 10px;
  padding: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


const Name = styled.p``;
const Description = styled.p``;
const Price = styled.p``;
const Image = styled.img``;

const RedactButton = styled.button``;
const DeleteButton = styled.button``;
const AddButton = styled.button``;

const RedactForm = styled.form``;
const InputName = styled.input``;
const InputDescription = styled.input``;
const InputPrice = styled.input``;
const FormButton = styled.button``;
