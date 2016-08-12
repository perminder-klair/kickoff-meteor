import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
    render() {
        return (
            <div>
                <Header user={this.props.user}/>
                {this.props.content}
            </div>
        );
    }
}

App.propTypes = {
    user: PropTypes.object
};

export default createContainer(() => {
    return {
        user: Meteor.user()
    };
}, App);