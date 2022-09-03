import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { useSelector } from "react-redux";
import Upload from "./Upload";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  return (
    <>
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon fontSize="large" style={{cursor: "pointer"}} onClick={()=>setOpen(true)} />
            <Avatar src={currentUser.img}/>
            <UserName>{currentUser.name}</UserName>
          </User>
        ) : (
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
    {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.menuBg};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;


const User = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
`;
const UserName = styled.p``;