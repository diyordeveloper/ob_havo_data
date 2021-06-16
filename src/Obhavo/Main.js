import React, { useState } from 'react';
import  { FetchWeather }  from './api/FetchWeather';

const Main = () => {

    const [query,setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await FetchWeather(query);
            setWeather(data)
            setQuery();
            console.log(data)
        }
    }
    return (
        <>
            <div className="searchSec">
                <input 
                type="text"
                 placeholder="Qidiruv..."
                  className="input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={search}
                  />
            </div>
            {weather.main && (
                <div className="city" >
                    <div className="info" >
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Aka rasm topilmadi nima qilaylik?" />
                    </div>
                    <div className="details">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup><span>&deg;</span>C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Main;