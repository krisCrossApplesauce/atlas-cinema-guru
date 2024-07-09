import React from 'react';
import './general.css';

// Create src/components/general/SelectInput.js:
//  - The file should import general.css
//  - The file should export a functional component named SelectInput as default:
//    - SelectInput must accept these props:
//      - label: String – The input label
//      - options: Array – Array of select options
//      - className: String – SelectInput custom classes
//      - value: Any – The controlled state
//      - setValue: Function – The setState function of the above state.
//  - SelectInput’s return value must contain a html select tag with the
//    appropriate attributes from the props.
//    - Inside the select tag, map each option from the options prop to
//      return an option tag with the appropriate attributes and text inside.
//  - Create handleSelect function that takes the onChange event as parameter
//    and sets the value to the event target value using the setValue prop
//    and pass it to the select onChange event.

const SelectInput = ({label, options, className, value, setValue}) => {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <label>{label}</label>
      <select
      className={className}
      value={value}
      onChange={handleSelect}>
        {options.map((option) => (
          <option value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
