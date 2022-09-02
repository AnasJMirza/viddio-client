import React, { useState } from "react";
import styled from "styled-components";
import axios from "../axios.js";
import { useDispatch } from "react-redux";
import {
  loginFail,
  loginStart,
  loginSuccess,
} from "../redux/features/userSlice.js";

import { auth, provider } from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      console.log("res", res.data);
    } catch (error) {
      dispatch(loginFail());
      console.log(error);
    }
  };

  const signinWithGoogle = async () => {
    try {
      dispatch(loginStart())
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post('/auth/google', {
        name: result.user.displayName,
        email: result.user.email,
        img: result.user.photoURL
      });
      
      dispatch(loginSuccess(res.data))
    } catch (error) {
      dispatch(loginFail())
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To continue to Youtube</SubTitle>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign In</Button>

        <Title>or</Title>
        <Button onClick={signinWithGoogle}>Signin with google</Button>
        <Title>or</Title>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 75vh;
  width: 28vw;
  background-color: ${({ theme }) => theme.menuBg};
  padding: 30px 50px;
  border-radius: 3px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;
const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.soft};
  cursor: pointer;
`;

const More = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22vw;
  margin-top: 5px;
  color: ${({ theme }) => theme.textSoft};
  padding: 0px 5px;
`;
const Links = styled.p`
  display: flex;
  gap: 10px;
`;
const Link = styled.p`
  cursor: pointer;
`;
