import React, { Component, PropTypes } from 'react';
//import ReactDOM from 'react-dom';

import ImageUploadGroup from '../../global/elements/ImageUploadGroup';

export default class VenueForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: !_.isUndefined(props.venue) ? props.venue.title : '',
            description: !_.isUndefined(props.venue) ? props.venue.description : '',
            featuredImage: !_.isUndefined(props.venue) ? props.venue.featuredImage : null,
            images: []
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        //const title = ReactDOM.findDOMNode(this.refs.title).value.trim();
        //const description = ReactDOM.findDOMNode(this.refs.description).value.trim();
        let {title, description, featuredImage} = this.state;

        this.props.handleSubmit({title, description, featuredImage});
    }

    render() {
        //console.log(this.state.venue);
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

VenueForm.propTypes = {
    venue: PropTypes.object,
    handleSubmit: PropTypes.func
};
