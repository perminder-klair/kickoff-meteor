import React, { Component, PropTypes } from 'react';

import LinkItem from '../components/LinkItem';

class LatestLinks extends Component {
    render() {
        let { links } = this.props;

        return (
            <div>
                <h1>Latest links</h1>
                {links.map((link) => <LinkItem key={link._id} link={link}/>)}
            </div>
        )
    }
}

LatestLinks.propTypes = {
    links: PropTypes.array.isRequired
};