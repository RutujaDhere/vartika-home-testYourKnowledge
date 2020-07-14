import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import answer from '../../assets/img/answer.png';
import fiftyfifty from '../../assets/img/fiftyfifty.png';
import hints from '../../assets/img/hints.png';
import options from '../../assets/img/options.png';

const QuizInstructions = () => (
  <Fragment>
       <Helmet><title>Instructions of Test</title></Helmet>
        <div className="instructions container">
            <h1>How to Give the test</h1>
            <p>Ensure you read this guide from start to finish.</p><br></br>
            <ul className="browser-default" id="main-list">    
            <li>The test has a duration of 15 minutes and ends as soon as your time elepses</li>
            <li>Each test consist of 15 minutes</li>
            <li>Every question has 4 options  </li>
            <br></br>
                <img src={options} alt="Quiz app option example"/>
                <br></br>
            <li>Select the answer  which best answers the questions by clicking(or selecting it).  </li>
               <br></br>
                <img src={answer} alt="Quiz app answer example"/>

                <li>
                    Each test has Two lifelines namely: 
                    <ul id="sublist">
                        <li>Two 50-50 chances</li>
                        <li>Five Hints</li>
                    </ul>
                    </li>

                    <li>
                        Selecting a 50-50 lifeline by clicking this icon
                        <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                        will remove 2 wrong answers, leaving the correct answer and one wrong answer.
                        <img src={fiftyfifty} alt="Quiz app Fifty-Fifty example"/>
                        </li>
                        <li>
                            Using a hint by clicking the icon 
                            <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                            will remove one wrong answer leaving two wrong answer and one correct answer.You can use as many.
                        </li>
                        <img src={hints} alt="Quiz app Hints example"/>

                        <li>Feel free to quit the test at any time.In that case your score will be revealed afterwords.</li>
                        <li>The timer starts as soon as the test loads.</li>
                        <li>Let's do this you think you've got what it takes?</li>
            </ul>

            <div>
                <span className="left"><Link to ="/">No take me back</Link></span>
                <span className="right"><Link to ="/play/quiz">Go for the Test</Link></span>
            </div>

            </div>
            </Fragment>
       
);

export default QuizInstructions;