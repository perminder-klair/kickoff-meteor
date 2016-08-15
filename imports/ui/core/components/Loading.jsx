import React, { Component, PropTypes } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <p>loading...</p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            </div>
        )
    }
}