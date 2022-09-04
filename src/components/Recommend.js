import axios from '../axios.js';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card.js';

const Recommend = ({tags}) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await axios.get(`/video/tags?tags=${tags}`)
            setVideos(res.data)
        }
        getVideos();
    }, [tags])


    return (
        <Container>
            {
                videos.map((video) => {
                    return <Card type="small" key={video._id} video={video} />
                })
            }
        </Container>
    );
};

export default Recommend;

const Container = styled.div`
  flex: 2;
`;