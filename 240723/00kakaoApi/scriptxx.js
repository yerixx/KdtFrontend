// //2.current position
// const showPosition = (position) => {
//   const latitude = position.coords.latitude; //위도
//   const longitude = position.coords.longitude; //경도
//   // 1.kakao map
//   const container = document.querySelector("#map");
//   // console.log(container);
//   const options = {
//     center: new kakao.maps.LatLng(latitude, longitude),
//     //LatLng(위도,경도) 원하는 위치값 넣기
//     level: 3,
//   };
// };
// // 사용자의 위치를 가져오지 못했을 경우 errorPosition 함수 = 에러메세지 출력
// const errorPosition = (err) => {
//   alert(err.message);
// };

// navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

// const map = new kakao.maps.Map(container, options);

// // CURRENT POSITION
// const showPosition = (position) => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   // KAKAO MAP
//   const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
//   const options = {
//     //지도를 생성할 때 필요한 기본 옵션
//     center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
//     level: 3, //지도의 레벨(확대, 축소 정도)
//   };
//   const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리 턴
//   // Olive Store Info
//   const positions = [
//     {
//       title: "올리브영 강남우성점",
//       latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
//       address: "서울시 강남구 강남대로 320",
//     },
//     {
//       title: "올리브영 강남중앙점",
//       latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
//       address: "서울시 강남구 강남대로 374",
//     },
//     {
//       title: "올리브영 서초타운점",
//       latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
//       address: "서울시 서초구 서초대로 78길",
//     },
//     {
//       title: "올리브영 서초대로점",
//       latlng: new kakao.maps.LatLng(37.4940977, 127.0158607),
//       address: "서울시 서초구 서초대로 314",
//     },
//     {
//       title: "올리브영 역삼점",
//       latlng: new kakao.maps.LatLng(37.4987564, 127.0292784),
//       address: "서울시 강남구 테헤란로 111",
//     },
//   ];
//   // POSITIONS for()
//   for (let i = 0; i < positions.length; i++) {
//     let marker = new kakao.maps.Marker({
//       map: map,
//       position: positions[i].latlng,
//     });
//     const infowindow = new kakao.maps.InfoWindow({
//       content: positions[i].title,
//     });

//     const makeOverListener = (map, marker, infowindow) => {
//       return () => {
//         infowindow.open(map, marker);
//       };
//     };
//     const makeOutListener = (infowindow) => {
//       return () => {
//         infowindow.close();
//       };
//     };
//     kakao.maps.event.addListener(
//       marker,
//       "mouseover",
//       makeOverListener(map, marker, infowindow)
//     );
//     kakao.maps.event.addListener(
//       marker,
//       "mouseout",
//       makeOutListener(infowindow)
//     );
//   }

// Olive Store Info

const positions = [
  {
    title: "올리브영 강남우성점",
    latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
    address: "서울시 강남구 강남대로 320",
    img: "./img1.jpg",
    info: "영업시간 : 오전 8시 ~ 저녁 10시",
  },
  {
    title: "올리브영 강남중앙점",
    latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
    address: "서울시 강남구 강남대로 374",
    img: "./img2.jpg",
    info: "영업시간 : 오전 9시 ~ 저녁 9시",
  },
  {
    title: "올리브영 서초타운점",
    latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
    address: "서울시 서초구 서초대로 78길",
    img: "./img3.jpg",
    info: "영업시간 : 오전 9시 ~ 저녁 9시",
  },
  {
    title: "올리브영 서초대로점",
    latlng: new kakao.maps.LatLng(37.4940977, 127.0158607),
    address: "서울시 서초구 서초대로 314",
    img: "./img4.jpg",
    info: "영업시간 : 오전 8시 ~ 저녁 10시",
  },
  {
    title: "올리브영 역삼점",
    latlng: new kakao.maps.LatLng(37.4987564, 127.0292784),
    address: "서울시 강남구 테헤란로 111",
    img: "./img5.jpg",
    info: "영업시간 : 오전 8시 ~ 저녁 10시",
  },
];
// POSITIONS for()
for (let i = 0; i < positions.length; i++) {
  let marker = new kakao.maps.Marker({
    map: map,
    position: positions[i].latlng,
  });
  // 템플릿리터럴 문법
  const content = `
  <div class="wrap"> +
    <div class="info"> +
      <div class="title">+카카오 스페이스닷원 +
      <div class="close" onclick="closeOverlay()" title="닫기">
    </div> +
  </div> +
  <div class="body"> +
    <div class="img"> + 
      <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">+
    </div>+
    <div class="desc">+
      <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div> +
      <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>+
      <div>
      <a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a>
      </div> +
      </div>+
    </div>+
  </div>+
</div>;
  `;
}
//KAKAO MARKER
const markerPosition = new kakao.maps.LatLng(latitude, longitude);
const marker = new kakao.maps.Marker({
  position: markerPosition,
});
marker.setMap(map);
// kakao marker infoWindow
const iwContent = `<div class ="label"><span class="left"></span><span class="center">🎈현재위치!</span><span class="right"></span></div>`;
// const iwRemoveable = true;
const iwPosition = new kakao.maps.LatLng(latitude, longitude);
const infowindow = new kakao.maps.CustomOverlay({
  content: iwContent,
  position: iwPosition,
  // removable: iwRemoveable,
});
infowindow.setMap(map);

// kakao.maps.event.addListener(marker, "click", function () {
//   infowindow.open(map, marker);
// });
const errorPosition = (err) => {
  alert(err.message);
};
navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
