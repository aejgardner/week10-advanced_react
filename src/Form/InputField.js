import React from 'react';

const InputField = ({ name, style, value, handleChange, id, type, labelText }) => {
    return (
        <div className="form-group">
            <label className="font-weight-bold">{labelText}
                <input
                    className="form-control mt-1"
                    name={name}
                    style={style}
                    value={value}
                    onChange={handleChange} // handleChange get fired with every char typed
                    id={id}
                    type={type}
                />
            </label>
        </div>
    )
};

export default InputField;