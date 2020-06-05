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
        items: state.items.filter((_, i) => {
            return i !== index;
        })
    }

    return state;
};

export const updateItem = (state, { index, value }) => {
    // create new external items array
    let items = [...state.items]

    // at the specified index of the new array, fill it with the contents of the original item, but change the task property to the destrcutured value passed as a parameter
    items[index] = {
        ...state.items[index],
        task: value
    }

    // return a copy of the state with the items property equalling the updated items array
    return {
        ...state,
        items: items
    }
};

export const completeItem = (state, { index }) => {
    let items = [...state.items];

    items[index] = {
        ...state.items[index],
        completed: true
    }

    return {
        ...state,
        items: items
    }
};

export default (state, action) => {
    switch (action.type) {
        case "NEW_ITEM": return addItem(state, action);
        case "REMOVE_ITEM": return addItem(state, action);
        default: return state;
    }
};