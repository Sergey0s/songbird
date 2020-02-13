import React from "react";
import './NavigationItem.css';

const navigationItem = (props) => {
    let classes = ['NavigationItem'];
    if (props.active-1 === props.id) {
        classes = 'NavigationItem active';
    }

    return (
        <div className={classes}>
            {props.taskName}
        </div>
    )
};

export default navigationItem;