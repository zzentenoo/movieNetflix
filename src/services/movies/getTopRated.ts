import httpInstance from "../httpInstance";

export const getTopRated = async () => {
    let res: any;

    const endpoint = `top_rated?api_key=${import.meta.env.VITE_MDB_API_KEY}&language=en-US`;

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