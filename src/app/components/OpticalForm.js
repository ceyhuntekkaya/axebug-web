import React from 'react';

export default function OpticalForm(props) {

const goQuestion=()=>{
    props.setSelectedQestions(props.question)
}
const selectAnswer=(asnswer)=>{
    console.log(asnswer)
}

  return <div className='row'>
      <div className='col-auto questionLetter' onClick={goQuestion}>{props.question.number}</div>
      <div className='col-auto questionLetter' onClick={() => selectAnswer("A")}>A</div>
      <div className='col-auto questionLetter' onClick={() => selectAnswer("B")}>B</div>
      <div className='col-auto questionLetter' onClick={() => selectAnswer("C")}>C</div>
      <div className='col-auto questionLetter' onClick={() => selectAnswer("D")}>D</div>
      <div className='col-auto questionLetter' onClick={() => selectAnswer("E")}>E</div>
  </div>;
}
