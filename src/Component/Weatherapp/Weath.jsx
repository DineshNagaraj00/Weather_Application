import React from 'react'
import './Weather.css'


import search_icon from '../assets/search.png'
import clearn_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

function Weath() {


    let api_key="fiFyZbPkH2uUhj76EArgw402T7m7Xhlv"
    let element
    const search = async () => {
        element = document.getElementsByClassName("city_name");
        console.log(element);
        if (element[0].value === "")
         {
            return 0;
        }
       
        const url = `https://api.tomorrow.io/v4/weather/forecast?location=${element[0].value}&apikey=${api_key}`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            const humidity = document.getElementsByClassName("humidity");
            const wind = document.getElementsByClassName("wind"); // Corrected from "humidity"
            const temp = document.getElementsByClassName("weather_temp");
            const location = document.getElementsByClassName("waether_location");
    
            humidity[0].innerHTML = data.timelines.minutely[0].values.humidity;
            wind[0].innerHTML = `${data.timelines.minutely[0].values.windSpeed} Km/h`; // Display wind speed with units
            temp[0].innerHTML = data.timelines.minutely[0].values.temperature;
            location[0].innerHTML = data.location   .name;
            element[0].value = "";
        } catch (error) {
            console.error('Error fetching or parsing weather data:', error);
        }
        
    };
    

  return (
    <div className='container'>
        <div className="top_bar">
            <input type="text" 
            className='city_name'
            placeholder='search city'
            />
                <div className="search_icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
        </div>
        <div className="weather_image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather_temp">24°C</div>
        <div className="waether_location">London</div>
        <div className="data_container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="wind">18 Km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Weath