import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Create src/components/general/Input.js:
//  - The file should import general.css
//  - The file should export a functional component named Input as default:
//    - Input must accept these props:
//      - label: String – The input label
//      - type: String – Input type
//      - className: String – Input custom classes
//      - value: Any – The controlled state
//      - setValue: Function – The setState function of the above state.
//      - icon(optional): FontAwesomeIcon – An icon to decorate the input with.
//      - inputAttributes(optional): Object – Other input attributes
//  - Input’s return value must contain a html input with the appropriate
//    attributes from the props.
//  - Create handleInput function that takes the onChange event as parameter
//    and sets the value to the event target value using the setValue prop
//    and pass it to the input onChange event.

const Input = ({label, type, className, value, setValue, icon, inputAttributes}) => {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <label>{icon && <FontAwesomeIcon icon={icon} />}{label}</label>
      <input
      type={type}
      className={className}
      value={value}
      onChange={handleInput}
      {...inputAttributes} />
    </>
  );
};

export default Input;
