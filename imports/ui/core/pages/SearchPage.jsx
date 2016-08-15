import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import LinkItem from '../../links/components/LinkItem';
import Loading from '../components/Loading';

//to get database
import { Links } from '../../../api/links/links';

class SearchPage extends Component {
    render() {
        let { links, loading } = this.props;

        if (loading) {
            return <Loading/>;
        }

        return (
            <div className="ui container">
                <h1 className="ui header">Search result</h1>
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

SearchPage.propTypes = {
    links: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default createContainer(function (params) {
    let {query} = params;
    let limit = 100;

    //to request data from db via server
    let handle = Meteor.subscribe('links', limit, 0, query);

    return {
        loading: !handle.ready(),
        links: Links.find({}, {sort: {createdAt: -1}}).fetch()
    };
}, SearchPage);