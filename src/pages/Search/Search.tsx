import { useEffect, useState } from "react";
import { MovieSearch } from "../../components/MovieSearch/MovieSearch"
import { SearchWrapper } from "./styles"
import { getMoviesSearch } from "../../services/getMoviesSearch";
import { getTVShowsSearch, TVShowData } from "../../services/getTvShowSeach";

import { useSearchParams } from "react-router-dom";
import { IMovie } from "../../services/types/IMovie";


export const Search = () => {


  const [searchParams] = useSearchParams()

  const query: string | null = searchParams.get('q')
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [tvShows, setTvShows] = useState<TVShowData[]>([]);



  useEffect(() => {
    const fetchAndDisplayMovies = async () => {
      const movies = await getMoviesSearch(query);
      setMovies(movies);
    };

    const fetchAndDisplayTvShows = async () => {
      const tvShows = await getTVShowsSearch(query);
      setTvShows(tvShows);
    };
    fetchAndDisplayTvShows()
    fetchAndDisplayMovies();
  }, [query]);

  return (
    <SearchWrapper>
      <h3> Results for "{query}" in movies</h3>
      <div className="mainGrid">
        {movies.map((movie, index) => (
          <MovieSearch
            key={index}
            id={movie.id}
            backdrop_path={movie.backdrop_path || undefined}
            poster_path={movie.poster_path || undefined}
            title={movie.title}
            vote_average={movie.vote_average}
            typeOfMedia="movie"
          />
        ))}
      </div>

      <h3 style={{
        marginTop: '5%'
      }}> Results for "{query}" in Séries</h3>
      <div className="mainGrid">
        {tvShows.map((movie, index) => (
          <MovieSearch
            key={index}
            id={movie.id}
            backdrop_path={movie.backdrop_path || undefined}
            poster_path={movie.poster_path || undefined}
            title={movie.name}
            vote_average={movie.vote_average}
            typeOfMedia=""
          />
        ))}
      </div>
    </SearchWrapper>
  )
}
