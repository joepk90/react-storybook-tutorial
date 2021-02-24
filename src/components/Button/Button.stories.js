import React from 'react';
import Button from './Button';

const Default = {
    title: 'Form/Button',
    component: Button
}

export default Default;

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>