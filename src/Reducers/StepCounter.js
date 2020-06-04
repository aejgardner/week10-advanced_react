import React, { useReducer } from 'react';

const initialState = { counter: 0 };

const StepCounter = ({ max, step }) => {

    const increaseCounter = state => {
        let nextStepUp = state.counter + step;
        return {
            ...state,
            counter: nextStepUp > max ? state.counter = max : nextStepUp
        };
    }

    const decreaseCounter = () => {
        let nextStepDown = state.counter - step;
        return {
            ...state,
            counter: nextStepDown < 0 ? state.counter = 0 : nextStepDown
        };
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT": return increaseCounter(state)
            case "DECREMENT": return decreaseCounter(state)
            default: return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="border border-primary mt-4 rounded container" style={{ width: "20rem" }}>
            <h2 className="mt-4">StepCounter</h2>
            <div className="d-flex justify-content-center align-items-center">

                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: "DECREMENT" })}>-
                </button>

                <p
                    style={{ fontSize: 40 }}
                    className="mr-4 ml-4" >{state.counter}
                </p>

                <button
                    className="btn btn-success"
                    onClick={() => dispatch({ type: "INCREMENT" })}>+
                </button>

            </div>
        </div >
    );
};

export default StepCounter;