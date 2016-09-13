import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../core/containers/AppContainer.jsx';
import ProfileViewContainer from '../../ui/users/containers/ProfileViewContainer.jsx';
import ProfileEditContainer from '../../ui/users/containers/ProfileEditContainer.jsx';
import UsersListContainer from '../../ui/users/containers/UsersListContainer.jsx';
import LoginPage from './pages/LoginPage';

FlowRouter.route('/login', {
    name: 'Login',
    action() {
        mount(AppContainer, {
            main: <LoginPage type="signIn"/>
        });
    }
});

FlowRouter.route('/sign-up', {
    name: 'Signup',
    action() {
        mount(AppContainer, {
            main: <LoginPage type="signUp"/>
        });
    }
});

FlowRouter.route('/user/:id', {
    name: 'User.view',
    action(params) {
        mount(AppContainer, {
            main: <ProfileViewContainer id={params.id}/>
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