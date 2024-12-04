import styled from "styled-components";
import ProductList from "./Products/ProductList";
import Bag from "./Bag/Bag";
import OrdersList from "./Orders/OrdersList";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Products/ProductPage";

function Main() {

  return (
    <MainTag>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  margin-bottom: auto;
`;
