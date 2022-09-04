import axios from '../axios.js';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card.js';

const Search = () => {

    
    const [videos, setVideos] = useState([]);
    const query = useLocation().search;

    useEffect(()=>{
        const getVideos = async () => {
            const res = await axios.get(`/video/search${query}`);
            setVideos(res.data)
        }
        getVideos();
    }, [query])

    return (
        <Container>
            {
                videos.map((video)=> {
                    return <Card key={video._id} video={video} />
                })
            }
        </Container>
    );
};

export default Search;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 22px 26px;
`;