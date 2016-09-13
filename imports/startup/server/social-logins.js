import _ from 'underscore';
import { ServiceConfiguration } from 'meteor/service-configuration';

let { facebook } = Meteor.settings;

// Add Facebook configuration entry
Meteor.startup(function() {
    if (!_.isUndefined(facebook)) {
        ServiceConfiguration.configurations.update(
            {"service": "facebook"},
            {
                $set: {
                    "appId": facebook.appId,
                    "secret": facebook.secret
                }
            },
            {upsert: true}
        );
    }
});