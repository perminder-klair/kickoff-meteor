import React, { Component, PropTypes } from 'react';

import ImageUploadGroup from '../../core/elements/ImageUploadGroup';
import TextInputGroup from '../../core/elements/TextInputGroup';

export default class LinkForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: !_.isUndefined(props.link) ? props.link.text : '',
            url: !_.isUndefined(props.link) ? props.link.url : '',
            featuredImage: !_.isUndefined(props.link) ? props.link.featuredImage : null
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleSubmit(this.state);
    }

    render() {
        return (
            <form className="ui form">
                <TextInputGroup
                    label="Title"
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})} />
                <TextInputGroup
                    label="URL"
                    value={this.state.url}
                    onChange={(e) => this.setState({url: e.target.value})} />
                <ImageUploadGroup
                    label="Featured Image"
                    onChange={(e) => this.setState({featuredImage: e})}/>
                {!_.isNull(this.state.featuredImage) ? <img className="ui small image" src={this.state.featuredImage}/>:''}

                <button className="ui primary button" onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}

LinkForm.propTypes = {
    link: PropTypes.object,
    handleSubmit: PropTypes.func
};
