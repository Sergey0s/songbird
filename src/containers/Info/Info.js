import React from "react";
import './Info.css';
import BirdImage from '../../components/BirdImage/BirdImage';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const info = (props) => {
    let image = null;
    let info = null;
    let description = null;
    let species = null;
    if (props.infoData) {
        image = props.infoData.image;
        info = props.infoData.name;
        description= props.infoData.description;
        species=props.infoData.species;
    }else {
        image = props.dummyData[0].image;
        info = props.dummyData[0].name;
        description= props.dummyData[0].description;
        species=props.dummyData[0].species;
    }


        return (
            <div className={'Info'}>
                <div className={'Info--div'}>
                    <div className={'Info__img'}>
                        <BirdImage image={image}/>
                    </div>
                    <div className={'Info--text'}>
                        <p className={'Info--text__title'}> {info} </p>
                        <p className={'Info--text__subtitle'}>{species}</p>
                    </div>
                </div>
                <div className={'Info--audio'}>
                    <AudioPlayer
                        autoPlay
                        src={1}
                        onPlay={e => console.log("onPlay")}
                        showJumpControls={false}/>
                </div>
                <div className={'Info--description'}>
                    <p className={'Info--description__text'}> {description} </p>
                </div>
            </div>
        );
};

export default info;