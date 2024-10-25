//forEach는 새로운 값을 반환하지 않음
const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

//forEach문을 선언형방식으로 type을 정의한 예시
