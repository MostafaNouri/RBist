import {lazy} from "react";
import i18next from "i18next";
import Translation from "../../common/Translation";
import en from "./i18n/en";
import fa from "./i18n/fa";

const AboutUs = lazy(() => import('./components/AboutUs'));

i18next.addResourceBundle('en', Translation.AboutUs, en);
i18next.addResourceBundle('fa', Translation.AboutUs, fa);

const AboutUsConfig = {
    routes: [
        {
            path: '/about-us',
            element: <AboutUs/>
        }
    ]
}

export default AboutUsConfig;