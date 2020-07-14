import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import QuizInstructions from './components/quiz/Quizinstuctions';
import Play from './components/quiz/Play';
import QuizSummery from './components/QuizSummery';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/Quiz" exact component={Play} />
      <Route path="/play/quizSummery" exact component={QuizSummery} />
    </Router>
  );
}

export default App;
