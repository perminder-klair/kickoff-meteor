import React, { PropTypes } from 'react';

import LinkItem from '../components/LinkItem';

const LatestLinks = ({ links }) => (
    <div>
        <h1>Latest links</h1>
        {links.map((link) => <LinkItem key={link._id} link={link}/>)}
    </div>
);

LatestLinks.propTypes = {
    links: PropTypes.array.isRequired
};

export default LatestLinks;