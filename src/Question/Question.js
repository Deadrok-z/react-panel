import React from 'react';

export default class Question extends React.Component {
  
    constructor(props){
        super(props);
    }

    render() {
        const{arrProps}=this.props;
        const[questions,questionIndex,setAnswer,answer,answers, submit]= arrProps;
        let dis;
        if (answer==='') {
            if (answers[questionIndex].value==='') {
                dis=true;
            };
            if (answers[questionIndex].value!=='') {
                dis=true;
            };
        };
        if (answer!=='') {
            if (answers[questionIndex].value==='') {
                dis=false;
            };
            if (answers[questionIndex].value!=='') {
                dis=true;
            };
        };
        
        return (
            <div className='d-flex justify-content-center my-4'>
                <div className='bg-white rounded px-4 py-4 border border-dark d-flex flex-column justify-content-center'>
                    <div>
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
                    <div>
                        <button className={dis ?'disabledButton':'cstButton'} type="button" disabled={dis} onClick={submit}>подтвердить</button>
                    </div>
                </div>
            </div>
        );
    }
}