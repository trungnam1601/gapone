import config from '../config';

import Home from '../pages/Home';
import ListPrice from '../pages/ListPrice';
import Register from '../pages/Register';
import Promotion from '../pages/Promotion';
import Blog from '../pages/Blog';
import Help from '../pages/Help';
import Login from '../pages/Login';
import GrowthZalo from '../pages/GrowthZalo';
import GrowthWebsite from '../pages/GrowthWebsite';
import Search from '../pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.listprice, component: ListPrice },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.promotion, component: Promotion },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.help, component: Help },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.growthzalo, component: GrowthZalo },
    { path: config.routes.growthwebsite, component: GrowthWebsite },
    { path: config.routes.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
