import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ProfileForm from '../ProfileForm.jsx';

storiesOf('Profile Form', module)
    .add('active', () => (
        <ProfileForm
            user={{}}
            handleSubmit={action('handleSubmit')}/>
    ));