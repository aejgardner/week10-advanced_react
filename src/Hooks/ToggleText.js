import React, { useState } from 'react';

const ToggleText = ({ initial, alternate }) => {

    let [toggled, setToggled] = useState(false);

    let toggleText = () => setToggled(!toggled);

    return (
        <>
            <p className="alert alert-primary mt-4 container">{!toggled ? initial : alternate}</p>
            <button className="btn btn-primary" onClick={toggleText}>Toggle</button>
        </>
    );
};

export default ToggleText;