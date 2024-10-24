class Student {
  // Field = 인스턴스 객체의 key 값을 담당
  // name: string;
  // age: number;
  // grade: number;
  // private name;
  // protected age;
  // public grade;

  // 생성자 함수 => field에 매칭될 값을 설정
  constructor(
    private name: string,
    protected age: number,
    public grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드 함수
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}`);
  }
}

const studentB = new Student("David", 20, 2);
console.log(studentB);

class StudentDeveloper extends Student {
  favoritSkill;

  constructor(name: string, age: number, grade: number, favoritSkill: string) {
    super(name, age, grade); // 부모 클래스의 생성자를 호출
    this.favoritSkill = favoritSkill;
  }

  func() {
    // this.name // private이라서 못 가져옴
    this.age;
  }

  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 합니다`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");
studentC.programming();

//접근제어자 3개
//public : 모든 범위에서 접근할 수 있도록 (기본 default)
//private: 클래스 내부에서만 접근 가능 // 상속받은 파생클래스 접근 불가
// protected : 클래스 내부 가능 && 상속받은 파생클래스 접근 가능
