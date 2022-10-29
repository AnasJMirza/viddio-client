import axios from 'axios';

const instance = axios.create({
    baseURL: "https://whispering-anchorage-80204.herokuapp.com/api",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export default instance;

// https://you-tube-server.herokuapp.com/api/