import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#eaf3f2"})};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const FooterLink = styled(Link)`
 color:black;
 text-decoration: none;
&:hover,
&:focus{
    color: #199494;
}
&:active{
    color: #255a5a;
};`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DOG STORE</Logo>
        <Desc>
          This is a practise project made by <b><FooterLink to="https://tyrnisarkka.netlify.app/" target="_blank">Tyrni Särkkä </FooterLink></b>
           for Codecademys Full-Stack Engineering course. The objective for this project was to build a functioning e-commerce application
          with registering possibility, cart functions and checkout, using PERN stack.<br/>
          While not a real app, this page is showing actual photos of a local dog rescues dogs, 
          <b><FooterLink to="https://viipurinkoirat.fi/" target="_blank"> please visit them</FooterLink></b> to
          learn more about these pups needing home.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Linktree</Title>
        <List>
          <ListItem><FooterLink to="/">Home</FooterLink></ListItem>
          <ListItem><FooterLink to="/dashboard">My Account</FooterLink></ListItem>
          <ListItem><FooterLink to="/login">Login</FooterLink></ListItem>
          <ListItem><FooterLink to="/register">Register</FooterLink></ListItem>
          <ListItem><FooterLink to="/products">Dogs</FooterLink></ListItem>
          <ListItem><FooterLink to="https://tyrnisarkka.netlify.app/" target="_blank">About me</FooterLink></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 123 Madeup address , Finland 123456
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@notanemail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;