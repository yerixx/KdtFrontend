interface Developer {
  type: string;
  skill: string;
}
interface Student {
  type: string;
  school: string;
}
//서로소 유니온 타입
interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "TS",
  },
};
const studentUser: User<Student> = {
  name: "Yerim",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

const gotoschool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
};
console.log(gotoschool(studentUser));
