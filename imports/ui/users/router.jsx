import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../core/layouts/App.jsx';
import ProfileViewPage from '../../ui/users/pages/ProfileViewPage.jsx';
import ProfileEditPage from '../../ui/users/pages/ProfileEditPage.jsx';
import UsersListPage from '../../ui/users/pages/UsersListPage.jsx';

FlowRouter.route('/user/:id', {
    name: 'User.view',
    action(params) {
        mount(App, {
            main: <ProfileViewPage id={params.id}/>
        });
    }
});

FlowRouter.route('/profile', {
    name: 'Profile.view',
    action() {
        mount(App, {
            main: <ProfileViewPage />
        });
    }
});


FlowRouter.route('/profile/edit', {
    name: 'Profile.edit',
    action() {
        mount(App, {
            main: <ProfileEditPage />
        });
    }
});


FlowRouter.route('/users', {
    name: 'Users.list',
    action() {
        mount(App, {
            main: <UsersListPage />
        });
    }
});
