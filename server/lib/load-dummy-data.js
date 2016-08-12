function loadFixture(fixtures, collection) {
    collection.remove({});

    for (var i = 0; i < fixtures.length; i += 1) {
        //var model = new collection();
        //model.set(fixtures[i]);
        //model.save();
        collection.insert(fixtures[i]);
    }
}

Meteor.startup(function () {
    if (true) {
        //loadFixture(Fixtures['users'], Meteor.users);
    }
});