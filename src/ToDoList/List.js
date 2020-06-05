import React from 'react';

const List = ({ children }) => {
    return (
        <ul className="list-group mt-4">
            {children}
        </ul>
    )
};

export default List;