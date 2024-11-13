import { HashTable } from "./hashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1, "김준영");
hashTable.set(4, "박태환");
hashTable.set(20, "박제한");
hashTable.set(6, "김도경");
hashTable.set(22, "지성둔");
hashTable.set(21, "전진우");
hashTable.set(5, "백준혁");
hashTable.set(10, "염동훈");
hashTable.set(9, "변해오름");
hashTable.set(8, "박세진");
hashTable.set(14, "박리아");

console.log(`8:${hashTable.get(8)}`);
hashTable.remove(1);
console.log(`1:${hashTable.get(1)}`);
console.log(`20:${hashTable.get(20)}`);
console.log("매직마우스 개킹받네");
console.log("예림님 바부");
