import { Meteor } from 'meteor/meteor';
import _ from 'underscore';

let { mailgunUrl } = Meteor.settings;

Meteor.startup(() => {
    if (!_.isUndefined(mailgunUrl)) {
        process.env.MAIL_URL = mailgunUrl;
    }
});