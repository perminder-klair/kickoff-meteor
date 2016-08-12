import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

//to get database
import {Venues} from '../../../api/venues/venues';

class LinksViewPage extends Component {
    deleteVenue() {
        Meteor.call('venues.delete', this.props.venue._id, (err) => {
            if (err) {
                console.log(err);
            } else {
                FlowRouter.go('Venues');
            }
        });
    }

    render() {
        //console.log(this.props.venue);
        //console.log(this.props.loading);
        let {venue} =  this.props;

        if (this.props.loading) {
            return (
                <div>loading...</div>
            )
        } else {
            let isOwner = this.props.user._id === venue.owner;
            return (
                <div >
                    <h1>Venue title: {venue.title}</h1>
                    <p>{venue.customName()}</p>
                    {isOwner ? <a className="btn btn-default" href={FlowRouter.path('Venues.edit', {id: venue._id})}>edit</a>:''}
                    {isOwner ? <a className="btn btn-default" onClick={this.deleteVenue.bind(this)}>delete</a>:''}
                </div>
            )
        }
    }
}

LinksViewPage.defaultProps = {
    user: {}
};

LinksViewPage.propTypes = {
    venue: PropTypes.object,
    loading: PropTypes.bool
};

export default VenuesViewContainer = createContainer((props) => {
    let handle = Meteor.subscribe('venues.single', props.id);
    return {
        loading: !handle.ready(),
        user: Meteor.user(),
        venue: Venues.findOne(props.id) //=== {_id: props.id}
    };
}, LinksViewPage);