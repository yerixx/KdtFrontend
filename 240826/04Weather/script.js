import env from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KYE}&units=metric`;
  // "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector(".icon");
      const temp = document.querySelector(".temp");
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");

      let weatherName;
      let cityName;

      switch (data.weather[0].main) {
        //switch (data?.weather[0]?.main) {
        // ? = 앞에있는 데이터가 존재한다면 뒤에 값을 찾아와라
        case "Clouds":
          weatherName = "구름";
          break;
        case "Rain":
          weatherName = "비";
          break;
      }

      switch (data.name) {
        case "Jamwon-dong":
          cityName = "서울시 잠원동";
          break;
      }
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temp.innerText = `${data.main.temp} ℃`;
      weather.innerText = weatherName;
      city.innerText = cityName;
      console.log(data);
    });
};

//정상적으로 데이터를 찾아왔을 때
const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};

//  에러가 생겼을 때
const errorHandler = (err) => {
  const notice = document.querySelector(".notice");
  notice.style.display = "block";
  alert(err.message);
};

//사용자 위치 정보 값 가져오기 1
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("Geolocation id not Available!");
}
