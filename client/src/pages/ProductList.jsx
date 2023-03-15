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
justify-content: space-between

;`;

const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>BOYS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter dogs:</FilterText>
          <Select>
            <Option disabled selected>
              Sex
            </Option>
            <Option>Boys</Option>
            <Option>Girls</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Age
            </Option>
            <Option>Puppy</Option>
            <Option>Adult</Option>
            <Option>Senior</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort dogs:</FilterText>
        <Select>
            <Option selected> Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  )
}

export default ProductList;
