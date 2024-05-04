import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";
import PrivateRouter from "./PrivateRouter";
import { Home, Popular, Show } from "../pages";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <PrivateRouter />,
        children: [
            { index: true, element: <Home />},
            { path: ROUTES.POPULAR, element: <Popular />},
            //{ path: ROUTES.TOPRATED, element: <TopRated />},
            //{ path: ROUTES.UPCOMING, element: <Upcoming />},
            { path: `${ROUTES.SHOW}:id`, element: <Show />}, // /show/:id
        ]
    }
]

export const router = createBrowserRouter(routes);