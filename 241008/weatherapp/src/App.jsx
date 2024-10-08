import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBOx";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  ul,li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop")
    center/cover no-repeat; */
  background:#000 ${({ img }) => `url(${img})`};center/cover no-repeat
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [background, setBackground] = useState(null);

  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherBycurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    setLoading(false);
  };
  const getCurrentLocation = () => {
    //   window.navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position);
    //   });
    // };
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      // console.log(lat, lon);
      getWeatherBycurrentLocation(lat, lon);
    });
  };
  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   if (city) {
  //     getWeatherByCity();
  //   }
  // }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") setCity(null);
    else setCity(city);
  };

  const getBackground = () => {
    // random 요소 넣으면 랜던값으로 이미지를 찾아옴!! 새로고침 많이 하면 값을 찾아오지 못할 수도 있음!!
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => {
        setBackground(full);
      });
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBackground();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // console.log(background);

  return (
    <>
      <GlobalStyles />
      <Wrapper img={background}>
        <Contents>
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
          <WeatherBox weather={weather} />
          <WeatherButton
            handleCityChange={handleCityChange}
            cities={cities}
            setCity={setCity}
          />
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;
