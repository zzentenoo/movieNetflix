import  {useEffect, useState} from "react";
import {getTopRated} from "../../services";
import { MovieCard } from "../../components/MovieCard";

const TopRated = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMovies, setErrorMovies] = useState<boolean>(false);

    const getPopular = async () => {
        await getTopRated()
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data, "res");
                    setMovies(res.data.results);
                }
            })
            .catch((err) => {
                console.log(err, "err");
            });
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getPopular();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen pt-8 pl-5 bg-page-bg'>
            {loading && <div> Loading... </div>}
            {errorMovies && <div> Error... </div>}
            <div className='w-full max-w-full'>
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
};

export default TopRated;