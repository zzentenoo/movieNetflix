import {useTopRated} from "../../hooks";
import { MovieCard } from "../../components/MovieCard";

const TopRated = () => {
   const { topMovies, topLoading, topErrorMovies } = useTopRated();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen pt-8 pl-5 bg-page-bg'>
            {topLoading && <div> Loading... </div>}
            {topErrorMovies && <div> Error... </div>}
            <div className='w-full max-w-full'>
                {topMovies.map((movie) => (
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
};

export default TopRated;