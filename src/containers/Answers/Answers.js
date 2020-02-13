import React from "react";
import Answer from '../../components/Answer/Answer';
import './Answers.css';

const answers = (props) => {
    let answersArr= [];
    props.answers.map((answer, index) =>  {
        return answersArr.push(<Answer clicked={(event)=>props.click(event, answer.id)} key={index} id={index} name={answer.name}/>)
    });
    return (
        <div className={'Answers'}>
            {answersArr}
        </div>
    );
};

export default answers;