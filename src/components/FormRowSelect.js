import React from 'react';

function FormRowSelect({ name, value, handleChange, list, labelText }) {
  return (
    <div className='form-row'>
      <label htmlFor='status'>{labelText || name}</label>
      <select name={name} value={value} id={name} onChange={handleChange} className='form-select'>
        {list.map((val, index) => {
          return (
            <option value={val} key={index}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect;
