import { MovieCard } from "../../components/MovieCard";
import {useUpcoming} from "../../hooks";

const UpComing = () => {
    const {upcomingMovies, upcomingErrorMovies, upcomingLoading} = useUpcoming();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen pt-8 pl-5 bg-page-bg'>
            {upcomingLoading && <div> Loading... </div>}
            {upcomingErrorMovies && <div> Error... </div>}
            <div className='w-full max-w-full'>
                {upcomingMovies.map((movie) => (
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

export default UpComing;