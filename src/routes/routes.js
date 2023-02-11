import Main from '~/pages/Main/Main';
import NotFound from '~/pages/NotFound';
import { PlayerLayout } from '~/layouts/';

export const publicRoutes = [
    {
        path: '/',
        component: Main,
        layout: PlayerLayout,
    },

    {
        path: '*',
        component: NotFound,
        layout: null,
    },
];
