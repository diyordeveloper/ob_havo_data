import React from 'react';
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "10c9febc354435ffc3d32e3a73e7e009";

export const FetchWeather = async (query) => {
    const { data } = await axios.get(URL ,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })
    return data;
}