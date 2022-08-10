import React from 'react';
import styled from 'styled-components';

const AddCommnet = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src='https://avatars.githubusercontent.com/u/90819686?v=4'/>
                <Input placeholder='Add a comment...'/>
            </NewComment>
        </Container>
    );
};

export default AddCommnet;


const Container = styled.div`
    
`;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    padding-left: 5px;
    padding-bottom: 3px;
    width: 100%;
    outline: none;
    :focus{
        color: ${({theme}) => theme.textSoft};
    }
`;