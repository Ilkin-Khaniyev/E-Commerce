import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((catItem) => (
        <CategoryItem key={catItem.id} item={catItem} />
      ))}
    </Container>
  );
};

export default Categories;
