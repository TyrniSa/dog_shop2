import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
border: none;
${mobile({ width: "55px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "22px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const NavbarLink = styled(Link)`
 color:black;
 text-decoration: none;
&:hover,
&:focus{
    color: #199494;
}
&:active{
    color: #255a5a;
};`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
        <NavbarLink to="/products"><MenuItem>DOGS</MenuItem></NavbarLink>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color: "gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center><NavbarLink to="/"><Logo>DOG STORE</Logo></NavbarLink></Center>
        <Right>
        <NavbarLink to="/register"><MenuItem>REGISTER</MenuItem></NavbarLink>
        <NavbarLink to="/login"><MenuItem>SIGN IN</MenuItem></NavbarLink>
        <NavbarLink to="/cart"><MenuItem>
            <Badge color="success" badgeContent={quantity}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem></NavbarLink>
        </Right>
      </Wrapper>
    </Container>
  )
};

export default Navbar;
