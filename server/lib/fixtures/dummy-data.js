Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.users = [];

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

let user = Fake.user();
let userOneId = Random.id();
Fixtures.users.push({
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
});

for (let i = 0; i < 2; i++) {
    let user2 = Fake.user();
    let email = user2.email;
    Fixtures.users.push({
        emails : [{"address" : email, "verified" : true}],
        username: email,
        slug: Fake.word(),
        profile: createProfile(user2),
        isActive: true,
        subscribers: [],
        subscribersCount: 0,
        subscribedTo: [],
        subscribedToCount: 0
    });
}