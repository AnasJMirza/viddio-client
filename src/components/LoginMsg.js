import React from 'react';
import styled from 'styled-components';

const LoginMsg = () => {
    return (
        <Container>
            <Text>You need to login to add comments</Text>
        </Container>
    );
};

export default LoginMsg;


const Container = styled.div`

`;

const Text = styled.p`
    color: ${({theme}) => theme.text};
    
    text-align: center;
`;

