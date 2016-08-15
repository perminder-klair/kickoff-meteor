import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Header from '../components/Header.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Header user={this.props.user}/>
                <div className="main container">
                    {this.props.main}
                </div>
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