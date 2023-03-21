
import styled from "styled-components";

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 200px;
display: flex;
justify-content: flex-start;
`;

const Info = styled.div`
width: 50%;
height: 100%;
padding:20px;
background-color: rgba(5, 83, 83, 0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`

const Order = ({ item }) => {
  const date = parseInt(item.created_at.slice(0,10).substr(8, 2));
  return (
    <Container>
      <Info>
            Order id: {item.id} <br />
            Order date: {item.created_at.slice(0,8)}{date+1} <br /> 
            Order status: {item.status}<br />
            Order price: {item.total} €
      </Info>
    </Container>
  )
}



export default Order
