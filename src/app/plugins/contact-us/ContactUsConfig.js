import {lazy} from "react";
import i18next from "i18next";
import Translation from "../../common/Translation";
import en from "./i18n/en";
import fa from "./i18n/fa";

const ContactUs = lazy(() => import('./components/ContactUs'));

i18next.addResourceBundle('en', Translation.ContactUs, en);
i18next.addResourceBundle('fa', Translation.ContactUs, fa);

const ContactUsConfig = {
    routes: [
        {
            path: '/contact-us',
            element: <ContactUs/>
        }
    ]
}

export default ContactUsConfig;