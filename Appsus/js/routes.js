'use strict';
var cl = console.log;
cl('routes.js ran');

import HomePage from './general/pages/HomePage.js'
import MKHomePage from './MisterKeeper/pages/MKHomePage.js'
import PlacesHomePage from './Places/pages/PlacesHomePage.js'
import EmailssHomePage from './Emails/pages/EmailsHomePage.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },  
    {
        path: '/MisterKeeper',
        component: MKHomePage
    },
    {
        path: '/Places',
        component: PlacesHomePage
    },
    {
        path: '/Emails',
        component: EmailssHomePage
    },
];


export default routes;