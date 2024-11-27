import styled from "styled-components";
import Search from "./Search";
import ProductList from "./ProductList";
import AddForm from "./AddFrom";

function Main() {
  
  return (
    <MainTag>
      <Search />
      <AddForm />
      <ProductList />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  margin-bottom: auto;
`;
