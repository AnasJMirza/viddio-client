
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { format } from 'timeago.js';

const Comment = ({comment}) => {

    const { currentUser } = useSelector(state => state.user);

    return (
        <Container>
            <Avatar src={currentUser.img} />
            <Details>
                <Info>
                    <Name>{currentUser.name}</Name>
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
