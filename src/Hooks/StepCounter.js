import React, { useState } from 'react';

const Counter = ({ step, max }) => {

    let [counter, setCounter] = useState(0);

    let nextStepUp = counter + step;
    let nextStepDown = counter - step;

    const increaseCounter = () => {
        setCounter(nextStepUp > max ? counter = max : nextStepUp)
    };

    const decreaseCounter = () => {
        setCounter(nextStepDown < 0 ? counter = 0 : nextStepDown)
    };

    return (
        <div className="border border-primary mt-4 rounded container" style={{ width: "20rem" }}>
            <h2 className="mt-4">StepCounter</h2>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-danger" onClick={decreaseCounter}>-</button>
                <p style={{ fontSize: 40 }} className="mr-4 ml-4" >{counter}</p>
                <button className="btn btn-success" onClick={increaseCounter}>+</button>
            </div>
        </div >
    );
};

export default Counter;