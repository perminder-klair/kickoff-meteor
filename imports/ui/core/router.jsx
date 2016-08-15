import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// route components
import App from './layouts/App';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';
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
    only: ['List.create', 'List.edit', 'Profile.view']
});

FlowRouter.triggers.enter([guestsOnly], {
    only: ['Login']
});

//global subscriptions by default meteor send user with 3 fields, but we asking for all fields
FlowRouter.subscriptions = function () {
    this.register('users.single', Meteor.subscribe('users.single', Meteor.userId()));
};

FlowRouter.notFound = {
    action: function () {
        mount(App, {
            main: <NotFoundContainer/>
        });
    }
};

/**
 * Global routes
 */
FlowRouter.route('/', {
    name: 'Dashboard',
    action() {
        mount(App, {
            content: <DashboardPage/>
        });
    }
});

FlowRouter.route('/login', {
    name: 'Login',
    action() {
        mount(App, {
            main: <LoginPage type="signIn"/>
        });
    }
});

FlowRouter.route('/signup', {
    name: 'Signup',
    action() {
        mount(App, {
            main: <LoginPage type="signUp"/>
        });
    }
});

FlowRouter.route('/contact', {
    name: 'Contact',
    action() {
        mount(App, {
            main: <ContactPage/>
        });
    }
});

FlowRouter.route('/search', {
    name: 'Search',
    action(params, queryParams) {
        mount(App, {
            main: <SearchPage query={queryParams.query}/>
        });
    }
});