import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from '../components/Announcement.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { addProduct } from "../redux/slices/cartSlice.js";
import { publicRequest } from "../requestMethods.js";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";

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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setProduct(res.data[0]);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity })
    );
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>
            Sex: {product.sex}<br/>
            Age: {product.age}<br/>
            {product.description}
            </Desc>
          <Price>{product.price} €</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product;
