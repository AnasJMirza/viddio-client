import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from '../components/Card';


const Home = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const getVideos = async () => {
            const res = await axios.get('http://localhost:5000/api/video/random');
            console.log('res', res.data);
            setVideos(res.data);
        }
        getVideos();
    }, [])

    return (
        <Container>
            {
                videos.map((video)=>{
                    return <Card key={video._id} video={video}/>
                })
            }
        </Container>
    );
};

export default Home;


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 22px 56px;
`