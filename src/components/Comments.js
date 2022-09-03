import axios from "../axios.js";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const Comments = (props) => {

  const { currentUser } = useSelector(state => state.user);

  const [comments, setComments] = useState([])

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`/comment/${props.videoId}`)
      // console.log("comments", res.data);
      setComments(res.data);
    }
    getComments();
  }, [props.videoId])

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input placeholder="Add a comment..." />
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
  :focus {
    color: ${({ theme }) => theme.textSoft};
  }
`;
