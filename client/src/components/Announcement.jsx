import styled from "styled-components";

const Container = styled.div`
height:30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      UPDATE 03/2023: New dogs without home!
    </Container>
  )
};

export default Announcement;
