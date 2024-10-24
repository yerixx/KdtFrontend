interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move: () => void;
}

class Charactor implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}
  move() {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
