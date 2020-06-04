import React, { useState } from 'react';

const CatchMeIfYouCan = ({ jump }) => {

    let [distanceFromTop, setDistanceFromTop] = useState(0);

    const moveDownScreen = () => setDistanceFromTop(distanceFromTop + jump);

    let style = { position: "absolute", top: distanceFromTop, left: "10rem" }

    return (
        <button
            style={style}
            className="btn btn-success"
            onClick={moveDownScreen} >CatchMeIfYouCan
        </button >
    );
};

export default CatchMeIfYouCan;