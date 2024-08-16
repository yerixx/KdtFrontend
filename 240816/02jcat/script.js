class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  //method함수
  run() {
    alert(`${this.name} is running`);
  }
}

const cheez = new Pet("치즈", "yellow");
// cheez.run();

class Cat extends Pet {
  constructor(name, breed, color) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    alert(`이름:${this.name}, 품종 : ${this.breed}, 색상 : ${this.color}`);
  }
}
//prototype
const bori = new Cat("보리", "코숏", "화이트");
bori.viewInfo();
