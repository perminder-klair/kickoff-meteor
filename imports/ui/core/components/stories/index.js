import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Loading from '../Loading.jsx';
import ConnectionNotification from '../ConnectionNotification.jsx';

storiesOf('Loading', module)
    .add('active', () => (
        <Loading />
    ));

storiesOf('Connection Notification', module)
    .add('active', () => (
        <ConnectionNotification />
    ));
