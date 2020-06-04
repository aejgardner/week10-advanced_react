import React, { useReducer } from 'react';

const initialState = { clicked: false };

const showClicked = state => {
    return {
        ...state,
        clicked: true
    };
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICKED": return showClicked(state)
        default: return state;
    }
};

const Clicked = () => {

    // dispatch is the function that takes an action, function that calls reducer with the current version of the state, and whatever you pass into dispatch on line 30, initialState here is like the starting value of a reduce method. Reducer here is an anonymous function which take TWO parameters, in this and most cases, state and action.
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1 className="mt-4 text-info">Reducer Challenges</h1>
            <p
                style={{ cursor: "pointer" }}
                className="alert alert-primary mt-4 container"
                onClick={() => { dispatch({ type: "CLICKED" }) }}
            >{!state.clicked ? "Not Clicked" : "Clicked"}
            </p>
        </>
    );
};

export default Clicked;