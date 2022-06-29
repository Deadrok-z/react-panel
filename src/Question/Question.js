import React from 'react';
import './Question.css';

export default class Question extends React.Component {
  
    constructor(props){
        super(props);
    }

    render() {
        const{arrProps}=this.props;
        const[questions,questionIndex,setAnswer,answer,submit]= arrProps;
        return (
            <div>
                <div className='variants'>
                <label className='question'>{questionIndex+1+'. '+questions[questionIndex].question}</label>
                {questions[questionIndex].choices.map((variants, i) => {
                    return (
                    <div key={i} className='variant'>
                        <input
                        type="radio"
                        name="choice"
                        value={variants}
                        onChange={(e) => setAnswer(e.target.value)}
                        checked={answer === variants}
                        />
                        {variants}
                    </div>
                    );
                })}
                </div>
                <button className='button' type="button" onClick={submit}>
                    check
                </button>
            </div>
        );
    }
}