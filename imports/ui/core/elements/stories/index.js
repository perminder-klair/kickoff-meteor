import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextInputGroup from '../TextInputGroup.jsx';
import DateInputGroup from '../DateInputGroup.jsx';

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

storiesOf('Date Input Group', module)
    .add('with value', () => (
        <div className="ui form" style={{width: '50%'}}>
            <DateInputGroup
                label="Birthday"
                value="19, May 1982"
                onChange={action('onChange')}/>
        </div>
    ))
    .add('without value', () => (
        <div className="ui form" style={{width: '50%'}}>
            <DateInputGroup
                label="Birthday"
                value=""
                onChange={action('onChange')}/>
        </div>
    ));
