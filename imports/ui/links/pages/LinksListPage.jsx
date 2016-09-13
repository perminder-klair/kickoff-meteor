import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { Tracker } from 'meteor/tracker'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Counts } from 'meteor/tmeasday:publish-counts';

import LinkItem from '../components/LinkItem';

class LinksListPage extends Component {
    pagination() {
        let pagesCount = this.props.totalItems / this.props.limit;
        var rows = [];
        for (let i=1; i < pagesCount+1; i++) {
            rows.push(<a key={i} className="item" href={FlowRouter.path('Links.list', {}, {page: i})}>{i}</a>);
        }
        return <ul className="ui tiny horizontal divided list">{rows}</ul>;
    }

    render() {
        let { links, totalItems, limit } = this.props;

        return (
            <div className="ui container">
                <h1 className="ui header">Links ({totalItems})</h1>
                <a className="ui small button" href={FlowRouter.path("Links.create")}>Create link</a>

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

                {links.length > limit ?
                    <span>
                        <div className="ui divider"></div>
                        {this.pagination()}
                    </span>
                :''}
            </div>
        )
    }
}

LinksListPage.propTypes = {
    links: PropTypes.array.isRequired,
    totalItems: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
};

export default LinksListPage;