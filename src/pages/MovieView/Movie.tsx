import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../../services/getMovieById';
import { MovieScreen } from './styles';
import { NoteCalc } from '../../components/NoteCalc/NoteCalc';
import { getMoviesRelacioned } from '../../services/getMoviesRelacioned';
import Carousel from '../../components/Carousel/Carousel';
import { IMovie } from '../../services/types/IMovie';


interface IuseParams {
  id: string | undefined;
  [key: string]: string | undefined;
}

export const Movie = () => {


  const { id } = useParams<IuseParams>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [moviesrelacioned, setMoviesrelacioned] = useState<IMovie[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  useEffect(() => {
    const fetchCategoryMovies = async () => {
      const movieService = await getMovieById(id);
      setMovie(movieService);
    };
    fetchCategoryMovies();

    const fetchRelacionedMovies = async () => {
      const movieRelacionedMovies = await getMoviesRelacioned(id);
      setMoviesrelacioned(movieRelacionedMovies);
    };
    fetchRelacionedMovies();
  }, [id]);

  return <MovieScreen
    style={{
      backgroundImage: `url(${`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}), url(${`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`})`
    }}

  >
    <div className="mainMovieWrapper">
      <div className="moviedetails">
        <h2 className="movietitle">{movie?.title}</h2>
        <p className="moviedetail" style={{ height: '120px' }}
        >{movie?.overview}</p>
        <p className="moviedetail">Release Date: {movie?.release_date}</p>
        <p className="moviedetail">Runtime: {movie?.runtime} minutes</p>
        <p className="moviedetail">Average Vote: {movie?.vote_average}</p>
        <NoteCalc noteAverage={movie?.vote_average} />
      </div>
    </div>
    <div className="caroselWrapper">
      <Carousel
        typeOfStyle={'min'}
        typeOfMedia='movie'
        data={moviesrelacioned} />
    </div>
    <div className="bottomblur"></div>
    <div className="leftblur"></div>
    <div className="overblur"></div>
  </MovieScreen>
}
