import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

import LinkForm from '../components/LinkForm.jsx';
import Loading from '../../core/components/Loading.jsx';

//to get database
import { Links } from '../../../api/links/links';

class LinksUpdatePage extends Component {
    handleSubmit(doc) {
        Meteor.call('links.update', this.props.link._id, doc, (err) => {
            if (!err) {
                //redirect back to venues page
                alertify.success('Link updated successfully!');
                FlowRouter.go('Links.view', {id: this.props.venue._id});
            } else {
                //throw error
                console.log(err);
                alertify.error(err.reason);
            }
        });
    }

    render() {
        if (this.props.loading) {
            return <Loading />
        } else {
            return (
                <div className="ui container">
                    <h1 className="ui header">Edit venue</h1>
                    <LinkForm
                        link={this.props.link}
                        handleSubmit={this.handleSubmit.bind(this)}/>
                </div>
            )
        }
    }
}

LinksUpdatePage.defaultProps = {
    user: {}
};

LinksUpdatePage.propTypes = {
    link: PropTypes.object,
    loading: PropTypes.bool
};

export default createContainer((props) => {
    let handle = Meteor.subscribe('venues.single', props.id);

    return {
        loading: !handle.ready(),
        user: Meteor.user(),
        link: Links.findOne(props.id)
    };
}, LinksUpdatePage);