import React, { useEffect, useState } from "react";
import { format } from 'timeago.js'
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from '../axios.js'

const Card = (props) => {

  const [channel, setChannel] = useState({});

  useEffect(()=>{
    const getChannel = async () => {
      const res = await axios.get(`/user/find/${props.video.userId}`)
      setChannel(res.data);
    };
    getChannel();
  }, [props.video.userId])

  return (

    <Link to={`/video/${props.video._id}`} style={{textDecoration: 'none'}}>
      <Container type={props.type} >
        <Image type={props.type} src={props.video.imgUrl} />

        <Details type={props.type}>
          <ChannelImage
            type={props.type}
            src={channel.img}
          />
          <Text>
            <Title type={props.type}>{props.video.title}</Title>
            <ChannelName type={props.type}>{channel.name}</ChannelName>
            <Info type={props.type}>{props.video.views} views ●  {format(props.video.createdAt)}</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

const Container = styled.div`
  width: ${(props) => props.type !== "small" && "330px"};
  margin-bottom: ${(props) => (props.type !== "small" ? "45px" : "10px")};
  cursor: pointer;
  display: ${(props) => props.type === "small" && "flex"};
  gap: ${(props) => props.type === "small" && "10px"};
  
`;

const Image = styled.img`
  width: 100%;
  max-height: ${(props) => props.type === "small" ? "100px" : "200px"};
  background-color: #999;
  flex: 1;
  background-color: gray;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: ${(props) => props.type !== "small" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-repeat: 50%;
  background-color: #999;
  display: ${(props) => props.type === "small" && "none"};
`;

const Text = styled.div``;
const Title = styled.h1`
  font-size: ${(props) => (props.type === "small" ? "14px" : "16px")};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: ${(props) => props.type === "small" && "12px"};
  margin: 5px 0px;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.p`
  font-size: ${(props) => props.type === "small" && "10px"};
  color: ${({ theme }) => theme.textSoft};
`;
