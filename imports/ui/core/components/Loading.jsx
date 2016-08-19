import React from 'react';

const Loading = () => (
    <div className="ui container">
        <div className="ui segment">
            <p>loading...</p>
            <div className="ui active dimmer">
                <div className="ui loader"></div>
            </div>
        </div>
    </div>
);

export default Loading;