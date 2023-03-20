import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { Link } from 'react-router-dom';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(164, 224, 216, 0.5)
    ),
    url("https://viipurinkoirat.fi/sites/default/files/styles/fullsize/public/field/kuvat/miron-10.jpg?itok=R4LkV5A4")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 20px;
`;

const Button = styled.button`
  margin: 20px 0px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  transition:all 0.5s ease;

&:hover{
  background-color: #48a7a7;
  transform: scale(1.025);
  
  &:disabled{
    color: #1a3b2b;
    cursor: not-allowed;
  }
}
`;

const RegLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  color: teal;
  cursor: pointer;

  &:hover{
  color: #48a7a7;
}
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Wrong email or password</Error>}
            <RegLink to="/register">CREATE A NEW ACCOUNT</RegLink>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;