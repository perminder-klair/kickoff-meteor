import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import AppContainer from './containers/AppContainer';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import SearchContainer from './containers/SearchContainer';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

let loggedInOnly = function (context, redirect) {
    if (_.isNull(Meteor.user())) {
        redirect('/login');
    }
};

let guestsOnly = function (context, redirect) {
    if (!_.isNull(Meteor.user())) {
        redirect('/');
    }
};

FlowRouter.triggers.enter([loggedInOnly], {
    only: ['Links.create', 'Links.update', 'Profile.view', 'Profile.edit']
});

FlowRouter.triggers.enter([guestsOnly], {
    only: ['Login', 'Signup']
});

//global subscriptions by default meteor send user with 3 fields, but we asking for all fields
FlowRouter.subscriptions = function () {
    this.register('users.single', Meteor.subscribe('users.single', Meteor.userId()));
};

FlowRouter.notFound = {
    action: function () {
        mount(AppContainer, {
            main: <NotFoundPage/>
        });
    }
};

/**
 * Global routes
 */
FlowRouter.route('/', {
    name: 'Dashboard',
    action() {
        mount(AppContainer, {
            main: <DashboardPage/>
        });
    }
});

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

FlowRouter.route('/contact', {
    name: 'Contact',
    action() {
        mount(AppContainer, {
            main: <ContactPage/>
        });
    }
});

FlowRouter.route('/search', {
    name: 'Search',
    action(params, queryParams) {
        mount(AppContainer, {
            main: <SearchContainer query={queryParams.query}/>
        });
    }
});