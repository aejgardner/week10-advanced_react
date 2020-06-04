import React, { useState } from 'react';

const CatchMeIfYouCan = ({ jump }) => {

    let [distanceFromTop, setDistanceFromTop] = useState(0);

    const moveDownScreen = () => setDistanceFromTop(distanceFromTop + jump);

    return (
        <button
            style={{ position: "absolute", top: distanceFromTop, left: "20rem" }}
            className="btn btn-success"
            onClick={moveDownScreen} >CatchMeIfYouCan
        </button >
    );
};

export default CatchMeIfYouCan;