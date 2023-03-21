
import { logoutUser } from "../redux/apiCalls";
import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Order from "../components/Order";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  margin-top:20px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(164, 224, 216, 0.5)
    ),
    url("https://i.imgur.com/t3IizZQ.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 75%;
  height: 90%;
  overflow: scroll;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%", height: "90%", overflow: "scroll" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
  };
};
`;

const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([]);

  const logout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem('persist:root');
      window.location.reload();
    } catch (error) {
    };
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await publicRequest.get(`/orders/user/${user.id}`);
        setOrders(res.data);
      } catch (err) { }
    };
    getOrders();
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>{user.email}</Title>
          {orders.map((item) => <Order item={item} key={item.id} />)}
          <Button onClick={() => logout()}>
            LOGOUT
          </Button>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;