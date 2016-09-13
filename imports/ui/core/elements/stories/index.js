import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextInputGroup from '../TextInputGroup.jsx';
import DateInputGroup from '../DateInputGroup.jsx';
import TextAreaGroup from '../TextAreaGroup.jsx';

storiesOf('Text Input Group', module)
    .add('with value', () => (
        <div className="ui form" style={{width: '50%'}}>
            <TextInputGroup
                label="Location"
                value="Birmingham, UK"
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
    ));

storiesOf('Text Area Group', module)
    .add('with value', () => (
        <div className="ui form" style={{width: '50%'}}>
            <TextAreaGroup
                label="About you"
                value="I am amazing"
                onChange={action('onChange')}/>
        </div>
    ));