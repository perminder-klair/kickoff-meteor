import React, { Component, PropTypes } from 'react';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import AccountsUIWrapper from '../../core/layouts/AccountsUIWrapper';

class LoginPage extends Component {
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
                <AccountsUIWrapper />
            </div>
        )
    }
}

LoginPage.propTypes = {
    type: PropTypes.string.isRequired
};

export default LoginPage;