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
        <h1 className='d-flex justify-content-center'>Викторина</h1>
        <QuestionButtons questions={[...questions]} setQuestionIndex={setQuestionIndex}/>
        <Question arrProps={[questions,questionIndex,setAnswer,answer,submit]} />
        <p className='d-flex justify-content-center border border-dark py-2 bg-white'>счет: {score} / {questions.length}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className='d-flex justify-content-center'>Викторина</h1>
        <QuestionButtons questions={[...questions]} setQuestionIndex={setQuestionIndex}/>
        <div className='d-flex flex-column'>
          <h1 className='d-flex justify-content-center'>Финиш</h1>
          <div className='d-flex justify-content-center my-4'>
            <button className='cstButton' type="button" onClick={restart}>
              повторить
            </button>
          </div>
        </div>
        <p className='d-flex justify-content-center border border-dark py-2 bg-white'>счет: {score} / {questions.length}</p>
      </div>
    );
  }
}