import {lazy} from "react";
import i18next from "i18next";
import Translation from "../../common/Translation";
import en from "./i18n/en";
import fa from "./i18n/fa";

const Login = lazy(() => import('./components/Login'));

i18next.addResourceBundle('en', Translation.Login, en);
i18next.addResourceBundle('fa', Translation.Login, fa);

const LoginConfig = {
    routes: [
        {
            path: '/login',
            element: <Login/>
        }
    ]
}

export default LoginConfig;