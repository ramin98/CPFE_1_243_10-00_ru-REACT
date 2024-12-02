import { useContext, useRef } from "react";
import styled from "styled-components";
import { MyContext } from "../../App";

function BagItem({ product }) {
  let { stateBag, dispatchBag } = useContext(MyContext)

  return (
    <ProductItemTag>
      <Name>{product.product_name}</Name>
      <Description>{product.product_description}</Description>
      <Price>{product.product_price}</Price>
      <Image src={product.url} alt={product.product_name} />
      <DeleteButton onClick={() => dispatchBag({type:'DELETE FROM BAG', payload: product.id})}>DELETE</DeleteButton>
      <DecreaseButton onClick={() => dispatchBag({type:'DECREASE',payload: product.id})}>-</DecreaseButton>
      <Count>{product.count}</Count>
      <IncreaseButton onClick={() => dispatchBag({type:'INCREASE',payload: product.id})}>+</IncreaseButton>
    </ProductItemTag>
  );
}

export default BagItem;

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

const DeleteButton = styled.button``;

const IncreaseButton = styled.button``;
const DecreaseButton = styled.button``;
const Count = styled.p`
  text-align:center;
`;


