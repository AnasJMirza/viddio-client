import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "../axios.js";
import { Puff } from "react-loader-spinner";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const getVideos = async () => {
        const res = await axios.get(`/video/${type}`);
        setVideos(res.data);
      };
      getVideos();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [type]);

  return (
    <Container>
      {loading ? (
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        videos.map((video) => {
          return <Card key={video._id} video={video} />;
        })
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 22px 56px;
`;
