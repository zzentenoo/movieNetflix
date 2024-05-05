import {useLocation, useParams, useNavigate} from "react-router-dom";
import  {useEffect, useState} from "react";
import {IDetailsResponse, getDetailsMovie, IMovieResponse} from "../../services";
import {IMAGE_SOURCE} from "../../constants/movieMocks.ts";
import PropTypes, {number} from "prop-types";
import {useRecommendation} from "../../hooks";
import {MovieCarousel} from "../../components/MovieCarousel";



const Show = () => {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [movie, setMovie] = useState<IDetailsResponse>();
    const [loading, setLoading] = useState<boolean>(false);

    const [isFavorite, setFavorite] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<string>("");


    const checkFavoriteStatus = () => {
        const favs = localStorage.getItem("favorites");
        setFavorite(favs && favs.includes(id));
    };

    const removeFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        const filteredFavorites = favorites.filter(fav => fav !== id);
        localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
        setFavorite(false);
    };

    const addFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (!favorites.includes(id)) {
            localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
            setFavorite(true);
        }
    };




    const goBack = () => {
        navigate(-1);
    }

    const getDetails = async () => {
        const movieId = id ? parseInt(id) : undefined;
        if (movieId) {
            await getDetailsMovie(movieId)
                .then((res) => {
                    if (res && res.data) {
                        console.log(res.data, "res");
                        setMovie(res.data);
                    }
                })
                .catch((err) => {
                    console.log(err, "err");
                });
            setLoading(false);
        }
    };


    useEffect(() => {
        const favs = localStorage.getItem("favorites") || "";
        setFavorites(favs);
        if(favs.includes(id.toString())){  // Convert id to string correctly
            setFavorite(true);
        }
        setLoading(true);
        getDetails();
        checkFavoriteStatus();
    }, [id]);


    const { recmovies } = useRecommendation(id.toString());
    return (
        <div className="mx-44 shadow-2xl rounded-3xl bg-custom-secondary mt-10 text-amber-100 relative">
            {/* Favorite button on the top right */}
            {isFavorite ? (
                <button className="absolute top-4 right-4 px-4 py-2 bg-custom-accent text-white font-bold rounded-lg hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50" onClick={removeFavorite}>
                    Remove Favorite
                </button>
            ) : (
                <button className="absolute top-4 right-4 px-4 py-2 bg-custom-primary text-white font-bold rounded-lg hover:bg-custom-bg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50" onClick={addFavorite}>
                    Add Favorite
                </button>
            )}

            <div className="p-8">
                <div className="flex">
                    {/* Movie poster and Go Back button */}
                    <div className="relative min-w-[20%]">
                        <img className="rounded-3xl" src={IMAGE_SOURCE + movie?.poster_path} alt="poster" />
                        <button className="absolute top-0 px-4 py-1 bg-gray-800 text-white rounded hover:bg-gray-700" onClick={goBack}>Go Back</button>
                        <p className="absolute bottom-0 left-0 px-4 py-1 bg-opacity-75 bg-gray-900 text-white rounded">{movie?.release_date}</p>
                    </div>
                    <div className="flex-col px-10">
                        <p className="font-bold text-3xl pb-4">{movie?.title}</p>
                        <p>{movie?.overview}</p>
                    </div>
                </div>
            </div>
            <div className="font-bold font-anek text-center text-2xl mt-10">
                Recommendations based on: {movie?.title}
            </div>
            <MovieCarousel movies={recmovies} />
        </div>
    );
};

export default Show;