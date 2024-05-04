import httpInstance from "../httpInstance"

export const getPopularMovies = async () => {
    let res: any;
    const endpoints = `popular?api_key=${import.meta.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance
        .get(endpoints)
        .then((response: any) => {
            res = response;
        }).catch((error: any) => {
            console.error(error);
            res = error.response;
        })

    return res;
}