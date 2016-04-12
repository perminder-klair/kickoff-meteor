import { Meteor } from 'meteor/meteor';
import { Tasks } from '../tasks.js';

Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
});
