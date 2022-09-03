import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios.js";

// icons imports
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comments from "../components/Comments";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { format } from "timeago.js";
import { dislike, fetchSuccess, like } from "../redux/features/videoSlice.js";
import { subscrription } from "../redux/features/userSlice.js";

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosRes = await axios.get(`/video/find/${path}`);
        const channelRes = await axios.get(
          `/user/find/${videosRes.data.userId}`
        );
        setChannel(channelRes.data);
        console.log("1", currentVideo);
        console.log("", currentUser);
        dispatch(fetchSuccess(videosRes.data));
      } catch (error) {}
    };
    fetchVideos();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/user/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  const handleDisike = async () => {
    await axios.put(`/user/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSubscription = async () => {
    try {
      currentUser.subscribedUsers.includes(Channel._id)
        ? axios.put(`/user/unsub/${channel._id}`)
        : axios.put(`/user/sub/${channel._id}`);

      dispatch(subscrription(channel._id));
    } catch (error) {
      console.log(error);
    }
  };

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
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>
            {currentVideo.views} views ● {format(currentVideo.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpAltOutlinedIcon />
              )}{" "}
              {currentVideo.likes.length}
            </Button>
            <Button onClick={handleDisike}>
              {currentVideo.dislikes?.includes(currentUser._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownAltOutlinedIcon />
              )}{" "}
              {currentVideo.dislikes.length}
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
            <ProfilePic src={currentUser.img} />
            <ChannelInfo>
              <ChannelName>{currentUser.name}</ChannelName>
              <SubscribeCount>
                {currentUser.subscribers} subscribers
              </SubscribeCount>
              <VideoDescription>{currentVideo.description}</VideoDescription>
            </ChannelInfo>
          </ChannelDetails>
          <Subscribe onClick={handleSubscription}>
            {currentUser.subscribedUsers.includes(channel._id)
              ? "Unsubscribe"
              : "Subscribe"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      {/* <Recommendation>
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
      </Recommendation> */}
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
  flex: 4.5;
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

const ChannelInfo = styled.div``;

const ChannelName = styled.h1`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
const SubscribeCount = styled.p`
  color: ${({ theme }) => theme.textSoft};
  font-size: 11px;
`;

const VideoDescription = styled.p`
  color: ${({ theme }) => theme.text};
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
