import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { alertify } from 'meteor/ovcharik:alertifyjs';

import Loading from '../../core/components/Loading.jsx';
import LinkImage from '../components/LinkImage';

class LinksViewPage extends Component {
    delete() {
        Meteor.call('links.remove', this.props.venue._id, (err) => {
            if (err) {
                console.log(err);
                alertify.error(err.reason);
            } else {
                FlowRouter.go('Links.list');
                alertify.success('Link deleted successfully!');
            }
        });
    }

    render() {
        let { link } =  this.props;

        if (this.props.loading) {
            return <Loading />
        } else {
            let isOwner = this.props.user._id === link.owner;

            return (
                <div className="ui container">
                    <h1 className="ui header">{link.text}</h1>
                    <LinkImage link={link}/>
                    <p>{link.url}</p>
                    {isOwner ? <a className="ui primary button" href={FlowRouter.path('Links.update', {id: link._id})}>edit</a>:''}
                    {isOwner ? <a className="ui button" onClick={this.delete.bind(this)}>delete</a>:''}
                </div>
            )
        }
    }
}

LinksViewPage.defaultProps = {
    user: {}
};

LinksViewPage.propTypes = {
    link: PropTypes.object,
    loading: PropTypes.bool
};

export default LinksViewPage;