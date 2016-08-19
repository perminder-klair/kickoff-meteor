import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import LinkItem from '../../links/components/LinkItem';
import Loading from '../components/Loading';

export default class SearchPage extends Component {
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
