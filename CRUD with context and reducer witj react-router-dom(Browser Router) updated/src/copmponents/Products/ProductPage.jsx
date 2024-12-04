import styled from "styled-components";
import { MyContext } from "../../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    let { stateProducts } = useContext(MyContext)
    let { id } = useParams()
    let elementIndex = stateProducts.products.findIndex((item) => item.id === parseInt(id))
    
    if(elementIndex === -1){
        return <h1>NOT FOUND</h1>
    }


    return (
        <ProductItemTag>
            <Name>{stateProducts.products[elementIndex].product_name}</Name>
            <Description>{stateProducts.products[elementIndex].product_description}</Description>
            <Price>{stateProducts.products[elementIndex].product_price}</Price>
            <Image src={stateProducts.products[elementIndex].url} alt={stateProducts.products[elementIndex].product_name} />
        </ProductItemTag>
    );
}

export default ProductPage;

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

