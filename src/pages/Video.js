import React from "react";
import styled from "styled-components";

// icons imports
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="410"
            src="https://www.youtube.com/embed/lreNAOcjtCE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Toyota Mark X 300G Premium | Owner Review | PakWheels</Title>
        <Details>
          <Info>100,000 views ● 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />

        <Channel>
          <ChannelDetails>
            <ProfilePic src="https://avatars.githubusercontent.com/u/90819686?v=4" />
            <ChannelInfo>
                <ChannelName>AnasJMirza</ChannelName>
                <SubscribeCount>365K Subscribers</SubscribeCount>
                <VideoDescription>Great fuel average with some amazing power pack features! Don't miss this owner's review of The Toyota Mark X. What did you like the most about the car? Let us know in the comments below.</VideoDescription>
            </ChannelInfo>
          </ChannelDetails>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
      </Recommendation>
    </Container>
  );
};

export default Video;

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 22px 26px;
`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 26px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ChannelDetails = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
`;

const ChannelInfo = styled.div`
    
`;


const ChannelName = styled.h1`
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 600;
    color: ${({theme}) => theme.text};

`;
const SubscribeCount = styled.p`
    color: ${({theme}) => theme.textSoft};
    font-size: 11px;

`;

const VideoDescription = styled.p`
    color: ${({theme}) => theme.text};
    font-size: 12px;
    margin-top: 8px;
    font-weight: 400;

`;
const Subscribe = styled.p`
    background-color: #cc1a00;
    color: white;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px 20px;

`;
