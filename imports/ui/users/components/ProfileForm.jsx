import React, { Component, PropTypes } from 'react';

import TextInputGroup from '../../core/elements/TextInputGroup';
import ImageUploadGroup from '../../core/elements/ImageUploadGroup';

export default class ProfileForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: !_.isUndefined(props.user.profile.first_name) ? props.user.profile.first_name : '',
            last_name: !_.isUndefined(props.user.profile.last_name) ? props.user.profile.last_name : '',
            location: !_.isUndefined(props.user.profile.location) ? props.user.profile.location : '',
            profilePicture: !_.isUndefined(props.user.profile.profilePicture) ? props.user.profile.profilePicture : ''
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
                    label="First Name"
                    value={this.state.first_name}
                    onChange={(e) => this.setState({first_name: e.target.value})} />
                <TextInputGroup
                    label="Last Name"
                    value={this.state.last_name}
                    onChange={(e) => this.setState({last_name: e.target.value})} />
                <TextInputGroup
                    label="Location"
                    value={this.state.location}
                    onChange={(e) => this.setState({location: e.target.value})} />
                <ImageUploadGroup
                    label="Profile Picture"
                    onChange={(e) => this.setState({profilePicture: e})}/>
                {!_.isNull(this.state.profilePicture) ? <img className="img-responsive" style={{width: '120px'}} src={this.state.profilePicture}/>:''}

                <button className="ui button" type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}

ProfileForm.propTypes = {
    user: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired
};
