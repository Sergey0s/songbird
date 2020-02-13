import React from "react";
import BirdImage from '../../components/BirdImage/BirdImage';
import SecretBird from '../../assets/bird-secret.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Questions.css';

const questions = (props) => {
    let image = null;
    let name = null;
    if(!props.answer) {
        image = SecretBird;
        name = '********';
    } else {
        image = props.question.image;
        name = props.question.name;
    }
        return (
            <div className={'Questions'}>
                <BirdImage image={image}/>
                <div className={'Questions--items'} >
                    <div className={'Questions__answer'}> {name}</div>
                    <div className={'Questions__audio'}>
                        <AudioPlayer
                            autoPlay
                            src={props.question.audio}
                            showJumpControls={false}
                        />
                    </div>
                </div>
            </div>
        );
    };

export default questions;