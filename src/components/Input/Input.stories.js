import React from 'react';
import Input from './Input'

const Default = {
    title: 'Form/Input', // Further nesting can also be setup. For example: Form/Control/Input
    component: Input
}

export default Default;

export const Small = () => <Input variant="small" placeholder="Small size"/>
export const Medium = () => <Input variant="medium" placeholder="Medium Size"/>
export const Large = () => <Input variant="large" placeholder="large size"/>

// rename a Story
// Small.storyName = 'Small Input';