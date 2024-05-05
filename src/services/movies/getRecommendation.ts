import httpInstance from "../httpInstance"

export const getRecommendation = async (movieId: number) => {
    let res: any;
    const endpoints = `${movieId}/recommendations?api_key=${import.meta.env.VITE_MDB_API_KEY}&language=en-US`;
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