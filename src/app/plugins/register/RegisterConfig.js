import {lazy} from "react";
import i18next from "i18next";
import Translation from "../../common/Translation";
import en from "./i18n/en";
import fa from "./i18n/fa";

const Register = lazy(() => import('./components/Register'));

i18next.addResourceBundle('en', Translation.Register, en);
i18next.addResourceBundle('fa', Translation.Register, fa);

const RegisterConfig = {
    routes: [
        {
            path: '/register',
            element: <Register/>
        }
    ]
}

export default RegisterConfig;