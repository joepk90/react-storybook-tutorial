import React from 'react';
import {Button} from '@chakra-ui/core';

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
    // defining arg controls (required in previus versions of storybook due to bug)
    //     variantColor: {control: 'text'},
    //     children: {control: 'text'}
    }
}

const Template = args => <Button {...args} />

export const Success = Template.bind({});
Success.args = {
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({});
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}