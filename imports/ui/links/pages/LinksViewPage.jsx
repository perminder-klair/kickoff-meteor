import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Loading from '../../core/components/Loading.jsx';

//to get database
import { Links } from '../../../api/links/links';

class LinksViewPage extends Component {
    delete() {
        Meteor.call('links.remove', this.props.venue._id, (err) => {
            if (err) {
                console.log(err);
                alertify.error(err.reason);
            } else {
                FlowRouter.go('Links.list');
                alertify.success('Link deleted successfully!');
            }
        });
    }

    render() {
        let { link } =  this.props;

        if (this.props.loading) {
            return <Loading />
        } else {
            let isOwner = this.props.user._id === link.owner;

            return (
                <div className="ui container">
                    <h1 className="ui header">Venue: {link.text}</h1>
                    <p>{link.url}</p>
                    {isOwner ? <a className="ui primary button" href={FlowRouter.path('Links.update', {id: link._id})}>edit</a>:''}
                    {isOwner ? <a className="ui button" onClick={this.delete.bind(this)}>delete</a>:''}
                </div>
            )
        }
    }
}

LinksViewPage.defaultProps = {
    user: {}
};

LinksViewPage.propTypes = {
    link: PropTypes.object,
    loading: PropTypes.bool
};

export default createContainer((props) => {
    let handle = Meteor.subscribe('links.single', props.id);

    return {
        loading: !handle.ready(),
        user: Meteor.user(),
        link: Links.findOne(props.id)
    };
}, LinksViewPage);