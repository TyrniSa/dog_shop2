import { useState } from "react";
import styled from "styled-components";
import Announcement from '../components/Announcement.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Products from "../components/Products.jsx";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })};
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("asc");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>DOGS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter dogs:</FilterText>
          <Select name="sex" onChange={handleFilters}>
            <Option disabled>
              Sex
            </Option>
            <Option value="">all</Option>
            <Option>boy</Option>
            <Option>girl</Option>
          </Select>
          <Select name="age" onChange={handleFilters}>
            <Option disabled>
              Age
            </Option>
            <Option value="">all</Option>
            <Option>puppy</Option>
            <Option>adult</Option>
            <Option>senior</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort dogs:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="asc"> Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort} />
      <Footer />
    </Container>
  )
};

export default ProductList;
