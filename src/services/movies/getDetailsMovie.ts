import httpInstance from "../httpInstance";

export const getDetailsMovie = async (movieId: number) => {
    // eslint-disable-next-line
    let res: any;

    const endpoint = `${movieId}?api_key=${import.meta.env.VITE_MDB_API_KEY}&language=en-US`

    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response;
        })
        .catch((err) => {
            res = err.response
        });
    return res;
}