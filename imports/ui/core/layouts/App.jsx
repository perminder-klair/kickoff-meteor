import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Header from '../components/Header.jsx';
import ConnectionNotification from '../components/ConnectionNotification.jsx';

class App extends Component {
    render() {
        const {
            user,
            connected
            } = this.props;

        return (
            <div>
                <Header user={user}/>
                <div className="main container">
                    {!connected
                        ? <ConnectionNotification/>
                        : null}
                    {this.props.main}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    user: React.PropTypes.object,      // current meteor user
    connected: React.PropTypes.bool   // server connection status
};

export default App;