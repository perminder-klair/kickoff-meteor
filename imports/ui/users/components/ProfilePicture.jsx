import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class ProfilePicture extends Component {
    render() {
        let {profile} = this.props.user;
        let picture = '/images/photo.jpg';

        if (!_.isUndefined(profile) && !_.isUndefined(profile.profilePicture) && !_.isNull(profile.profilePicture)) {
            picture = profile.profilePicture;
        }

        return (
            <img src={picture} className="img-responsive" style={{width: '120px'}} />
        )
    }
}

ProfilePicture.defaultProps = {
    user: {profile: {}}
};

ProfilePicture.propTypes = {
    user: PropTypes.object
};

export default createContainer(function () {
    return {
        user: !_.isNull(Meteor.user()) ? Meteor.user() : {profile: {}}
    };
}, ProfilePicture);