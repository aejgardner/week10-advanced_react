import React, { useState } from 'react';

const RollCall = () => {

    let [input, setInput] = useState("");

    const handleChange = (e) => setInput(e.currentTarget.value);

    let colour = "";

    if (input.length >= 1 && input.length < 9) {
        colour = "red"
    } else if (input.length >= 9 && input.length < 16) {
        colour = "orange"
    } else if (input.length >= 16) {
        colour = "green"
    }

    return (
        <input
            style={{ backgroundColor: colour }}
            type="password"
            onChange={handleChange}
            placeholder="Password strength tester"
            value={input}
            className="form-control container mt-4 mb-4 border border-secondary"
        />
    )
};

export default RollCall;