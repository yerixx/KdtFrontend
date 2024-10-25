// 맵드 타입
// 기존의 객체 타입을 기반으로 새로운 객체의 타입을 만들어주는 타입
// 제어 가능

interface User {
  id: number;
  name: string;
  age: number;
}

type ParpialUser = {
  [key in keyof User]?: User[key];
};

//사용자의 정보를 찾아오는 역할 함수
const fetchUser = (): User => {
  return {
    id: 1,
    name: "yerim",
    age: 20,
  };
};

//사용자의 정보를 업데이트 역할 하는 함수
const updateUser = (user: ParpialUser) => {
  console.log(user);
};
updateUser({ name: "yerimpark" });
