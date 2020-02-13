import React from "react";
import './Score.css';

const score = (props) => {
    return (
        <div className={'Score'}>
            Очки: {props.score}
        </div>
    )
};

export default score;