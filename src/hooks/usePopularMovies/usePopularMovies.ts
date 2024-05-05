import {useEffect, useState} from "react";
import {getPopularMovies} from "../../services";

const usePopularMovies = () => {
    const [popmovies, setMovies] = useState<any[]>([]);
    const [poploading, setLoading] = useState<boolean>(true);
    const [poperrorMovies, setErrorMovies] = useState<boolean>(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await getPopularMovies();
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
    }, []);

    return { popmovies, poploading, poperrorMovies };
};

export default usePopularMovies;