import React from "react";
import PropTypes from 'prop-types';

function FormField( { label, type, name, value, onChange }) {
  
  const fieldId = `id_${name}`;
  
  return (
    <div>
      <label htmlFor={fieldId}>
        {label}: 
        <input
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text'

}

FormField.prototype = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  //name, 
  //value, 
  //onChange
};

export default FormField;
