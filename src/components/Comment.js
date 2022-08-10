import React from 'react';
import styled from 'styled-components';

const Comment = () => {
    return (
        <Container>
            <Avatar src="https://avatars.githubusercontent.com/u/90819686?v=4" />
            <Details>
                <Info>
                    <Name>AnasJMirza</Name>
                    <Date>1 day ago</Date>
                </Info>
                <Description>Awesome car loaded with ton of features .. meanwhile Rear suspension height doesn’t looks stock. That  increase in rear height of car has to some extent ruined the beauty of this beast.</Description>
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
