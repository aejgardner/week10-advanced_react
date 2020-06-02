import React from 'react';

const InputField = ({ name, value, handleChange, id, type, label }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="font-weight-bold">{label}</label>
            <input
                className="form-control"
                name={name}
                value={value}
                onChange={handleChange} // handleChange gets fired with every character typed
                id={id}
                type={type}
            />
        </div>
    )
};

export default InputField;