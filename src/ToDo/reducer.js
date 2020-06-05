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

export const removeItem = (state, { index }) => {
    state = {
        ...state,
        items: state.items.filter(item => {
            return item !== state.items[index];
        })
    }

    return state;
};