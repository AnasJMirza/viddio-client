import styled from 'styled-components';
import React from 'react';

const Upload = ({setOpen}) => {
    
    return (
        <Container>
            <Wrapper>
                <Close onClick={() => setOpen(false)}>X</Close>
                <Title>Upload the video</Title>
            </Wrapper>
        </Container>
    );
};

export default Upload;


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    color: ${({ theme }) => theme.text};
    width: 600px;
    height: 600px;
    background-color: ${({ theme }) => theme.menuBg};

    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 20px;
    position: relative;
`;
const Close = styled.h3`
    cursor: pointer;
    font-size: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
`;
const Title = styled.h1`
    font-size: 30px;
`;
