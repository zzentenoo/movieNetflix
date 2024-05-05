import { useState, useEffect } from 'react';
import {getTopRated} from "../../services";

const useTopRated = () => {
    const [topMovies, setTopMovies] = useState<any[]>([]);
    const [topLoading, setTopLoading] = useState<boolean>(true);
    const [topErrorMovies, setTopErrorMovies] = useState<boolean>(false);

    useEffect(() => {
        const fetchTopRated = async () => {
            setTopLoading(true);
            try {
                const res = await getTopRated();
                if (res && res.data) {
                    console.log(res.data, "res");
                    setTopMovies(res.data.results);
                }
            } catch (err) {
                console.error(err, "err");
                setTopErrorMovies(true);
            }
            setTopLoading(false);
        };

        fetchTopRated();
    }, []);

    return { topMovies, topLoading, topErrorMovies };
};

export default useTopRated;
