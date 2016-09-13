import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { alertify } from 'meteor/ovcharik:alertifyjs';

import TextInputGroup from '../elements/TextInputGroup.jsx';
import TextAreaGroup from '../elements/TextAreaGroup.jsx';

class ContactPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            full_name: '',
            message: '',
            email: '',
            success: false
        };
    }

    sendMessage(e) {
        e.preventDefault();

        Meteor.call('contact.send', this.state, (err) => {
            if (err) {
                console.log(err);
                alertify.error(err.reason);
            } else {
                alertify.success('Thank you for contenting us, we will get in touch shortly!');
                this.setState({
                    full_name: '', //reset
                    message: '', //reset
                    email: '', //reset
                    success: true
                });
            }
        })
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Contact</h1>
                <div className="ui message">
                    <p>
                        Feel free to send a message to us!
                    </p>
                </div>
                {this.state.success ?
                    <div className="ui positive message">
                        <p>Email sent successfully!</p>
                    </div>
                    :''}
                <form className="ui form">
                    <TextInputGroup
                        label="Your name"
                        value={this.state.full_name}
                        onChange={(e) => this.setState({full_name: e.target.value})}/>
                    <TextInputGroup
                        label="Your email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}/>
                    <TextAreaGroup
                        label="Message"
                        value={this.state.message}
                        onChange={(e) => this.setState({message: e.target.value})}/>
                    <button
                        className="ui button"
                        type="submit"
                        onClick={this.sendMessage.bind(this)}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ContactPage;