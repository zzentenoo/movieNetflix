import {movies} from "../../constants/movieMocks.ts";
import { ROUTES } from '../../routes/constants'
import React, { useState } from "react";

import {MovieCarousel} from "../../components/MovieCarousel";
import {usePopularMovies, useTopRated, useUpcoming} from "../../hooks";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
     //Que rollo!!!
    const {popmovies, poploading, poperrorMovies} = usePopularMovies()
    const { topMovies, topLoading, topErrorMovies } = useTopRated();
    const {upcomingMovies, upcomingErrorMovies, upcomingLoading} = useUpcoming();
    const [isFiltered, setIsFiltered] = useState(false);

    const filterMovies = (movies) => movies.filter(movie => movie.vote_average >= 7);

    return (
        <div className='block pl-5 pt-8  bg-page-bg min-h-screen text-custom-text font-bold font-anek text-2xl'>
            <button
                className="px-4 py-2 mb-5 font-bold text-white bg-custom-secondary rounded hover:bg-blue-600"
                onClick={() => setIsFiltered(!isFiltered)}
            >
                {isFiltered ? 'Show All Movies' : 'Filter Movies by Rating ≥ 7'}
            </button>
            <div  className="text-custom-text">
                Explore
                <MovieCarousel movies={isFiltered ? filterMovies(movies) : movies}/>
            </div>
            <div className="pt-10">
                <Link to={ROUTES.POPULAR} className="text-custom-text hover:text-custom-accent">
                    Popular...
                </Link>
                <MovieCarousel movies={isFiltered ? filterMovies(popmovies) : popmovies}/>
            </div>
            <div className="pt-10">
                <Link to={ROUTES.TOPRATED} className="text-custom-text hover:text-custom-accent">
                    Top Rated...
                </Link>
                <MovieCarousel movies={isFiltered ? filterMovies(topMovies) : topMovies}/>
            </div>
            <div className="pt-10">
                <Link to={ROUTES.UPCOMING} className="text-custom-text hover:text-custom-accent">
                    Up Coming...
                </Link>
                <MovieCarousel movies={isFiltered ? filterMovies(upcomingMovies) : upcomingMovies}/>
            </div>
        </div>
    );
}

export default Home