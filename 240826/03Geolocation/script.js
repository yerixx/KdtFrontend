//Geolocation

//getCurrentPosition(successCB, errorCB, options)

const showPosition = (position) => {
  //position은 인스턴스 객체
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const errorPosition = (err) => {
  alert(err.message);
};

const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    //getCurrentPosition 최초 현재의 위치를 일회적으로 가지고 오고 끝남
    window.navigator.geolocation.getCurrentPosition(
      showPosition,
      errorPosition
    );
    const options = {
      //정교한 값을 찾아오는 법
      enableHighAccuracy: true,
      //위치정보의 유효기간, 밀리초로 정의 함 .. 몇초로 주겠다
      //시간을 길게주면 줄수록 2000를 주면 2초 딜레이되니까..0이 국룰인듯?
      maximumAge: 0,
      //통신데이터가 잘 안터지는 곳이여서 5초간 로딩됐을때도 못찾아 온다면 새로고침
      timeout: 5000,
    };

    //watchPosition 이동 경로 파악 하여, 실시간 위치 파악해주는 메서드 함수 - 배터리 메모리 소비
    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );
    setTimeout(() => {
      //clearWatch watchPosition을 찾아와서 30초 경과된 후 위치 변화 없으면 위치 파악을 멈춤
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다");
  }
});
