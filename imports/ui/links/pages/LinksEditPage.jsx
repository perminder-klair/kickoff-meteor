//VenuesEditContainer
import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

//to get database
import {Venues} from '../../../api/venues/venues';

import VenueForm from '../components/VenueForm';

class LinksEditPage extends Component {
    handleSubmit(doc) {
        //console.log(doc); return;
        Meteor.call('venues.update', this.props.venue._id, doc, (err) => {
            if (!err) {
                //redirect back to venues page
                FlowRouter.go('Venues.view', {id: this.props.venue._id});
            } else {
                //throw error
                console.log(err);
            }
        });
    }

    render() {
        if (this.props.loading) {
            return (
                <div>loading...</div>
            )
        } else {
            return (
                <div>
                    <h1>Edit venue</h1>
                    <VenueForm
                        venue={this.props.venue}
                        handleSubmit={this.handleSubmit.bind(this)}/>
                </div>
            )
        }
    }
}

LinksEditPage.defaultProps = {
    user: {}
};

LinksEditPage.propTypes = {
    venue: PropTypes.object,
    loading: PropTypes.bool
};

export default VenuesEditContainer = createContainer((props) => {
    let handle = Meteor.subscribe('venues.single', props.id);
    return {
        loading: !handle.ready(),
        user: Meteor.user(),
        venue: Venues.findOne(props.id) //=== {_id: props.id}
    };
}, LinksEditPage);