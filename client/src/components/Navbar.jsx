import React from 'react';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutUser } from "../redux/apiCalls"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "22px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const NavbarLink = styled(Link)`
 color:black;
 text-decoration: none;
 margin-left: 25px;
&:hover,
&:focus{
    color: #199494;
}
&:active{
    color: #255a5a;
}
${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Button = styled.button`
font-size: 16px;
 color:black;
 text-decoration: none;
 background-color: transparent;
 border: none;
&:hover,
&:focus{
    color: #199494;
    background-color: transparent;
 border: none;
};
&:active{
    color: #255a5a;
    background-color: transparent;
 border: none;
};
`;

const logout = async () => {
  try {
    await logoutUser();
    localStorage.removeItem('persist:root');
    window.location.reload();
  } catch (error) {
    console.log(error.response);
  }
};

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavbarLink to="/products"><MenuItem>DOGS</MenuItem></NavbarLink>
        </Left>
        <Center><NavbarLink to="/"><Logo>DOG STORE</Logo></NavbarLink></Center>
        <Right>
          {user ? (
            <div>
              <NavbarLink to='/dashboard' className='mx-3'>
                <span>DASHBOARD</span>
              </NavbarLink>
              <Button onClick={() => logout()} className='btn btn-primary'>
                LOGOUT
              </Button>
            </div>
          ) : (
            <div>
              <NavbarLink to='/login'>
                <span>LOGIN</span>
              </NavbarLink>

              <NavbarLink to='/register' className='mx-3'>
                <span>REGISTER</span>
              </NavbarLink>
            </div>
          )}
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
