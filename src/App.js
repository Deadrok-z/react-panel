import React, { useState } from "react";
import {questions} from './questions';
import Question from './Question/Question';
import QuestionButtons from './QuestionButtons/QuestionButtons';
import './App.css';

export default function App() {
  
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const restart = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
  };
  const submit = (e) => {
    e.preventDefault();
    if (answer === questions[questionIndex].rightAnswer) {
      setScore((score) => score + 1);
    }
    if (questionIndex < questions.length) {
      setQuestionIndex((i) => i + 1);
    }
  };
if (questionIndex < questions.length) {
    return (
      <div>
        <h1 className='h1-name'>Викторина</h1>
        <QuestionButtons questions={[...questions]} setQuestionIndex={setQuestionIndex}/>
        <Question arrProps={[questions,questionIndex,setAnswer,answer,submit]} />
        <p>score: {score}</p>
      </div>
    );
  } else {
    return (
      <form>
        <div v-else>
          <button type="button" onClick={restart}>
            restart
          </button>
        </div>
        <p>score: {score}</p>
      </form>
    );
  }
}