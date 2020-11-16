import React from 'react';
import ManageUsers from './ManageUsers/ManageUsers';
import AddUsers from './ManageUsers/AddUsers';
import UpdateUsers from './ManageUsers//UpdateUsers';
import ManageMovies from './ManageMovies/ManageMovies';
import AddMovie from './ManageMovies/AddMovie';
import UpdateMovie from './ManageMovies/UpdateMovie';
import ManageRevenue from './ManageRevenue/ManageRevenue';

const routeAdmin = [
    {
        path: '/admin-page/ManageUsers',
        exact : true,
        main: ({history}) => <ManageUsers history={history}/>
    },
    {
        path: '/admin-page/ManageUsers/addUsers',
        exact: false,
        main: ({history}) => <AddUsers history={history}/>
    },
    {
        path: '/admin-page/ManageUsers/updateUsers',
        exact: false,
        main: ({history}) => <UpdateUsers history={history}/>
    },
    {
        path: '/admin-page/ManageMovies',
        exact : true,
        main: ({history}) => <ManageMovies history={history}/>
    },
    {
        path: '/admin-page/ManageMovies/AddMovie',
        exact: false,
        main: ({history}) => <AddMovie history={history}/>
    },
    {
        path: '/admin-page/ManageMovies/UpdateMovie',
        exact: false,
        main: ({history}) => <UpdateMovie history={history}/>
    },
    {
        path: '/admin-page/ManageRevenue',
        exact: false,
        main: ({history}) => <ManageRevenue history={history}/>
    },

]

export default routeAdmin;