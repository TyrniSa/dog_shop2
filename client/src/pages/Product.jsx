import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from '../components/Announcement.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
flex:1;

`;

const Image = styled.img`
width:100%;
height:90vh;
object-fit: cover;
${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
margin:20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border:2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #c2e0da;
  }
`;


const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://viipurinkoirat.fi/sites/default/files/styles/thumbnail/public/field/kuvat/mirtha-etu.jpg?itok=AbjnRdau" />
        </ImgContainer>
        <InfoContainer>
          <Title>Mirtha</Title>
          <Desc>
            Sex: Female<br/>
            Age: Senior<br/>
            Mirtha sterilisoitiin Viipurin Koirien tuella Aurika-klinikalla.
            Siitä otettiin samalla röntgenkuva, joka paljasti, että Mirthalla on lantiossa vanha vamma.
          </Desc>
          <Price>20€</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product;
