import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react';
import { alertify } from 'meteor/ovcharik:alertifyjs';

import ProfileForm from '../components/ProfileForm';

export default class ProfileEditPage extends Component {
    handleSubmit(doc) {
        Meteor.call('users.update', doc, (err) => {
            if (err) {
                console.log(err);
                alertify.error(err.reason);
            } else {
                alertify.success('Profile updated successfully!');
            }
        })
    }

    render() {
        let {user} = this.props;

        return (
            <div className="ui container">
                <h1 className="ui header">Edit profile</h1>
                {!_.isUndefined(user) ?
                    <ProfileForm
                    user={user}
                    handleSubmit={this.handleSubmit.bind(this)}/>:''}
            </div>
        )
    }
}

ProfileEditPage.propTypes = {
    user: PropTypes.object
};