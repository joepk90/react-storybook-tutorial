import React from 'react';
import Button from './Button';

const Default = {
    title: 'Form/Button',
    component: Button,
    // args: {
    //     children: 'Button' // optionally declare args at component level to apply to all Stories
    // }
}

export default Default;

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

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