const students = [1998, 2000, 2002];

const theBook = {
  title: "Javascript",
  pages: 250,
  published: "2024-07-31",
};

for (let key in theBook) {
  console.log(`${key} : ${theBook[key]}`);
}
