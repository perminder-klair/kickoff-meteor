import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { SSR } from 'meteor/meteorhacks:ssr';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

//https://docs.meteor.com/api/email.html
Meteor.methods({
    'contact.send'(doc) {
        new SimpleSchema({
            doc: { type: Object }
        }).validate({ doc });

        SSR.compileTemplate('htmlEmail', Assets.getText('emails/contact-html.html'));

        Email.send({
            to: Meteor.settings.adminEmail,
            from: Meteor.settings.adminEmail,
            subject: 'Contact form submission',
            html: SSR.render('htmlEmail', doc)
        });

    }
});