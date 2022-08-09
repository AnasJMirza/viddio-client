import React from "react";
import styled from "styled-components";

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
            <Button>Like</Button>
            <Button>Dislike</Button>
            <Button>Share</Button>
            <Button>Save</Button>
          </Buttons>
        </Details>
      </Content>
      <Recommendation>Recommend</Recommendation>
    </Container>
  );
};

export default Video;

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 22px 56px;
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
  color: ${({theme}) => theme.text};
`;
const Details = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.p`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft}
`;
const Buttons = styled.div`
    display: flex;
    gap: 26px;
    color: ${({theme}) => theme.text}
`;

const Button = styled.div``;
