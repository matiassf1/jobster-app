import React from 'react'

export const FormRow = ({ type, name, value, onInputChange, labelText }) => {
    return (
        <div>
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
            />
        </div>
    )
}
