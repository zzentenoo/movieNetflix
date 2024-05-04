import {useLocation, useParams, useNavigate} from "react-router-dom";
import  {useEffect, useState} from "react";
import {IDetailsResponse, getDetailsMovie, IMovieResponse} from "../../services";
import {IMAGE_SOURCE} from "../../constants/movieMocks.ts";
import PropTypes from "prop-types";



const Show = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [movie, setMovie] = useState<IDetailsResponse>();
    const [loading, setLoading] = useState<boolean>(false);

    const [isFavorite, setFavorite] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<string>("");


    Show.propTypes = {
        id: PropTypes.string // Assuming id is a string; adjust as necessary.
    };


    const removeFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
        let newFavs = [...favs];
        newFavs = newFavs.filter((e) => e !== id);
        setFavorites(JSON.stringify(newFavs));
        setFavorite(false);
        localStorage.setItem("favorites", JSON.stringify(newFavs));
    }

    const addFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
        let newFavs = [...favs,id];
        setFavorites(JSON.stringify(newFavs));
        setFavorite(true);
        localStorage.setItem("favorites", JSON.stringify(newFavs));
    }




    const goBack = () => {
        navigate(-1);
    }

    const getDetails = async () => {
        const movieId = id ? parseInt(id) : undefined;
        if (movieId) {
            await getDetailsMovie(movieId)  // Corrected from getDetailsMovies to getDetailsMovie
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
    }, [id]);
    return (
        <div className=" mx-44 shadow-2xl rounded-3xl bg-blue-200 ">
            <div className="p-8">
                <div>Show id: { id }</div>
                <div className="flex">
                    <div className=" min-w-[20%] min-h-[20%]">
                        <img className="rounded-3xl" src={IMAGE_SOURCE + movie?.poster_path} alt="poster"></img>
                    </div>
                    <div className="flex-col px-10">
                        <p className="font-bold text-3xl pb-4">{movie?.title}</p>
                        <p>{movie?.overview}</p>
                        <p>{movie?.release_date}</p>
                    </div>
                </div>
                <button onClick={goBack}> Ir atras </button>
                {isFavorite ? (
                        <div>
                            <button className="p4 bg-blue-500" onClick={removeFavorite}>
                                Remove Favorite
                            </button>
                        </div>
                    ):
                    (
                        <div>
                            <button className="p4 bg-red-500" onClick={addFavorite}>
                                Add favorite
                            </button>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Show;