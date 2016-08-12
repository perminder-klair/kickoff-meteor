import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class SearchVenuesForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        //console.log(this.state.query);
        FlowRouter.setQueryParams({query: this.state.query});
        FlowRouter.setQueryParams({page: 1});
    }

    render() {
        return (
            <div>
                <form>
                    <label>type here</label>
                    <input
                        type="text"
                        ref="query"
                        value={this.state.query}
                        onChange={(e) => this.setState({query: e.target.value})}/>
                    <button onClick={this.handleSubmit.bind(this)}>search</button>
                </form>
            </div>
        )
    }
}