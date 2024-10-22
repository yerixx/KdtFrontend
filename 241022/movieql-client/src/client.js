//서버로부터 들어올 데이터를 받아서 처리해 줄 목적
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

//4000번에서 값을 찾아와~
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

// 값을 찾아오는 부분 (출력은 안됨)
client
  .query({
    // 찾아오려는 이름과 값 넣기 (찾기만 함)
    query: gql`
      {
        allMovies {
          title
          id
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;
