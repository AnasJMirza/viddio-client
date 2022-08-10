import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration: 'none'}}>
      <Container>
        <Image src="https://i.ytimg.com/vi/xyVfLxV08I0/maxresdefault.jpg" />
        <Details>
          <ChannelImage src="https://avatars.githubusercontent.com/u/90819686?v=4" />
          <Text>
            <Title>Learn Python in 5 Minutes</Title>
            <ChannelName>AnasJMirza</ChannelName>
            <Info>100,000 views ● 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

const Container = styled.div`
  width: 325px;
  margin-bottom: 45px;
  cursor: pointer;
  /* margin: 5px 10px; */
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-repeat: 50%;
  background-color: #999;
`;

const Text = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  margin: 5px 0px;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
