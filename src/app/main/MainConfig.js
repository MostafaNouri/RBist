import {lazy} from "react";

const Main = lazy(() => import("./Main"));

const MainConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'main',
            element: <Main/>,
        },
    ],
}

export default MainConfig;