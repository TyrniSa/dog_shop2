import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { addProduct, increase } from "../redux/slices/cartSlice"

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
background-color: rgba(5, 83, 83, 0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 200px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #eaf3f2;
position: relative;

&:hover ${Info}{
  opacity: 1;
};
`;

const Image = styled.img`
height:85%;
z-index:2;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition:all 0.5s ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
};
`;

const IconLink = styled(Link)`
 color:black;
 text-decoration: none;
&:hover,
&:focus{
    color: #199494;
}
&:active{
    color: #255a5a;
};
`;


const Product = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClick = (id) => {
    const quantity = 1;
    const cartProduct = cart.products.find((item) => item.id === id);
    if (!cartProduct) {
      dispatch(
        addProduct({ ...item, quantity })
      );
    } else {
      dispatch(increase({ id: cartProduct.id, quantity }));
    };
  };

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon onClick={() => { handleClick(item.id) }}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <IconLink to={`/product/${item.id}`}><SearchOutlined /></IconLink>
        </Icon>
      </Info>
    </Container>
  )
};

export default Product;
