import { useEffect, useState } from "react";
import { IDetailsResponse, getDetailsMovie } from "../../services";
import { MovieCard } from "../../components/MovieCard";

const Favorites = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [shows, setShows] = useState<IDetailsResponse[]>([]);
    const favorites: string = localStorage.getItem("favorites") || "";

    const runGetFavorites = async () => {
        if (favorites.length) {
            const favoritesArray = JSON.parse(favorites);
            const newShows = await Promise.all(
                favoritesArray.map(async (favoriteId: number) => {
                    return getDetailsMovie(favoriteId)
                        .then((res) => {
                            if (res && res.data) {
                                return res.data;
                            }
                        }).catch((err) => {
                            console.log(err, "err");
                        });
                })
            );
            setShows(newShows);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        runGetFavorites();
    }, [])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-8 pl-5 bg-page-bg">
            {shows.length > 0 ? (
                <div className="w-full max-w-full">
                    <div className="font-bold font-anek text-center text-2xl mt-10" > Your favorite collection!</div>
                    {shows.map((movie: IDetailsResponse) => (
                        <MovieCard
                            key={movie.id}
                            movieId={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                            genreId={movie.genres[0].id}
                        />
                    ))}
                </div>
            ) : (

                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center text-custom-text font-anek font-semibold">Start watching movies and start adding them to favorites to start your
                        own collection
                    </div>
                </div>
            )}

        </div>
    );
}

export default Favorites;