import React from 'react';

export default function InputDropdown(props) {
  let renderSelectOptions = (option, i) => {
    return (
      <option key={i} value={option}>{option}</option>
    )
  }

  return (
    <select>
      {props.options.map(renderSelectOptions)}
    </select>
  );
}
