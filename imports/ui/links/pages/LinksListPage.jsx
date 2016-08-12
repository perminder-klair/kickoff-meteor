import React, { Component, PropTypes } from 'react';
import { Tracker } from 'meteor/tracker'
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Meteor } from 'meteor/meteor';

import VenueItem from '../components/VenueItem';
import SearchVenuesForm from '../components/SearchVenuesForm';

//to get database
import {Venues} from '../../../api/venues/venues';

class LinksListPage extends Component {
    goToPage() {

    }

    pagination() {
        let pagesCount = this.props.totalItems / this.props.limit;
        var rows = [];
        for (var i=1; i < pagesCount+1; i++) {
            rows.push(<li key={i}><a href={FlowRouter.path('Venues', {}, {page: i})}>{i}</a></li>);
        }
        return <ul className="pagination">{rows}</ul>;
    }

    render() {
        //let venues = this.props.venues;
        let {venues} = this.props;

        return (
            <div>
                <h1>this is venues container</h1>
                <p><a href={FlowRouter.path("Venues.create")}>Create venue</a></p>

                <SearchVenuesForm />

                <h3>Venues list</h3>
                {venues.map((venue) => {
                    return (
                        <VenueItem key={venue._id} venue={venue}/>
                    );
                })}

                <h6>Pagination</h6>
                {this.pagination()}
            </div>
        )
    }
}

LinksListPage.propTypes = {
    venues: PropTypes.array.isRequired,
    totalItems: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
};

export default createContainer(function () {
    let limit = 2;
    let totalItems = 0;
    Tracker.autorun(function () {
        let query = FlowRouter.getQueryParam('query');
        let page = FlowRouter.getQueryParam('page');
        let skip = (page-1) * limit;

        //get total count of items from server
        totalItems = Counts.get('total.links');

        //to request data from db via server, for security from publications
        Meteor.subscribe('links', limit, skip, query);
    });

    return {
        venues: Venues.find({}, {sort: {createdAt: -1}}).fetch(),//this is local query
        totalItems,
        limit
    };
}, LinksListPage);