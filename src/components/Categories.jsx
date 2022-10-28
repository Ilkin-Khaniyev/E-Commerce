import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((catItem) => (
        <CategoryItem item={catItem} />
      ))}
    </Container>
  );
};

export default Categories;
