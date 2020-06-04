import React, { useState } from 'react';

const RollCall = ({ names }) => {

    let [index, setIndex] = useState(0);

    const nextName = () => setIndex((index + 1) % names.length);

    return (
        <div className="border border-primary rounded mt-4 container" style={{ width: "20rem" }}>
            <h3 className="mt-4">{names[index]}</h3>
            <button
                className="btn btn-success mb-3"
                onClick={nextName} >Next
            </button >
        </div>
    );
};

export default RollCall;