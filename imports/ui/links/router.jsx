import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../core/layouts/App.jsx';
import LinksListPage from './pages/LinksListPage.jsx';
import LinksCreatePage from './pages/LinksCreatePage.jsx';
import LinksViewPage from './pages/LinksViewPage.jsx';
import LinksEditPage from './pages/LinksEditPage.jsx';

FlowRouter.route('/links', {
    name: 'Links.list',
    action() {
        mount(App, {
            main: <LinksList/>
        });
    }
});

FlowRouter.route('/links/create', {
    name: 'Links.create',
    action() {
        mount(App, {
            main: <LinksCreate/>
        });
    }
});

FlowRouter.route('/link/:id/', {
    name: 'Links.view',
    action(params) {
        mount(App, {
            main: <LinksView id={params.id}/>
        });
    }
});

FlowRouter.route('/link/edit/:id/', {
    name: 'Links.edit',
    action(params) {
        mount(App, {
            main: <LinksEdit id={params.id}/>
        });
    }
});