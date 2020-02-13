import React from "react";
import './BirdImage.css';

const birdImage = (props) => {
    return (
        <div className={'BirdImage'}>
            <img src={props.image} alt=''/>
        </div>
    );
};

export default birdImage;