import React, { useState } from 'react';

const Clicked = () => {

    let [clicked, setClicked] = useState(false);

    let update = () => setClicked(true);

    return (
        <p
            style={{ cursor: "pointer" }}
            className="alert alert-primary mt-4 container"
            onClick={update}
        >
            {!clicked ? "Not Clicked" : "Clicked"}
        </p>
    );
};

export default Clicked;