import { ApolloServer, gql } from "apollo-server";

//사용자가 포스팅한 실제 정보값
let tweets = [
  {
    id: "1",
    text: "First One",
    userId: "2",
  },
  {
    id: "2",
    text: "Second One",
    userId: "1",
  },
];

//사용자 값
let users = [
  {
    id: "1",
    firstName: "David",
    lastName: "Peater",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

// ID:내장타입(*미리 정의가 되어있는 타입) = scala 타입
// type Query 에서는 데이터를 찾아올 때만 [] 사용
//해당 데이터의 연결고리에서는 [] 사용하지 않음 . 쓸때가 있긴 함 나중에 알려주심
// !  === 무조건 필요한 값이라는 뜻

//typeDefs  => 구조
const typeDefs = gql`
  type User {
    id: ID!
    """
    Is the sum of firstName + lastName as a String
    """
    userName: String!
    firstName: String!
    lastName: String!
  }
  """
  Tweet Object represents a resource for a tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allTweets: [Tweet!]!
    allUsers: [User!]! # 여기서 Users를 User로 수정
    allMovies: [Movie!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean!
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String
    title_english: String
    title_long: String
    slug: String!
    year: Int!
    rating: Float!
    runtime: Int!
    genres: [String!]!
    summary: String
    description_full: String
    synopsis: String
    yt_trailer_code: String
    language: String!
    background_image: String
    background_image_original: String
    small_cover_image: String
    medium_cover_image: String
    large_cover_image: String
  }
`;

// 설계한 구조에서 반환값이 필요한 함수 실행문 정의 resolvers
const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    allUsers() {
      console.log("userName called");
      return users;
    },
    // => id, 인자를 가져오기 때문에 root가 필요함
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allMovies() {
      return (
        fetch("https://yts.mx/api/v2/list_movies.json")
          .then((response) => response.json())
          // .then((json) => console.log(json));
          // air에서 볼 수 있게
          .then((json) => json.data.movies)
      );
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => json.data.movie);
    },
  },
  // 뮤테이션, 클라이언트가 값을 추가하는,
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      console.log(tweets);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  // User: {
  //   // 이 시점에서 default값을 받는 느낌으로,
  //   // userName() {
  //   //   // userName이 없으니까 여기를 실행시킬게
  //   //   console.log("userName called second");
  //   //   console.log(root);
  //   //   return "Hello";
  //   // },
  //   userName({ firstName, lastName }) {
  //     // userName이 없으니까 여기를 실행시킬게
  //     // console.log("userName called second");
  //     // console.log(root);
  //     return `${firstName} ${lastName}`;
  //   },
  // },
  User: {
    // 함수
    firstName({ firstName }) {
      return firstName;
    },
    lastName({ lastName }) {
      return lastName;
    },
    userName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  //트윗의 연결고리 부분
  //왓?! 이해안됨
  Tweet: {
    // 함수
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("해당 자료가 없습니다.");
        return null;
      }
      return result;
      // return users.find((user) => user.id === userId);
    },
  },
};
// CJS 방식 <=> ESM과는 다름
// const { ApolloServer } = require("apollo-server");
// APOLL는 항상 타입에 대한 정의가 필요하다.
// 서버는 항상 들을 준비가 되어있다. 클라이언트의 요청을 들을 준비.
//resolvers 연결
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
