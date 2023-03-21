import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from '../components/Announcement.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { mobile } from "../responsive";
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods.js";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, increase, decrease, removeProduct } from "../redux/slices/cartSlice.js";

const KEY = "pk_test_51MmbhCIGIsRpz8undo1KGABiH5NqJ11Rih7EBtvPMjnpDTuaZUaxQrHq2L8KHPIs3zakqLqqjlTrwkJ9Ptfs8zDt009h0fdwAt";

const Container = styled.div`
`;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
     width: ${(props) => props.type === "filled" && "100%"};
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  margin-bottom:10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const DogName = styled.span``;

const DogSex = styled.span``;

const DogAge = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 24px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const RemoveButton = styled.button`
  width: 30%;
  height: 40px;
  padding: 10px;
  background-color: #344949;
  color: white;
  font-weight: 600;
  margin-top:10px;
`;


const ClearButton = styled.button`
margin-top:10px;
  width: 100%;
  padding: 10px;
  color: black;
  background-color: white;
  font-weight: 600;
`;

const ButtonLink = styled(Link)`
 text-decoration: none;
 color: ${(props) => props.type === "filled" ? "white" : "black"};
&:hover,
&:focus{
    color: #199494;
}
&:active{
    color: #255a5a;
};`

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 400,
        });
        navigate("/success", { state: { stripeData: res.data, cart: cart } });
      } catch { }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, navigate]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton><ButtonLink to="/products">CONTINUE SHOPPING</ButtonLink></TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product => (
              <Product key={product.id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <DogName>
                      <b>Dog:</b> {product.name}
                    </DogName>
                    <DogSex>
                      <b>Sex:</b> {product.sex}
                    </DogSex>
                    <DogAge>
                      <b>Age:</b> {product.age}
                    </DogAge>
                  </Details>
                </ProductDetail>
                <PriceDetail>

                  <ProductAmountContainer>
                    <Remove onClick={() => { product.quantity > 0 && dispatch(decrease({ id: product.id })) }} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add onClick={() => { dispatch(increase({ id: product.id, quantity: 1 })) }} />
                  </ProductAmountContainer>
                  <ProductPrice>{product.price * product.quantity} €</ProductPrice>
                  <RemoveButton onClick={() => { dispatch(removeProduct(product.id)) }}>REMOVE</RemoveButton>
                </PriceDetail>

              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>
            {user ?
              (<StripeCheckout
                name="DOG STORE"
                image="https://imgur.com/rTtvFOi.png"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total} €`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>) : (
                <TopButton type="filled"><ButtonLink type="filled" to="/login">LOGIN BEFORE ORDERING</ButtonLink></TopButton>)}
            <ClearButton onClick={() => { dispatch(clearCart()) }}>CLEAR CART</ClearButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
};

export default Cart;
