import React from 'react';

const Password = ({ onChange, label, value, error }) => {
    let style = { width: 300 };
    let className = `form-control ${error ? "is-invalid" : ""}`
    return (
        <label className="mt-3">
            {label}
            <input
                type="password"
                className={className}
                value={value}
                onChange={onChange}
                style={style} />
        </label>
    );
};

export default Password;