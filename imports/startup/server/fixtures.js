import { Meteor } from 'meteor/meteor';
import { Fake } from 'meteor/anti:fake';

import { Links } from '../../api/links/links.js';

let createProfile = function (user) {
    return {
        first_name: user.name,
        last_name: user.surname,
        location: Fake.fromArray(['Birmingham', 'London', 'Surrey']),
        about: Fake.sentence(20),
        //description: Fake.sentence(20),
        dob: new Date(),
        gender: Fake.fromArray(['male', 'female'])
    };
};

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
    if (Meteor.users.find().count() === 0) {
        let user = Fake.user();
        const data = [
            {
                //_id: userOneId,
                emails : [{"address" : "admin@admin.com", "verified" : true}],
                services : { "password" : { "bcrypt" : "$2a$10$CCzzYL/1ZRbhytUM3aiMeOCiGx9XXmRZ1kiUyfB0FvfPWbh2hLcmG" }}, //pinku1
                resume : { "loginTokens" : [{"when" : 'ISODate("2015-02-26T15:28:51.272Z")', "hashedToken" : "JUjmXp4Q4gUMIJ/cXZ+3uVhWzADHp5NKzRG9ONV7zd8=" }]},
                slug: 'admin',
                profile: createProfile(user),
                isActive: true,
                subscribers: [],
                subscribersCount: 0,
                subscribedTo: [],
                subscribedToCount: 0
            }
        ];

        data.forEach((user) => {
            Meteor.users.insert(user);
        });
    }

    if (Links.find().count() === 0) {
        const data = [
            {
                url: 'http://www.amazon.co.uk'
            }
        ];

        let timestamp = (new Date()).getTime();
        data.forEach((list) => {
            Links.insert({
                url: list.url,
                createdOn: timestamp,
                checked: true
            });
        });
    }
});