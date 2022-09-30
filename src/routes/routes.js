import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import FAQ from '~/pages/FAQ';
import Music from '~/pages/Music';
import Price from '~/pages/Price';
import Updates from '~/pages/Updates';
import Main from '~/pages/Main';
import NotFound from '~/pages/NotFound';
import { PlayerLayout } from '~/layouts/';

export const publicRoutes = [
    {
        path: '/',
        component: Main,
        layout: PlayerLayout,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/faq',
        component: FAQ,
    },
    {
        path: '/music',
        component: Music,
    },
    {
        path: '/price',
        component: Price,
    },
    {
        path: '/updates',
        component: Updates,
    },
    {
        path: '*',
        component: NotFound,
        layout: null,
    },
];
