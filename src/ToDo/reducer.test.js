import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

const initialState = {
    items: []
};

it('adds items', () => {
    // Adding tests here
    let result = addItem(initialState, { value: "Hello" });

    expect(result.items[0]).toEqual({ task: "Hello", completed: false });

    // shouldn't be the same array we started with
    expect(result.items).not.toBe(initialState.items);

    // 3. If we take the result from before and add another item, we should get two items:

    // passing in the previous result, which already had one item
    result = addItem(result, { value: "Mum" });

    // should be two items
    expect(result.items.length).toBe(2);

    // 4. Let's double check they're both in there:

    // check both items are now in items, in order given
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
});

it('removes items', () => {
    // start with a few items
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
            { task: "How", completed: false },
            { task: "Are", completed: true },
            { task: "You", completed: false },
            { task: "Today", completed: false },
        ]
    };

    // remove item at index 0
    let removed = removeItem(many, { index: 0 });

    // "Hello" should be gone, so should get back "Mum" task
    expect(removed.items[0]).toEqual({ task: "Mum", completed: false });

    // Make sure we're not getting the original array back:

    // check that it's not the same object being returned
    expect(removed.items).not.toBe(many.items);

    // Make sure we're getting five items back:

    // should be 5 items, not 6
    expect(removed.items.length).toBe(5);

    // Remove another item and make sure it still works:

    // use the previously pruned array
    removed = removeItem(removed, { index: 2 });

    // check that the right task is now in index 2
    expect(removed.items[2]).toEqual({ task: "You", completed: false });
});

it('updates items', () => {
    // If we update an item its task property should change:

    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };

    // update an item passing the index and value
    let updated = updateItem(many, { index: 1, value: "Dad" });

    // should have updated the task property
    expect(updated.items[1]).toEqual({ task: "Dad", completed: false });

    // Make sure we're getting back a different object:

    // check that it's not the same object being returned
    expect(updated.items[1]).not.toBe(many.items[1]);

    // Make sure the completed property isn't changed:

    // update the item at index 0
    updated = updateItem(many, { index: 0, value: "Good Morning" });

    // check that the completed value is the same
    expect(updated.items[0]).toEqual({ task: "Good Morning", completed: true });
});

it('completes items', () => {
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };

    // complete the item at index 1
    let completed = completeItem(many, { index: 1 });

    // expected completed to be true
    expect(completed.items[1]).toEqual({ task: "Mum", completed: true });

    // As always, check we're getting back a new object:

    // check that it's not the same object being returned
    expect(completed.items[1]).not.toBe(many.items[1]);

    // Check completing an item doesn't affect an already completed item:

    // complete item at index 0
    completed = completeItem(many, { index: 0 });

    // should still be marked as completed
    expect(completed.items[0]).toEqual({ task: "Hello", completed: true });
});

it('reduces', () => {
    // It should return the state as it was if the action type isn't recognised:

    // pass in a nonsense action
    let newState = reducer(initialState, { type: "GOTTA_CATCH_EM_ALL" });

    // get back initial state
    expect(newState).toBe(initialState);
});