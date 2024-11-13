import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";

import styled from "styled-components";

import {
  GetMoviesResult,
  searchContents,
  searchGeneres,
  getReviews,
  getVideos,
  GenresResult,
  Movie,
} from "./api";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";

const Container = styled.main`
  width: 100%;
  margin-top: 60px;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;

const MovieSection = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const MovieImg = styled.img`
  width: 50%;
  flex: 1;
`;
const ImgBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black.lighter};
  border-radius: 8px;
`;

const MovieInfo = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 14px;
`;

const MovieTitle = styled.h4`
  font-size: 36px;
  color: ${({ theme }) => theme.white.darker};
  background: ${({ theme }) => theme.red};
  border-radius: 8px;
  padding: 0 10px;
`;

const MovieOverView = styled.p`
  font-size: 24px;
  line-height: 1.6;
  border-top: 1px solid ${({ theme }) => theme.black.lighter};
  border-bottom: 1px solid ${({ theme }) => theme.black.lighter};
  padding: 20px 0;
`;

const MovieDate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const MovieValue = styled.div`
  font-size: 18px;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.black.lighter};
  color: ${({ theme }) => theme.white.darker};
  text-align: center;
  line-height: 50px;
`;
const Generes = styled.div`
  background: #ffa300;
  padding: 10px;
  border-radius: 8px;
`;

const MovieRate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;
const RateNumbers = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;
const ReviewSection = styled.div`
  background: ${({ theme }) => theme.white.darker};
  color: ${({ theme }) => theme.black.lighter};
  padding: 20px;
  border-radius: 8px;
  li {
    padding: 10px;
  }
`;
const ReviewAuthor = styled.div`
  background: ${({ theme }) => theme.white.lighter};
  width: 150px;
  text-align: center;
  padding: 8px 0;
  border-radius: 8px;
`;
const ReviewContent = styled.div`
  font-size: 14px;
`;
const VideoSection = styled.div`
  margin-top: 30px;
`;

const StyledPagenation = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  /* background: crimson; */
  ul {
    display: flex;
    gap: 14px;
    li a {
      display: inline-block;
      color: ${({ theme }) => theme.black.darker};
      transition: all 0.3s;
      font-size: 20px;
      &:hover {
        color: ${({ theme }) => theme.red};
      }
    }
  }
`;

interface GeneresItem {
  id: number;
  name: string;
}

interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface videoContent<T> {
  [key: number]: T[];
}
const Search = () => {
  const [videos, setVideos] = useState<videoContent<string>>({});
  const { search } = useLocation();
  // const key = search.split("=")[1];

  const keyword = new URLSearchParams(search).get("keyword");
  // console.log(keyword);
  const contents = searchContents(keyword);
  // console.log(contents);

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genereData, isLoading: genereLoading } = useQuery<GenresResult>(
    {
      queryKey: ["getGeneres"],
      queryFn: () => searchGeneres(),
    }
  );

  const ids = movieData?.results.map((movie) => movie.id);

  // console.log(genereData);

  //영화를 가져오고 리뷰를 가져와야 하는데 리뷰를 먼저 가져오면 오류남
  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
  });

  // console.log(reviewData);

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
  });

  // console.log(videoData);

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  //최초의 페이지 스테이트로 정의
  const [currentPage, setCurrentPage] = useState(1);
  //처음에 보여질 페이지당 수
  const [moviesPerPage, setMoviesPerPage] = useState(2);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies: Movie[] =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  //사용자가 누른 값을 인자로 받음 = pageNumber
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      {movieLoading || genereLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentMovies?.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg
                    src={makeImagePath(movie.backdrop_path)}
                    alt="movieImg"
                  />
                ) : (
                  <ImgBox>Ready for Images...</ImgBox>
                )}

                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average?.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count?.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <Generes>
                    {movie.genre_ids
                      ?.map(
                        (id) =>
                          genereData?.genres?.find(
                            (genre: GeneresItem) => genre.id === id
                          )?.name
                      )
                      ?.join(",")}
                  </Generes>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>Movie Reviews</h3>
                {reviewLoading ? (
                  <div>Review Loading...</div>
                ) : (
                  <ul>
                    {reviewData && reviewData[index]?.results?.length > 0 ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <ReviewAuthor>{review.author}</ReviewAuthor>
                            <ReviewContent> {review.content}</ReviewContent>
                          </li>
                        )
                      )
                    ) : (
                      <li>No Reviews...</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <VideoSection>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{ width: "100%", height: "800px" }}
                  />
                ) : (
                  <div>No Available...</div>
                )}
              </VideoSection>
            </SearchBox>
          ))}
          <StyledPagenation>
            <Pagination
              onChange={handlePageChange}
              //시작할 페이지
              activePage={currentPage}
              //페이지당 몇개 아이템
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              // Pagination 개수
              pageRangeDisplayed={5}
            />
          </StyledPagenation>
        </>
      )}
    </Container>
  );
};

export default Search;
