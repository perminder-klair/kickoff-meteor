import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../core/containers/AppContainer.jsx';
import ProfileViewContainer from '../../ui/users/containers/ProfileViewContainer.jsx';
import ProfileEditContainer from '../../ui/users/containers/ProfileEditContainer.jsx';
import UsersListContainer from '../../ui/users/containers/UsersListContainer.jsx';

FlowRouter.route('/user/:id', {
    name: 'User.view',
    action(params) {
        mount(AppContainer, {
            main: <ProfileViewPage id={params.id}/>
        });
    }
});

FlowRouter.route('/profile', {
    name: 'Profile.view',
    action() {
        mount(AppContainer, {
            main: <ProfileViewContainer />
        });
    }
});

FlowRouter.route('/profile/edit', {
    name: 'Profile.edit',
    action() {
        mount(AppContainer, {
            main: <ProfileEditContainer />
        });
    }
});

FlowRouter.route('/users', {
    name: 'Users.list',
    action() {
        mount(AppContainer, {
            main: <UsersListContainer />
        });
    }
});