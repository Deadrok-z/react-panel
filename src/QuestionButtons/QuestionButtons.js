import React from 'react';
import './QuestionButtons.css';

export default class QuestionButtons extends React.Component {
  
    constructor(props){
        super(props);
    }

    render() {
        const {questions, answers, questionIndex}= this.props;
        const questionList = [...questions].map((question, i) => {
            const liClass=["element"];
            if(questionIndex===i) {
                liClass.push("elemetActive");
            }
            if(answers[i].value.length !== 0) {
                answers[i].value? liClass.push("bg-success") : liClass.push("bg-danger")
            }
            return (
                <li className={liClass.join(" ")} key={i} onClick={()=> {this.props.setQuestionIndex(i); this.props.setAnswer('');}}>
                    {i+1}
                </li>
            );
        })
        return (
            <ul className='list'>
                {questionList}
            </ul>
        );
    }
}