import React, { useState } from 'react';

const Square = ({ colour }) => {

    let [active, setActive] = useState(true);

    let handleClick = () => setActive(!active);

    let style = { height: 100, width: 100, backgroundColor: active ? "green" : colour };

    return (
        <div className="mt-4 d-flex justify-content-center">
            <div onClick={handleClick} style={style}></div>
        </div>
    );
};

export default Square;