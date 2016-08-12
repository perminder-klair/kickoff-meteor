import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import _ from 'underscore';

import SearchForm from './SearchForm';

export default class Header extends Component {
    logout() {
        AccountsTemplates.logout();
    }

    render() {
        let {user} = this.props;

        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="#" className="header item">
                        Meteor Starter
                    </a>
                    <a href={FlowRouter.path("Dashboard")} className="item">Home</a>
                    <a href={FlowRouter.path("Links.list")} className="item">Links</a>
                    {_.isNull(user) ?
                        <a href={FlowRouter.path("Login")} className="item">Login</a>
                        :
                        <a href={FlowRouter.path("Profile.view")} className="item">Profile</a>
                    }
                    {_.isNull(user) ?
                        <a href={FlowRouter.path("Signup")} className="item">Signup</a>
                        :
                        <a href={FlowRouter.path("Profile.view")} className="item">Profile</a>
                    }
                    <a onClick={this.logout.bind(this)} className="item">Logout</a>
                    <div className="right menu">
                        <div className="item">
                            <SearchForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Header.defaultProps = {
    user: null
};

Header.propTypes = {
    user: PropTypes.object
};