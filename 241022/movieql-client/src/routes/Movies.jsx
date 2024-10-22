import React from "react";
// Client 를 통해 찾아온 값을 ui에 출력해주는 useApolloClient
import { useApolloClient, gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;
const Loading = styled.div`
  font-size: 24px;
  width: 100%;
  text-align: center;
  margin-top: 50vh;
`;
const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 60vw;
  margin-top: -50px;
`;
const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-20px);
  }
`;
const PosterBg = styled.div`
  background: url(${(props) => props.background}) center/cover;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.3s;
  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
  }
`;

//찾아오는 부분
const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      large_cover_image
    }
  }
`;

const Movies = () => {
  // const [movies, setmovies] = useState([]);
  // const client = useApolloClient();
  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //         {
  //           allmovies {
  //             title
  //           }
  //         }
  //       `,
  //     })
  //     .then((results) => setmovies(results.data.allMovies));
  // }, [client]);
  // console.log(client);
  const { data, loading } = useQuery(ALL_MOVIES);
  console.log(data);
  //다시 이해해보기
  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  // console.log(results);
  return (
    <Container>
      <Header>
        <Title>Movies List</Title>
      </Header>
      <MoviesGrid>
        {data.allMovies.map((movie) => (
          <PosterContainer key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <PosterBg background={largemedium_cover_image} />
            </Link>
          </PosterContainer>
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default Movies;
