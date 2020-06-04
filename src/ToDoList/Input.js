import React from 'react';

const Input = ({ value, addTodo, handleChange }) => {
    return (
        <>
            <input
                style={{ width: "20rem" }}
                className="form-control"
                value={value}
                onChange={handleChange} // handleChange gets fired with every character typed
                type="text"
            />
            <button className="btn btn-primary mt-3" onClick={addTodo}>Add Todo</button>
        </>
    )
};

export default Input;