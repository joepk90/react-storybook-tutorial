import React from 'react';
import Input from './Input'

const Default = {
    title: 'Input',
    component: Input
}

export default Default;

export const Small = () => <Input variant="small" placeholder="Small size"/>
export const Medium = () => <Input variant="medium" placeholder="Medium Size"/>
export const large = () => <Input variant="large" placeholder="large size"/>