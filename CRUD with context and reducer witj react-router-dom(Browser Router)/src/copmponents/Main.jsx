import styled from "styled-components";
import ProductList from "./Products/ProductList";
import Bag from "./Bag/Bag";
import OrdersList from "./Orders/OrdersList";
import { Route, Routes } from "react-router-dom";

function Main() {

  return (
    <MainTag>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/orders" element={<OrdersList />} />
      </Routes>
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  margin-bottom: auto;
`;
