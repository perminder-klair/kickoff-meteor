import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import LinksUpdatePage from '../pages/LinksUpdatePage.jsx';

//to get database
import { Links } from '../../../api/links/links';

export default createContainer((props) => {
    let handle = Meteor.subscribe('venues.single', props.id);

    return {
        loading: !handle.ready(),
        user: Meteor.user(),
        link: Links.findOne(props.id)
    };
}, LinksUpdatePage);