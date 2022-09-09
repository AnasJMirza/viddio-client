
import axios from '../axios.js';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { format } from 'timeago.js';

const Comment = ({comment}) => {

    const { currentUser } = useSelector(state => state.user);

    const [commentUser, setCommentUser] = useState({})

    
    useEffect(()=>{
        const getUser = async () => {
            try {
                
            const res = await axios.get(`/user/find/${comment.userId}`)
            setCommentUser(res.data);
            
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [])

    return (
        <Container>
            <Avatar src={commentUser.img} />
            <Details>
                <Info>
                    <Name>{commentUser.name}</Name>
                    <Date>{format(comment.createdAt)}</Date>
                </Info>
                <Description>{comment.description}</Description>
            </Details>
        </Container>
    );
};

export default Comment;


const Container = styled.div`
    margin: 30px 0px;
    display: flex;
    gap: 10px;
`;
const Avatar = styled.img`
    width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Info = styled.div`
    display: flex;
    gap: 5px;
`;
const Name = styled.h2`
    color: ${({theme}) => theme.text};
`;
const Date = styled.p`
    font-size: 10px;
    color: ${({theme}) => theme.textSoft};
`;
const Description = styled.p`
    color: ${({theme}) => theme.text};
`;
