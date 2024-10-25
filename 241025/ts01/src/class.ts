class List<T> {
  constructor(public list: T[]) {}
  pushA(data: T) {
    this.list.push(data);
  }
  popA() {
    return this.list.pop();
  }
  printA() {
    console.log(this.list);
  }
}

const numberList = new List([1, 4, 5]);
console.log(numberList);
