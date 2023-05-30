import React from 'react'

export const FormRow = ({ type, name, value, onInputChange, labelText, placeholder }) => {
    return (
        <div className='form-row'>
            <label
                htmlFor={name}
                className='form-label'>
                {labelText || name}
            </label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onInputChange}
                className='form-input'
                placeholder={placeholder}
            />
        </div>
    )
}
