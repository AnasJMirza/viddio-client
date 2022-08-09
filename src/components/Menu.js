import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import youtube from "../assets/images/youtube.png";

// icons imports

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Menu = (props) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          <Logo>
            <Img src={youtube} />
            YouTube
          </Logo>
        </Link>

        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          history
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Sports
        </Item>
        <Item>
          <VideogameAssetOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieFilterOutlinedIcon />
          Movies
        </Item>
        <Item>
          <NewspaperOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpCenterOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => props.setDarkMode(!props.darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {props.darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  background-color: ${({ theme }) => theme.menuBg};
  flex: 2;
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-style: 12px;
  position: sticky;
  top: 0px;
`;

const Wrapper = styled.div`
  padding: 15px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  cursor: pointer;

`;

const Img = styled.img`
  width: 17%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 0px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 8px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  margin-top: 5px;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
