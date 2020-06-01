import React from 'react';

const Password = ({ onChange, label, value, error }) => {
    let style = { border: error ? "red 2px solid" : "grey 2px solid", width: 300 };
    return (
        <label className="mt-3">
            {label}
            <input type="password" className="shadow-none form-control" value={value} onChange={onChange} style={style} />
        </label>
    );
};

export default Password;