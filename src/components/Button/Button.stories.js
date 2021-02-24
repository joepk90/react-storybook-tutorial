import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

const Default = {
    title: 'Form/Button',
    component: Button,
    // args: {
    //     children: 'Button' // optionally declare args at component level to apply to all Stories
    // }
}

export default Default;

export const Primary = () => <Center><Button variant="primary">Primary</Button></Center>
export const Secondary = () => <Center><Button variant="secondary">Secondary</Button></Center>
export const Success = () => <Center><Button variant="success">Success</Button></Center>
export const Danger = () => <Center><Button variant="danger">Danger</Button></Center>

/**
 * Args functionality
 */
const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const SecondaryA = Template.bind({});
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}

// example of reusing another Stories args
// export const LongPrimaryA = Template.bind({})
// LongPrimaryA.args = {
//     ...PrimaryA.args
// }