import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';
import { SSR } from 'meteor/meteorhacks:ssr';

//https://docs.meteor.com/api/email.html
Meteor.methods({
    'contact.send'(doc) {
        //check(title, String);
        //check(description, String);
        SSR.compileTemplate('htmlEmail', Assets.getText('emails/contact-html.html'));

        Email.send({
            to: Meteor.settings.adminEmail,
            from: Meteor.settings.adminEmail,
            subject: 'Contact form submission',
            html: SSR.render('htmlEmail', doc)
        });

    },
});