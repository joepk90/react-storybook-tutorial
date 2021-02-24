import React from 'react';
import {Button} from '@chakra-ui/core';
import {action, actions} from '@storybook/addon-actions';

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        onClick: {action: 'clicked'},
    // defining arg controls (required in previus versions of storybook due to bug)
    //     variantColor: {control: 'text'},
    //     children: {control: 'text'}
    }
}

const Template = args => <Button {...args} />

export const Success = Template.bind({});
Success.args = {
    variantColor: 'green',
    children: 'Success',
    ...actions('onMouseOver', 'onMouseOut')
}

export const Danger = Template.bind({});
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}

export const Log = Template.bind({});
Log.args = {
    variantColor: 'blue',
    children: 'Log',
    onClick: () => console.log('button clicked')
}