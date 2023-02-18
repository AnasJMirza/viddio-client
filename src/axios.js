import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export default instance;

// https://you-tube-server.herokuapp.com/api/