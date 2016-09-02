import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextInputGroup from '../TextInputGroup.jsx';

storiesOf('Text Input Group', module)
    .add('with value', () => (
        <div className="ui form" style={{width: '50%'}}>
            <TextInputGroup
                label="Location"
                value="Birmingham, UK"
                onChange={action('onChange')}/>
        </div>
    ))
    .add('without value', () => (
        <div className="ui form" style={{width: '50%'}}>
            <TextInputGroup
                label="Location"
                value=""
                onChange={action('onChange')}/>
        </div>
    ));
