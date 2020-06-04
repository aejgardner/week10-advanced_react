import React, { useState } from 'react';

const Counter = ({ initial, max }) => {

    let [counter, setCounter] = useState(initial);

    const increaseCounter = () => {
        setCounter(counter < max ? counter + 1 : counter = max)
    };

    const decreaseCounter = () => {
        setCounter(counter > 0 ? counter - 1 : counter = 0)
    };

    return (
        <div className="border border-primary mt-4 rounded container" style={{ width: "20rem" }}>
            <h2 className="mt-4">Counter</h2>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-danger" onClick={decreaseCounter}>-</button>
                <p style={{ fontSize: 40 }} className="mr-4 ml-4" >{counter}</p>
                <button className="btn btn-success" onClick={increaseCounter}>+</button>
            </div>
        </div>
    );
};

export default Counter;