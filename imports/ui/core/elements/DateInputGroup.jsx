import React, { Component, PropTypes } from 'react';

export default class DateInputGroup extends Component {
    render() {
        return (
            <div className="field">
                <label>{this.props.label}</label>
                <input
                    type="date"
                    placeholder={this.props.label}
                    value={this.props.value}
                    onChange={this.props.onChange}/>
            </div>
        )
    }
}

DateInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
