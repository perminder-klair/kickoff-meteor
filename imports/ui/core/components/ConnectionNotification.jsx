import React from 'react';

const ConnectionNotification = () => (
    <div className="ui container">
        <div className="ui icon message">
            <i className="notched circle loading icon"/>
            <div className="content">
                <div className="header">
                    Trying to connect
                </div>
                <p>There seems to be a connection issue</p>
            </div>
        </div>
    </div>
);

export default ConnectionNotification;