import React from "react";
import './Modal.css';

const modal = (props) => {
    return (
        <div className={'Modal'}>
            {
                props.score > 100 && (
                    <div className={'Modal--div'}>
                        <h1> Поздравляю Вы выиграли! </h1>
                        <h2> Ваш результат: {props.score}</h2>
                        <div>
                            <img src={'https://d1tjohjvimcqgl.cloudfront.net/assets/9660.jpg'}  alt={'winner'}/>
                        </div>
                    </div>)
            }
            {
                props.score < 100 && (
                    <div className={'Modal--div'}>
                        <h1> Мда...так плохо сегодня еще не играли! </h1>
                        <h2> Ваш результат: {props.score}</h2>
                        <div>
                            <img src={'https://gd.image-gmkt.com/li/647/977/1207977647.g_400-w-st_g.jpg'} alt={'loser'}/>
                        </div>
                    </div>)
            }


            <div className={'Modal__a'}>
                <a href='/'> Сыграть еще раз </a>
            </div>
        </div>)
};

export default modal;