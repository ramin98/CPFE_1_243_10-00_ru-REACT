import { useContext, useRef } from "react";
import styled from "styled-components";
import { MyContext } from "../../App";

function OrdersItem({ product }) {
  let { stateBag, dispatchBag } = useContext(MyContext)

  return (
    <ProductItemTag>
      <Name>{product.customer_name}</Name>
      <Description>{product.customer_number}</Description>
      <Price>{product.customer_address}</Price>
      <OrderBag>
        ПРОДУКТЫ
      {product.customer_bag.map((item, index) => {
        return(
            <OrderItemTag key={index}>
                      <Name>{item.product_name}</Name>
            </OrderItemTag>
        )
      })}
      </OrderBag>
    </ProductItemTag>
  );
}

export default OrdersItem;

const ProductItemTag = styled.li`
  border-radius: 10px;
  padding: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OrderBag = styled.ul`
display: grid;
grid-template-columns: auto auto auto;
gap: 20px 20px;
padding: 30px;
`;

const OrderItemTag = styled.li`
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

