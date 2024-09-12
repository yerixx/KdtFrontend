const numA = 10;
const numB = 20;
const numC = undefined;

// 병합 연산자 numA 값이 있으면 좌항값 출력, 없으면 우항값 출력
console.log(numC ?? numB);

//삼항조건연산자

const strA = 1;
typeof strA ==="string" ? console.log("문자자료형") : console.log("문자자료형 아님")

//switch문
const fruit = "banana"

switch(fruit){
  case "apple" : 
    console.log("사과");
    break;
  case "banana" : 
    console.log("바나나");
    break;
  default:
    console.log("찾는과일 없음")
}

//Object객체
let objA = {};
objA.type = "object";
objA ["numA"] = 2;
console.log(objA)


let objB = new Object();
console.log(objB)
console.log(objA.numA)

const person ={
  name:"David",
  age:20,
  location:"Seoul",
}
// 객체 안에 있는 key 값을 배열로 반환!!
const keyArr = Object.keys(person);
console.log(keyArr);

//반복문을 실행시켜서 값을 찾아옴
keyArr.forEach((key) => {
    let value = person[key];
    console.log(key,":",value)

  }
)



const testO = {
  name:"David",
  age:20,
  skill:"JS",
};
const {name,age,skill} = testO
console.log(`${name}님은 ${age}살 입니다 ${skill}을 잘합니다`)


//단락 회로 평가
const calcA = () => {
  console.log("A")
    return false;
}
const calcB = () => {
  console.log("B")
    return true;
}
console.log(calcA() && calcB())
console.log(calcA() || calcB())

//react는 기본적으로 브라우저를 통해서 앱을 여는 순간 => 컴포넌트가 무조건 마운트가 됨 => 왜? 가상돔을 만들어야 해서

//fetch()사용시
//정상적으로 fetch()를 통해서 불러오는 영화 api 데이터를 출력 하지 못함
//이럴 때 사용

//movieData가 있으면 data.title을 찾아와라 
// console.log(movieData && data.title)

//찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야 하는 상황처럼 . 다량의 값을 찾아와야 할 때

//로딩스피너 사용 (데이터를 찾아오는 동안 기다리게 하는)



//전개연산자
const arrA = [1,2,3];
const arrB = [4,5,6];

const arrC =[...arrA, ...arrB];
console.log(arrC)

const obj1 = {
  a:1,
  b:2,
}
const obj2 = {
  c:3
}

const obj3 = {...obj1, d:9}

console.log(obj3)


//배열 메서드 특집!!
let food = ["짜장면","피자","치킨"];
// const newLength = food.push("탕수육");

// console.log(newLength)

// console.log(removedItem)
// console.log(food)

// const newLength = food.unshift("짜장면")
// const removedItem = food.shift();
// console.log(removedItem)
// console.log(food)

// const sliced = food.slice(0,2);
// const sliced = food.slice(1);
// console.log(sliced)

// const arr1 =[1,2];
// const arr2 =[3,4];

// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// console.log(food.indexOf("피자"))

// const arr =[
//   {name:"david"},
//   {name:"martin"},
//   {name:"romeo"},
//   {name:"juliet"},
// ];

// const element = arr.find((item)=> item.name === "david");
// console.log(element)

// console.log(arr)



const arr = [
  {name:"슛돌이", hobby:"축구"},
  {name:"통키", hobby:"피구"},
  {name:"강속구", hobby:"야구"},
  {name:"태백산", hobby:"피구"},
]

// const filtereadArr = arr.filter((item) => {
//   return item.hobby === "피구"
// })
// console.log(filtereadArr)

// const newArr = arr.map((item) => item.name)
// console.log(newArr)
// console.log(arr)

// const arr1 =[10,5,3];


// const compare = (a,b) => {
//   // if(a>b)return 1;
//   // else if (a <b) return -1;
//   // else return 0

//   //내림차순
//   a - b
// }
// arr1.sort(compare)

// console.log(arr1)

// console.log(food.join())
// console.log(food.join(""))
// console.log(food.join("-"))
// console.log(food.join("*"))

const arr3 = [1,2,3,4,5];
//acc = 누산기 // item =더해질 값 // 최초의 값 0
const resultA = arr3.reduce((acc, item)=> acc + item,0)
console.log(resultA)  //15

const priceA = 3000
const priceB = 6000
const priceC = 3000

const sum = priceA + priceB + priceC
const result = sum - 10000

console.log(sum < 10000 ? " 돈관리 잘했어요 " : `${result}원 초과했어요!! 돈 관리 잘 해주세요ㅜㅜ`)


