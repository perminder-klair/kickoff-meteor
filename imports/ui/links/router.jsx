import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../core/containers/AppContainer.jsx';
import LinksListContainer from './containers/LinksListContainer.jsx';
import LinksCreatePage from './pages/LinksCreatePage.jsx';
import LinksViewContainer from './containers/LinksViewContainer.jsx';
import LinksUpdateContainer from './containers/LinksUpdateContainer.jsx';

FlowRouter.route('/links', {
    name: 'Links.list',
    action() {
        mount(AppContainer, {
            main: <LinksListContainer/>
        });
    }
});

FlowRouter.route('/links/create', {
    name: 'Links.create',
    action() {
        mount(AppContainer, {
            main: <LinksCreatePage/>
        });
    }
});

FlowRouter.route('/link/update/:id/', {
    name: 'Links.update',
    action(params) {
        mount(AppContainer, {
            main: <LinksUpdateContainer id={params.id}/>
        });
    }
});

FlowRouter.route('/link/:id/', {
    name: 'Links.view',
    action(params) {
        mount(AppContainer, {
            main: <LinksViewContainer id={params.id}/>
        });
    }
});