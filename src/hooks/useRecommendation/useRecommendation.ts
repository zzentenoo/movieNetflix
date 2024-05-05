import {useEffect, useState} from "react";
import {getRecommendation} from "../../services";

const useRecommendation = (movieId: number) => {
    const [recmovies, setMovies] = useState<any[]>([]);
    const [recloading, setLoading] = useState<boolean>(true);
    const [recerrorMovies, setErrorMovies] = useState<boolean>(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await getRecommendation(movieId);
                if (res && res.data) {
                    console.log(res.data, "res");
                    setMovies(res.data.results);
                }
            } catch (err) {
                console.error(err, "err");
                setErrorMovies(true);
            }
            setLoading(false);
        };
        fetchMovies();
    }, [movieId]);

    return { recmovies, recloading, recerrorMovies };
};

export default useRecommendation;