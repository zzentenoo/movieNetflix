import httpInstance from "../httpInstance";

export const getUpcoming = async () => {
    let res: any;

    const endpoint = `upcoming?api_key=${import.meta.env.REACT_APP_MDB_API_KEY}&language=en-US`;

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