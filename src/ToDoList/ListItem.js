import React from 'react';

const ListItem = ({ item, i, handleDelete, handleDone }) => {
    let style = { cursor: "pointer" }
    return (
        <li className="list-group-item d-flex justify-content-between" style={{ width: "20rem" }}>
            <span style={style} onClick={() => handleDelete(i)} className="text-danger">Delete</span>
            <span>{item}</span>
            <span style={style} onClick={handleDone} className="text-success">Done</span>
        </li>
    )
};

export default ListItem;