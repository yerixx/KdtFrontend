import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
`;
const Description = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 30px 0px;
  font-size: 20px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bg}) center/cover;
`;

const Loading = styled.div`
  font-size: 24px;
  width: 100%;
  text-align: center;
  margin-top: 50vh;
`;
const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      large_cover_image
      isLiked @client
    }
  }
`;
// isLiked @client => 캐시에서만 작동

const Movie = () => {
  // const params = useParams();
  const { id } = useParams();
  //GET_MOVIE가 받아야할 인자값을 , 두번째 인자값에 넣어야함
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  // console.log(result);

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragmeent on Movie {
          title
          rating
          isLiked
        }
      `,
      data: {
        //물어보기 **
        // title: "wow 당신의 좋아요 덕분에 ",
        // rating: !rating ? "10에 가까워 지고 있어요 " : `${rating}`,
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <Subtitle>{data.movie.rating}</Subtitle>
          <Button onClick={onClick}>
            {data.movie.isLiked ? "Unlike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            repellendus amet aspernatur eveniet eius sed placeat voluptates,
            illo officiis consectetur soluta quas sit quae atque aut aliquid
            modi optio iusto.
          </Description>
        </Column>
      </ItemGroup>
      <Image bg={data.movie.large_cover_image} />
    </Container>
  );
};

export default Movie;
