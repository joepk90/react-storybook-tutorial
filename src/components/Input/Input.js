import React from 'react';
import './Input.css';

const Input = (props) => {

    const {variant = 'medium', type = 'text', ...rest} = props;

    return ( 
        <input className={`input ${variant}`} type={type} {...rest}/>
     );
}
 
export default Input;