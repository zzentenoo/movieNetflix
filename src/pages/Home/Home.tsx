import { MovieCard } from "../../components/MovieCard";
import {movies} from "../../constants/movieMocks.ts";
import React from "react";

const Home: React.FC = () => {
    console.log(import.meta.env.VITE_MDB_API_KEY)
  return (
      <div className='block pl-7'>
        <div className='table max-w-[100%]'>
          {movies.map((movie) => (
              <MovieCard
                  key={movie.id}
                  movieId={movie.id}
                  posterPath={movie.poster_path}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  genreId={movie.genre_ids[0]}
              />
          ))}
        </div>
      </div>
  );
}

export default Home