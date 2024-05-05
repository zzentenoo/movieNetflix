import {usePopularMovies} from '../../hooks'
import { MovieCard } from "../../components/MovieCard";

const Popular = () => {
    const { popmovies, poploading, poperrorMovies } = usePopularMovies();

    return (
        <div className='block pl-5 pt-8 bg-page-bg min-h-screen' >
            {poploading && <div> Loading... </div>}
            {poperrorMovies && <div> Error... </div>}
            <div className='table max-w-[100%]'>
                {popmovies.map((movie) => (
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

export default Popular;