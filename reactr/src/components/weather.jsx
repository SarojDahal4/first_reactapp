import React, { useState } from "react";
import axios from "axios"; // Import axios

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&unit=imperial&appid=655987ed03a04ac268528f89dc1fc548`;

  // Handle the search when the 'Enter' key is pressed
  const searchLocation = (event) => {
    if (event.key === "Enter" && location) {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the weather data:", error);
        });
    }
  };

  return (
    <>
      <div>Weather Forecast</div>
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter the Location"
        type="text"
      />
      <div>
        {data.name ? (
          <div>
            <h3>Weather in {data.name}</h3>
            <p>Temperature: {data.main.temp}°K</p>
            <p>Weather: {data.weather && data.weather[0].description}</p>
          </div>
        ) : (
          <div>Enter a location to see the weather.</div>
        )}
      </div>
    </>
  );
};

export default Weather;
