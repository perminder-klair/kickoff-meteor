import React, { Component, PropTypes } from 'react';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import AccountsUIWrapper from '../layouts/AccountsUIWrapper';

export default class LoginPage extends Component {
    /**
     * Loads as soon as this class loads
     */
    componentDidMount() {
        AccountsTemplates.setState(this.props.type);
    }
    /**
     * Loads as soon as this class is updated with new props
     */
    componentDidUpdate() {
        AccountsTemplates.setState(this.props.type);
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Login</h1>
                <AccountsUIWrapper />
            </div>
        )
    }
}

LoginPage.propTypes = {
    type: PropTypes.string.isRequired
};