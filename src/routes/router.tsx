import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";
import PrivateRouter from "./PrivateRouter";
import { Home, Popular, Show, TopRated, Favorites, UpComing } from "../pages";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <PrivateRouter />,
        children: [
            { index: true, element: <Home />},
            { path: ROUTES.POPULAR, element: <Popular />},
            { path: ROUTES.TOPRATED, element: <TopRated />},
            { path: ROUTES.FAVORITES, element: <Favorites />},
            { path: ROUTES.UPCOMING, element: <UpComing />},
            { path: `${ROUTES.SHOW}:id`, element: <Show />}, // /show/:id
        ]
    }
]

export const router = createBrowserRouter(routes);