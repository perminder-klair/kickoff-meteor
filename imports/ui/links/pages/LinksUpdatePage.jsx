import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { alertify } from 'meteor/ovcharik:alertifyjs';

import LinkForm from '../components/LinkForm.jsx';
import Loading from '../../core/components/Loading.jsx';

class LinksUpdatePage extends Component {
    handleSubmit(doc) {
        let { link } = this.props;

        Meteor.call('links.update', link._id, doc, (err) => {
            if (!err) {
                //redirect back to venues page
                alertify.success('Link updated successfully!');
                FlowRouter.go('Links.view', {id: link._id});
            } else {
                //throw error
                console.log(err);
                alertify.error(err.reason);
            }
        });
    }

    render() {
        let { loading, link } = this.props;

        if (loading) {
            return <Loading />
        } else {
            return (
                <div className="ui container">
                    <h1 className="ui header">Edit link</h1>
                    <LinkForm
                        link={link}
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

export default LinksUpdatePage;