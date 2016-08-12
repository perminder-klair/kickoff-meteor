import React, { Component, PropTypes } from 'react';

export default class TextAreaGroup extends Component {
    render() {
        return (
            <div className="field">
                <label>{this.props.label}</label>
                <textarea
                    type="text"
                    placeholder={this.props.label}
                    value={this.props.value}
                    onChange={this.props.onChange}/>
            </div>
        );
    }
}

TextAreaGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
