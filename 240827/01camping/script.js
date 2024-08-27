const showPosition = (position) => {
  const url =
    // 서비스 영역 부분 키 값 확인 필요
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=mDAg8kx7B7X3TtZM9XQmXS3IxfW9N7fmbLJgWYOBfRkrHfLqAvzH3UrGjldCCKQ%2BwZg%2FN2DFMoRQMoUjOE1yug%3D%3D&_type=json";

  fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      console.log(data);

      const { latitude, longitude } = position.coords;
      const mapContainer = document.querySelector("#map");
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude),
        // 지도 레벨이 작을 수록 줌 인 상태
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

        markers.push(marker);

        const makerOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };
        const makerOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };
        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makerOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makerOutListener(infowindow)
        );
      }

      clusterer.addMarkers(markers);
    });
};

const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
