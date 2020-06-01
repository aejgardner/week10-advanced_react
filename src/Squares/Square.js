import React from "react";

const Square = ({ color, handleClick, selected }) => {
    let style = { height: 100, width: 100, backgroundColor: selected ? color : "black" };
    return (
        <div onClick={handleClick} style={style}></div>
    )
}

export default Square;