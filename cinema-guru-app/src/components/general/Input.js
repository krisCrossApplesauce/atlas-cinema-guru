import React from 'react';
// import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({label, type, className, value, setValue, icon, inputAttributes}) => {
  const handleInput = (event) => {
    setValue(event.target.value);
  }

  return (
    <>
      <label>{label}</label>
      <input
      type={type}
      className={className}
      value={value}
      onChange={handleInput()}
      {...inputAttributes}>
        {icon && <FontAwesomeIcon icon={icon} />}
      </input>
    </>
  );
};

export default Input;
