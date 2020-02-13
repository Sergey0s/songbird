import React from "react";
import './Answer.css';

const answer = (props) => {
    return (
        <div className={'Answer'}>
            <button
                className={'Answer--item'}
                onClick={props.clicked}
            > {props.name}</button>
        </div>
    )
};

export default answer;