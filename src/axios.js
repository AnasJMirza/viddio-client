import axios from 'axios';

const instance = axios.create({
    baseURL: "https://youtube-server-jmq7.onrender.com/api",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export default instance;

// https://you-tube-server.herokuapp.com/api/