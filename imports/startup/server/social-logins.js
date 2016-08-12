let facebook = Meteor.settings.facebook;

// Add Facebook configuration entry
ServiceConfiguration.configurations.update(
    { "service": "facebook" },
    {
        $set: {
            "appId": facebook.appId,
            "secret": facebook.secret
        }
    },
    { upsert: true }
);