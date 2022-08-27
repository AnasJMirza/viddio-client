import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from '../axios.js'


const Home = ({type}) => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const getVideos = async () => {
            const res = await axios.get(`/video/${type}`);
            setVideos(res.data);
        }
        getVideos();
    }, [type])

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