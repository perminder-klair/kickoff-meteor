import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import _ from 'underscore';

import SubscribeUser from '../components/SubscribeUser';
import Loading from '../../core/components/Loading.jsx';
import LinkItem from '../../links/components/LinkItem';
import ProfilePicture from '../components/ProfilePicture';

//to get database
import { Links } from '../../../api/links/links';

class ProfileViewPage extends Component {
    render() {
        if (_.isUndefined(this.props.user)) {
            return <Loading />
        } else {
            let {user, links} = this.props;

            return (
                <div className="ui container">
                    <ProfilePicture user={user} />
                    <h1 className="ui header">{user.emails[0].address}</h1>
                    <SubscribeUser user={user} />
                    <a className="ui button" href={FlowRouter.path('Profile.edit')}>edit</a>
                    <div className="ui divider"></div>
                    <h1 className="ui header">Links:</h1>
                    {links.count !== 0 ?
                        <div class="ui items">
                            {links.map(link => <LinkItem key={link._id} link={link}/>)}
                        </div>
                        :
                        <div className="ui message">
                            <p>No links found.</p>
                        </div>
                    }
                </div>
            )
        }
    }
}

ProfileViewPage.propTypes = {
    user: PropTypes.object,
    links: PropTypes.array.isRequired
};

export default createContainer((props) => {
    let userId = _.isUndefined(props.id) ? Meteor.userId() : props.id;

    //ask server to send user data
    Meteor.subscribe('users.single', userId);
    Meteor.subscribe('user.links', userId, 50);

    return {
        user: _.isUndefined(props.id) ? Meteor.user() : Meteor.users.findOne(props.id),
        links: Links.find({}, {sort: {createdAt: -1}}).fetch()
    };
}, ProfileViewPage);