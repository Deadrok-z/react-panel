import React from 'react';
import './QuestionButtons.css';

export default class QuestionButtons extends React.Component {
  
    constructor(props){
        super(props);
    }

    render() {
            const questionList = [...this.props.questions].map((question, i) => {
            return (
                <li className='element' key={i} onClick={()=>this.props.setQuestionIndex(i)}>
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