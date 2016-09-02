import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Loading from '../Loading.jsx';

storiesOf('Loading', module)
    .add('active', () => (
        <Loading />
    ));
