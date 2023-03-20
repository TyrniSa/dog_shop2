
import { logoutUser } from "../redux/apiCalls"; 

import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Order from "../components/Order";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(164, 224, 216, 0.5)
    ),
    url("https://viipurinkoirat.fi/sites/default/files/styles/thumbnail/public/field/kuvat/tara-2022-12-20-153.jpg?itok=5OB8Gyk0")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 75%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
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
  }
}
`;

const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([]);

    const logout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem('persist:root');
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/orders/user/"+ user.id);
        setOrders(res.data);
      } catch (err) {}
    };
    getOrders();
  }, []);

  console.log(orders)

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

// const Dashboard = () => {

//   const logout = async () => {
//     try {
//       await logoutUser();
//       localStorage.removeItem('persist:root');
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1>Dashboard</h1>
//         <button onClick={() => logout()} className='btn btn-primary'>
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// };

// export default Dashboard;