import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import _ from 'underscore';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: !_.isUndefined(FlowRouter.getQueryParam('query')) ? FlowRouter.getQueryParam('query') : ''
        };
    }


    handleSubmit(event) {
        event.preventDefault();

        FlowRouter.go('Search', {}, {query: this.state.query});
    }

    render() {
        return (
            <div className="ui icon input">
                <input
                    type="text"
                    ref="query"
                    placeholder="Search..."
                    value={this.state.query}
                    onChange={(e) => this.setState({query: e.target.value})}/>
                <button onClick={this.handleSubmit.bind(this)}><i className="search link icon"/></button>

            </div>
        )
    }
}