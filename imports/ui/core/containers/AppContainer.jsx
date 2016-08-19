import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import App from '../layouts/App.jsx';

export default createContainer(() => {
    return {
        user: Meteor.user(),
        connected: Meteor.status().connected
    };
}, App);