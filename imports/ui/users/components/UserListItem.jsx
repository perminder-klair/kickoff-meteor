import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class UserListItem extends Component {
    render() {
        let {user} = this.props;

        return (
            <div className="ui item">
                <div className="content">
                    <a
                        className="header"
                        href={FlowRouter.path("User.view", {id: user._id})}>{user._id}</a>
                </div>
            </div>
        )
    }
}


UserListItem.propTypes = {
    user: PropTypes.object.isRequired
};