import React from 'react';
import './general.css';

// Create src/components/general/SearchBar.js:
//  - The file should import general.css
//  - The file should export a functional component named SearchBar as default:
//    - Button must accept these props:
//    - title: String – The controlled state
//    - setTitle: String – The setState function of the above state.
//  - SearchBar’s return value must contain a html input with the appropriate
//    attributes from the props.
//  - Create handleInput function that takes the onChange event as parameter
//    and sets the value to the event target value using the setTitle prop
//    and pass it to the input onChange event.

const SearchBar = ({title, setTitle}) => {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <input type="text" title={title} onChange={handleInput} />
  );
};

export default SearchBar;
