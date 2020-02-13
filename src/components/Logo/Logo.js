import React from "react";
import songbirdLogo from '../../assets/songbirgLogo.png';
import './Logo.css'


const logo = () => (
    <div className={'Logo'}>
        <img src={songbirdLogo} alt='SongBirdApp'/>
    </div>
);

export default logo;