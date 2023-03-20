import styled from "styled-components";
import { useState } from "react";
import { onRegistration } from "../redux/apiCalls";
import { mobile } from "../responsive";
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
    url("https://viipurinkoirat.fi/sites/default/files/styles/fullsize/public/field/kuvat/polkka-6.jpg?itok=3vjGSg1h")
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition:all 0.5s ease;

  &:hover{
    background-color: #48a7a7;
    transform: scale(1.025);
  }
`;

const Msg = styled.div`
  font-size: 16px;
  margin: 10px 0px;
  color: teal;
`;

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await onRegistration(values);
      setError('');
      setSuccess(data.message);
      setValues({ email: '', password: '' });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess('');
    };
  };

  return (
    <div>
    <Announcement />
    <Navbar />
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
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
          <SubmitContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type='submit' >CREATE</Button>
          <div style={{ color: 'red', margin: '10px 0px'}}>{error}</div>
          <Msg>{success}</Msg>
          </SubmitContainer>
        </Form>
      </Wrapper>
    </Container>
    <Footer />
    </div>
  );
};

export default Register;