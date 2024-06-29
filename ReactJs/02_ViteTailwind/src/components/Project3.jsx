import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default InputField;
