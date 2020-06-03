import React, { useState } from 'react';

const Clicked = () => {

    let [clicked, setClicked] = useState(false);

    let update = () => setClicked(true);

    return (
        <>
            <h1 className="mt-4 text-info">Hook Challenges</h1>
            <p
                style={{ cursor: "pointer" }}
                className="alert alert-primary mt-4 container"
                onClick={update}
            >
                {!clicked ? "Not Clicked" : "Clicked"}
            </p>
        </>
    );
};

export default Clicked;