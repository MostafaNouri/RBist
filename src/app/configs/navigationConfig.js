import i18next from 'i18next';
import en from './navigation-i18n/en';
import fa from './navigation-i18n/fa';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('fa', 'navigation', fa);

const navigationConfig = [
    {
        id: 'login',
        title: 'Login',
        translate: 'loginOrRegister',
        type: 'item',
        icon: 'material-solid:login',
        url: 'login',
    },
    {
        id: 'about-us',
        title: 'Main',
        translate: 'aboutUs',
        type: 'item',
        icon: 'material-solid:people_alt',
        url: 'about-us',
    },
    {
        id: 'contact-us',
        title: 'Contact Us',
        translate: 'contactUs',
        type: 'item',
        icon: 'material-solid:contact_phone',
        url: 'contact-us',
    },
];

export default navigationConfig;
