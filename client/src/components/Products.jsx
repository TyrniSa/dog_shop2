import { useEffect, useState } from "react";
import styled from "styled-components"
import { publicRequest } from "../requestMethods";
import Product from "./Product"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      };
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
};

export default Products;
