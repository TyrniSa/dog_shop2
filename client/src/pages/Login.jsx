import styled from "styled-components";
import { useState } from "react";
import { onLogin } from "../api/auth";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import { mobile } from "../responsive";

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
  ${mobile({width: "75%"})};
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
}
`;

const Msg = styled.div`
  color: red;
  margin: 10px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  color: teal;
  cursor: pointer;

  &:hover{
  color: #48a7a7;
}
`;

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin(values);
      dispatch(authenticateUser());
      localStorage.setItem('isAuth', 'true');
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    };

  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Input
          onChange={(e) => onChange(e)}
          type='email'
          id="email"
          name="email"
          value={values.email}
          placeholder='email'
          required
          />
          <Input
          onChange={(e) => onChange(e)}
          type='password'
          id="password"
          name="password"
          value={values.password}
          placeholder='password'
          required
          />
          <Button type='submit'>LOGIN</Button>
          <Msg>{error}</Msg>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;