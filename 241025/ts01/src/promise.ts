interface Post {
  id: number;
  title: string;
  content: string;
}
//다시 공부
const fetchPost = (): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "본문",
      });
    }, 3000);
  });
};

// const promise = new Promise<Post>((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       id: 1,
//       title: "제목",
//       content: "본문",
//     });
//   }, 3000);
// });

// promise.then((response) => {
//   console.log(response);
// });

// promise.catch((err) => {
//   if (typeof err === "string") console.error(err);
// });
