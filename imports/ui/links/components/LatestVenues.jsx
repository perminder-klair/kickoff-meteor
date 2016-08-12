import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import VenueItem from '../components/VenueItem';

//to get database
import {Venues} from '../../../api/venues/venues';

class LatestVenues extends Component {
    render() {
        //console.log('venues', this.props.venues);
        let {venues} = this.props;

        return (
            <div>
                <h1>this is latet venues</h1>
                {venues.map((venue) => {
                    return (
                        <VenueItem key={venue._id} venue={venue}/>
                    );
                })}
            </div>
        )
    }
}

LatestVenues.propTypes = {
    venues: PropTypes.array.isRequired
};

export default createContainer(function (props) {
    let limit = !_.isUndefined(props.limit) ? props.limit : 5;

    //to request data from db via server, for security from publications
    Meteor.subscribe('venues', limit);

    return {
        venues: Venues.find({}, {sort: {createdAt: -1}, limit: limit}).fetch()//this is local query
    };
}, LatestVenues);