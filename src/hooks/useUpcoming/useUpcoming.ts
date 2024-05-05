import { useState, useEffect } from 'react';
import { getUpcoming } from '../../services';

const useUpcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);
    const [upcomingLoading, setUpcomingLoading] = useState<boolean>(true);
    const [upcomingErrorMovies, setUpcomingErrorMovies] = useState<boolean>(false);

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            setUpcomingLoading(true);
            try {
                const res = await getUpcoming();
                if (res && res.data) {
                    console.log(res.data, "res");
                    setUpcomingMovies(res.data.results);
                }
            } catch (err) {
                console.error(err, "err");
                setUpcomingErrorMovies(true);
            }
            setUpcomingLoading(false);
        };

        fetchUpcomingMovies();
    }, []);

    return { upcomingMovies, upcomingLoading, upcomingErrorMovies };
};

export default useUpcoming;
