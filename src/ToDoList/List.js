import React from 'react';
import ListItem from './ListItem';

const List = ({ items, handleDelete }) => {
    return (
        <ul className="list-group mt-4">
            {items.map((item, i) => (
                <ListItem item={item} key={i} i={i} handleDelete={handleDelete} />
            ))}
        </ul>
    )
};

export default List;