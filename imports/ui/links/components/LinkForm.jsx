import React, { Component, PropTypes } from 'react';

import ImageUploadGroup from '../../core/elements/ImageUploadGroup';

export default class LinkForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: !_.isUndefined(props.venue) ? props.venue.title : '',
            description: !_.isUndefined(props.venue) ? props.venue.description : '',
            featuredImage: !_.isUndefined(props.venue) ? props.venue.featuredImage : null
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleSubmit(this.state);
    }

    render() {
        return (
            <form>
                <label>title</label>
                <input
                    type="text"
                    ref="title"
                    value={this.state.title}
                    onChange={(e) => this.setState({title: e.target.value})}/>

                <label>description</label>
                <input
                    type="text"
                    ref="description"
                    value={this.state.description}
                    onChange={(e) => this.setState({description: e.target.value})}/>

                <ImageUploadGroup
                    label="featuredImage"
                    onChange={(e) => this.setState({featuredImage: e})}/>
                {!_.isNull(this.state.featuredImage) ? <img className="img-responsive" src={this.state.featuredImage}/>:''}


                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}

LinkForm.propTypes = {
    link: PropTypes.object,
    handleSubmit: PropTypes.func
};
