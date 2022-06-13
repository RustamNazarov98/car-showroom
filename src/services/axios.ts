import axios from "axios";

export const cars = axios.create({
    baseURL: 'https://atlant-room.herokuapp.com',
});


