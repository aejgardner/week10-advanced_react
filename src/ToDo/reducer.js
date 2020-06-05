// If we pass in a value property, we get back a version of the state with an items array containing a task that has not been completed:

export const addItem = (state, { value }) => {
    state = {
        ...state,
        items: [...state.items,
        {
            task: value,
            completed: false
        }
        ]
    }

    return state;
};