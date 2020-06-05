import React from 'react';

const ListItem = ({ item, handleDelete, handleDone }) => {
    let style = { cursor: "pointer" }
    return (
        <li className="list-group-item d-flex justify-content-between" style={{ width: "20rem" }}>
            <span style={style} onClick={handleDelete} className="text-danger">Delete</span>
            <span>{item}</span>
            <span style={style} onClick={handleDone} className="text-success">Done</span>
        </li>
    )
};

export default ListItem;

// use onBlur to save input when you click off input

// use hooks

// build functionality where you can edit a span by clicking on it - turn it into an input onClick. Use hook state to track truth or falsity, if true its input, if false it's a span with the saved input etc