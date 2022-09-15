import axios from 'axios';

const instance = axios.create({
    baseURL: "https://you-tube-server.herokuapp.com/api/",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export default instance;