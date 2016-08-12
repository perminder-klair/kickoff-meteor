import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'

import ProfileForm from '../components/ProfileForm';

class ProfileEditPage extends Component {
    handleSubmit(doc) {
        Meteor.call('users.update', this.props.user._id, doc, (err) => {
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

export default ProfileEditContainer = createContainer(() => {
    return {
        user: Meteor.user()
    };
}, ProfileEditPage);