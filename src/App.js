import React, { useState } from "react";
import { questions } from './questions';
import Question from './Question/Question';
import QuestionButtons from './QuestionButtons/QuestionButtons';
import './App.css';

export default function App() {

  const arr = questions.map((index) => {
    return { index, value: "" }
  })
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([...arr]);
  const restart = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
    setAnswers([...arr]);
  };
  const submit = (e) => {
    e.preventDefault();
    const temp = [...answers];
    if (answer === questions[questionIndex].rightAnswer) {
      setScore((score) => score + 1);
      temp[questionIndex].value = true
      setAnswers([...temp]);
    } else {
      temp[questionIndex].value = false
      setAnswers([...temp]);
    }
    if (questionIndex+1 < questions.length) {
      setQuestionIndex((i) => i + 1);
    }
    if (questionIndex+1 >= questions.length) {
      setQuestionIndex((i) => i - 1);
    }

    setAnswer("");
  };
  const finish = answers.reduce(
    (total, currentValue) => {
      if (currentValue.value.toString()!=='') {
        total.push(currentValue.value);
      }
      return total;
    }, []);

  return (
    <div>
      <h1 className='d-flex justify-content-center'>Викторина о рыбалке</h1>
      <QuestionButtons questions={[...questions]} answers={[...answers]} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex} setAnswer={setAnswer} />
      {finish.length < questions.length 
        ?
        <Question arrProps={[questions, questionIndex, setAnswer, answer, answers, submit]} />
        :
        <div className='d-flex flex-column'>
          <h1 className='d-flex justify-content-center'>Финиш</h1>
          <h2 className='d-flex justify-content-center'>Ваш процент успеха {Math.round(score / questions.length * 100)}%</h2>
          <div className='d-flex justify-content-center my-4'>
            <button className='cstButton' type="button" onClick={restart}>
              повторить
            </button>
          </div>
        </div>
      }
      <p className='d-flex justify-content-center border border-dark py-2 bg-white'>счет: {score} / {questions.length}</p>
    </div>
  )
}