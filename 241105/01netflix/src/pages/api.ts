const API_KEY = "49dfa6bd6893a6669e53a840b7274617";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface GetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

// &language=ko-kr
export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};
