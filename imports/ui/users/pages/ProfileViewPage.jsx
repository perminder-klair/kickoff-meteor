import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import _ from 'underscore';

import Loading from '../../core/components/Loading.jsx';
import LinkItem from '../../links/components/LinkItem';
import ProfilePicture from '../components/ProfilePicture';
import SubscribeUserBtn from '../components/SubscribeUserBtn';

//to get database
import { Links } from '../../../api/links/links';

class ProfileViewPage extends Component {
    render() {
        if (_.isUndefined(this.props.user)) {
            return <Loading />
        } else {
            let {user, links, isCurrentUser} = this.props;

            return (
                <div className="ui container">
                    <h1 className="ui header">{user.emails[0].address}</h1>
                    <ProfilePicture user={user} />
                    <SubscribeUserBtn user={user} />
                    {isCurrentUser?
                        <a className="ui button" href={FlowRouter.path('Profile.edit')}>edit</a>
                        :''}
                    <div className="ui divider"></div>
                    <h1 className="ui header">My links:</h1>
                    {links.length === 0 ?
                        <div className="ui message">
                            <div className="header">
                                No links found.
                            </div>
                        </div>
                        :
                        <div className="ui items">
                            {links.map(link => <LinkItem key={link._id} link={link}/>)}
                        </div>
                    }
                </div>
            )
        }
    }
}

ProfileViewPage.propTypes = {
    user: PropTypes.object,
    links: PropTypes.array.isRequired,
    isCurrentUser: PropTypes.bool.isRequired
};

export default createContainer((props) => {
    let userId = _.isUndefined(props.id) ? Meteor.userId() : props.id;

    //ask server to send user data
    Meteor.subscribe('users.single', userId);
    Meteor.subscribe('user.links', userId, 50);

    return {
        user: Meteor.users.findOne(userId),
        links: Links.find({}, {sort: {createdAt: -1}}).fetch(),
        isCurrentUser: _.isUndefined(props.id)
    };
}, ProfileViewPage);