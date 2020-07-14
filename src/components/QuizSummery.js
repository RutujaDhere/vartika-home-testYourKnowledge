import React, {Component , Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'

class QuizSummery extends Component {
constructor (props ){
    super(props);
    this.state = {
        score:0,
        numberOfQuestions:0,
        numberOfAnsweredQuestions: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        hintsUsed: 0,
        fiftyfiftyused: 0
    };
    
}

componentDidMount () {
    const {state  } = this.props.location;
    this.setState({
        score: (state.score /state.numberOfQuestions) *100,
        numberOfQuestions:state.numberOfQuestions,
        numberOfAnsweredQuestions: state. numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
        fiftyfiftyused: state.fiftyfiftyused
    });
}

    render () {
        const { state } = this.props.location;
      
      let stats, remark;
      const userScore = this.state.score;

        if (userScore <= 30 ) {
            remark = 'You need more practice!';
        }else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time';
        }else if (userScore <= 70 && userScore > 50) {
            remark = 'You can do better';
        }else if (userScore >=71 && userScore <= 84) {
            remark = 'You did Great';
        }else {
            remark = 'You are an absolute genius!';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                <div className="successSymbol">
                    <span className="mdi mdi-check-circle-outline success-icon"></span>
                </div>
                <h1>Test has Ended</h1>
                <div className="container stats">
                    <h4>{remark}</h4>
                     <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                    <span className="stat left">Total number of questions: </span>
                    <span className="right">{this.state.numberOfQuestions}</span>
                    <br></br>
                    <span className="stat left">Total number of Attempted questions: </span>
                     <span className="right">{this.state.numberOfAnsweredQuestions}</span>
                    <br></br>
                    <span className="stat left">Total number of Correct questions: </span>
                     <span className="right">{this.state.correctAnswers}</span>
                    <br></br>
                    <span className="stat left">Total number of Wrong questions: </span>
                    <span className="right">{this.state.wrongAnswers}</span>
                    <br></br>
                    <span className="stat left">Hints Used: </span>
                    <span className="right">{this.state.hintsUsed}</span>
                    <br></br>
                    <span className="stat left">50-50 Used: </span>
                    <span className="right">{this.state.fiftyfiftyused}</span>
                    <br></br>
                </div>
                <section>
                    <ul>
                    <li>
                            <Link to ="/play/quiz">Play Again</Link>
                        </li>
                        <li>
                            <Link  to ="/">Back to home</Link>
                        </li>
                       
                    </ul>
                    </section>
                </Fragment>
            );
        }else {
            stats = (
                <section>
                <h1 className="no-stats">No statics Avilable</h1>
                <ul>
                         <li>
                            <Link to ="/play/quiz">Take Test Again</Link>
                        </li>
                        <li>
                            <Link to ="/">Back to home</Link>
                        </li>
                       
                    </ul>
                    </section>
            );
        }
        return (
            <Fragment>
                <Helmet>
                    <title>Quiz app -Summery</title>
                </Helmet>
                <div className="quiz-summary">      
                {stats}
                </div>
            </Fragment>
        );        
    }
}

export default QuizSummery;