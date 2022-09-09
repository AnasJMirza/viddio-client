import axios from "../axios.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector } from "react-redux";



const Comments = ({videoId}) => {

  const { currentUser } = useSelector(state => state.user);

  const [comments, setComments] = useState([])
  const [commentValue, setCommentValue] = useState("");

  const handleComment = async () => {
    console.log("Handle Comment is runnin....");
    try {
      await axios.post("/comment", {description: commentValue, videoId: videoId}) 
    } catch (error) {
      console.log(error);
    }
  }

  

  useEffect(() => {
    const getComments = async () => {
      
      const res = await axios.get(`/comment/${videoId}`)
      
      setComments(res.data);
    }
    getComments();
  }, [videoId])

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input placeholder="Add a comment..." onChange={(e) => setCommentValue(e.target.value)}/> <Button onClick={handleComment}>Post Comment</Button>
      </NewComment>
      {
        comments.map((comment) => {
          return <Comment key={comment._id} comment={comment}/>
        })
      }
    </Container>
  );
};

export default Comments;

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  padding-left: 5px;
  padding-bottom: 3px;
  width: 100%;
  outline: none;
  /* :focus {
    color: ${({ theme }) => theme.textSoft};
  } */
  color: ${({ theme }) => theme.textSoft};
`;

const Button = styled.div`
  padding: 10px;
  color: white;
  cursor: pointer;
  background-color: blueviolet;
  width: 140px;
  border-radius: 3px;
  text-align: center;
`;