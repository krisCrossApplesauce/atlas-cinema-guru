import React from 'react';
// import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function handleInput(onChange) {
    return (e) => onChange(e.target.value);
}

const Input = ({label, type, className, value, setValue = handleInput(), icon, inputAttributes}) => {
  return (
    <>
        <label>{label}</label>
        <input type={type} className={className} value={value} onChange={setValue()} {...inputAttributes}>
            {icon && <FontAwesomeIcon icon={icon} />}
        </input>
    </>
  );
};

export default Input;
