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
    // Updating tests here
});

it('completes items', () => {
    // Completing tests here
});

it('reduces', () => {
    // Reducer tests here
});