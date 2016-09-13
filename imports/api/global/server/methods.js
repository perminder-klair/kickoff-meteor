import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { SSR } from 'meteor/meteorhacks:ssr';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

//https://docs.meteor.com/api/email.html
Meteor.methods({
    'contact.send'({ full_name, message, email }) {
        new SimpleSchema({
            full_name: { type: String, min: 4 },
            message: { type: String, min: 8 },
            email: { type: String, min: 4 }
        }).validate({ full_name, message, email });

        SSR.compileTemplate('htmlEmail', Assets.getText('emails/contact-html.html'));

        Email.send({
            to: Meteor.settings.adminEmail,
            from: Meteor.settings.adminEmail,
            subject: 'Contact form submission',
            html: SSR.render('htmlEmail', { full_name, message, email })
        });

    }
});