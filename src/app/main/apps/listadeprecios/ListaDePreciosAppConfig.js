import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseLoadable} from '@fuse';

export const ListaDePreciosAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/listadeprecios/:id',
            component: FuseLoadable({
                loader: () => import('./ContactsApp')
            })
        },
        {
            path     : '/apps/listadeprecios',
            component: () => <Redirect to="/apps/listadeprecios/all"/>
        }
    ]
};
