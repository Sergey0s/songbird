import React, {Component} from 'react';
import './Layout.css';
import Logo from '../../components/Logo/Logo';
import Score from '../../components/Score/Score';
import NavigationItems from '../../containers/NavigationItems/NavigationItems';
import Questions from "../../containers/Questions/Questions";
import Answers from '../../containers/Answers/Answers';
import Info from '../../containers/Info/Info';
import birdsData from "../../birds";
import Modal from '../../components/Modal/Modal';

class Layout extends Component {
    state = {
        birdsData: birdsData,
        questionArr: null,
        questionArrNum: 0,
        currentQuestion: null,
        answer: null,
        goodAnswer: false,
        showModal: false,
        score: 0
    };

    questionHandler = (questionNumber) => {
        this.setState({questionArr: this.state.birdsData[questionNumber]})
    };

    randomQuestionHandler = () => {
        if (!this.state.currentQuestion) {
            let currentQuestionNum = Math.floor(Math.random() * 6);
            let currentQuestion = this.state.questionArr.data[currentQuestionNum];
            this.setState({currentQuestion: currentQuestion})
        } else {

        }
    };

    nextQuestionHandler = () => {
        if (this.state.questionArrNum <= 5) {
            this.setState({questionArrNum: this.state.questionArrNum + 1});
            this.setState({currentQuestion: null});
            this.questionHandler(this.state.questionArrNum);
            this.setState({goodAnswer: false})
        } else {
            this.setState({showModal: true});
        }

    };

    answerClickHandler = (event, answerId) => {
        if (this.state.goodAnswer) {
            this.setState({answer: answerId});
        } else {
            this.setState({answer: answerId});

            if (answerId === this.state.currentQuestion.id) {
                this.setState({score: this.state.score + 100});
                this.setState({goodAnswer: true});
            } else {
                this.setState({score: this.state.score - 50})
            }
        }
    };

    componentDidMount() {
        if (this.state.questionArrNum === 0) {
            this.questionHandler(0);
            this.setState({questionArrNum: this.state.questionArrNum + 1})
        }
    }


    render() {
        let content = '';
        let btn = '';
        if (this.state.goodAnswer) {
            btn = (
                <button className={'Content__btn'}
                    onClick={this.nextQuestionHandler}
            > СЛЕДУЮЩИЙ УРОВЕНЬ
            </button>)
        } else {
            btn = (
                <button className={'Content__btnDisabled'}
                > ОЖИДАЕТСЯ ОТВЕТ
                </button>)
        }


        if (this.state.showModal) {
            content = <Modal score ={this.state.score}/>
        } else {

            if (this.state.questionArr) {
                this.randomQuestionHandler();
            }


            if (this.state.currentQuestion) {
                content = (
                    <div>
                        <header className={'Header'}>
                            <div className={'Header--items'}>
                                <Logo/>
                                <Score score={this.state.score}/>
                            </div>
                        </header>

                        <main className={'Content'}>
                            <NavigationItems
                                birdsData={this.state.birdsData}
                                active={this.state.questionArrNum}
                            />
                            <Questions
                                question={this.state.currentQuestion}
                                answer={this.state.goodAnswer}
                            />
                            <div className={'Content__answers'}>
                                <Answers
                                    answers={this.state.questionArr.data}
                                    click={(event, answerId) => this.answerClickHandler(event, answerId)}/>
                                <Info
                                    infoData={this.state.questionArr.data[this.state.answer - 1]}
                                    dummyData={this.state.questionArr.data}
                                />
                                {this.props.children}
                            </div>
                           {btn}
                        </main>
                    </div>
                )
            } else {
                content = 'Loading';
            }
        }
            return (content);
    }
}


export default Layout;