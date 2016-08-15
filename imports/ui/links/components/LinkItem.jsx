import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import LinkImage from '../components/LinkImage';

export default class LinkItem extends Component {
    render() {
        let { link } = this.props;

        return (
            <div className="item">
                <LinkImage link={link}/>
                <div className="content">
                    <a href={FlowRouter.path('Links.view', {id: link._id})}>
                        {link.text} ({link.url})
                    </a>
                </div>
            </div>
        )
    }
}

LinkItem.propTypes = {
    link: PropTypes.object.isRequired
};