import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ProfileEditPage from '../pages/ProfileEditPage.jsx';

export default createContainer(() => {
    return {
        user: Meteor.user()
    };
}, ProfileEditPage);