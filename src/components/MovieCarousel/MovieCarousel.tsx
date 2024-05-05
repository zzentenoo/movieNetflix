import Slider from 'react-slick';
import {MovieCard} from "../MovieCard";




const MovieCarousel = ({ movies}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 4,
        arrows: false,
    };


    return (
        <Slider {...settings}>
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
        </Slider>
    );
};

export default MovieCarousel;
