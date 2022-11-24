import React, { useState } from 'react'
import SpechText from '../components/SpechText';
import FinishExam from './FinishExam';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz6Answer.json');

export default function Quiz6(props) {

    const [answer, setAnswer] = useState({ ...answerEmpty })
    const [pageNo, setPageNo] = useState(0)
    const [maxPage,] = useState(5)

    const nextPage = () => {
        if (pageNo < maxPage - 1) setPageNo(pageNo + 1)
        // props.sendExam(answer,"QUIZ", false)
    }
    const prevPage = () => {
        if (pageNo > 0) setPageNo(pageNo - 1)
        // props.sendExam(answer,"QUIZ", false)
    }


    const setStudentOpenAnswer = (skils, section, queationNumber, value, compare) => {
        const temp = { ...answer };
        temp[skils][section][queationNumber].student = value;
        let finalScore = temp[skils][section][queationNumber].weigth;

        var similarity = stringSimilarity.compareTwoStrings(clearText(value), clearText(temp[skils][section][queationNumber].answer));
        finalScore = similarity * parseFloat(temp[skils][section][queationNumber].weigth)
        temp[skils][section][queationNumber].score = finalScore;

        if (finalScore > (temp[skils][section][queationNumber].weigth / 10 * 6)) {
            temp[skils][section][queationNumber].functionScore = true;
        }
        else {
            temp[skils][section][queationNumber].functionScore = false;
        }
        setAnswer(temp)
    }
    const getSpeechText = (text, questionNumber) => {
        setStudentOpenAnswer(0, 4, questionNumber, text, true)
    }

    const clearText = (text) => {
        let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
        newText = newText.toLowerCase();
        return newText;
    }



    return (
        <div className='container'>
            <div className="card mt-5 mb-5">
                <div className="card-header">
                    <div className="d-flex justify-content-center">
                        <h1><strong>  QUIZ CHAPTER 2 EPISODE 6</strong></h1>

                    </div>
                </div>
                <div className="card-body p-5">
                    <div>
                        {
                            answer ?
                                <React.Fragment>
                                    <div style={{ fontSize: "18pt" }}>
                                        {
                                            pageNo === 0 ?
                                                <React.Fragment>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>       A. Choose the correct answer.</strong>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>1. A wormhole is a ______.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) circle
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) sphere
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) square
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) cube
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>2. What does Axebug explain wormhole with?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Ruler
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Pen and paper
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Calculater
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Book and pencil
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>3. The wormhole ______ space.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) jumps
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) reads
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) wraps
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) closes
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>4. They were in a ______ when they got out of the hole.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) neighbour galaxy
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) neighbour star
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) space fire
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) galaxy market
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>5. What do they think of a wormhole?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Distinguish
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Awesome
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Perfect
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Ugly
                                                            </label>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                : null
                                        }
                                        {
                                            pageNo === 1 ?
                                                <React.Fragment>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>       B. Listen and fill in the gaps.</strong>
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/OUIZ_6_B_LISTENING.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> Ahaa! This is exactly what a   <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
                                                        looks like.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Ladybug:</strong> It is a      <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} />
                                                        then.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong>Yes it is.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> When we entered the sphere, we passed millions of kilometers in a       <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
                                                        .
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> So how did this happen?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong>It is a piece of cake for me to explain. Just give me a pen and paper.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong>This is a   <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} />
                                                        right?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> This is where we are.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> And this is where we want to   <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
                                                        .
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong>We will        <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />
                                                        this point to the other.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> But it is far, isn’t it?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> So let’s fold the paper and match a point to b.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> The wormhole    <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} />
                                                        space just like this.
                                                    </div>
                                                </React.Fragment>
                                                : null
                                        }
                                        {
                                            pageNo === 2 ?
                                                <React.Fragment>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong> C. Match the words with their definitions</strong>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-2'>   1. Explain
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>A. </strong> An object or a shape measured in three different ways, height, length, width</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   2. Sphere
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>B. </strong> To bend or twist a type of shape.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   3. Warp
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>C. </strong> To give information about.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>    4. 3 Dimensional
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>D. </strong> A round figure of geometry.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   5. Remember
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>E. </strong> To have something in your mind or bring something back into your mind.</div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                : null
                                        }
                                        {
                                            pageNo === 3 ?
                                                <React.Fragment>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>     D. Unscramble the words.</strong>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 1. etmuni </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 2. actexyl </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 3. temokrile </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 4. ratlve </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 5. hcera </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 6. celicr </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 7. losnogi </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 8. rmebmre </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 9. leho </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 10. zamiagn </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][10].student} onChange={(e) => setStudentOpenAnswer(0, 3, 10, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                : null
                                        }
                                        {
                                            pageNo === 4 ?
                                                <React.Fragment>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>    A. Listen to the audio. Then, repeat the sentences clearly.</strong>
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p030_001_c2_e5.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S1" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p037_001_c2_e5.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S2" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p042_002_c2_e6.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S3" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p077_001_c2_e6.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S4" />
                                                    </div>
                                                </React.Fragment>
                                                : null
                                        }
                                        {
                                            pageNo === 5 ?
                                                <FinishExam />
                                                : null
                                        }

                                    </div>
                                </React.Fragment>
                                : null
                        }
                    </div>
                </div>
                <div className="card-footer">
                    <div className='row'>
                        {
                            pageNo !== 0 ?
                                <div className='col-auto'>
                                    <button className='btn btn-success' onClick={() => prevPage()}>PREV</button>
                                </div>
                                : null
                        }
                        {
                            pageNo !== maxPage - 1 ?
                                <div className="col-auto pl-2">
                                    <button className='btn btn-success' onClick={() => nextPage()}>NEXT</button>
                                </div>
                                : null
                        }
                        {
                            pageNo === maxPage - 1 ?
                                <div className="col-auto pl-2">
                                    <button className='btn btn-success' onClick={() => props.sendExam(answer, "QUIZ", true)}>FINISH EXAM</button>
                                </div>
                                : null
                        }
                        {/* <div className="col pl-4">
              <button className='btn btn-info pl-4' onClick={() => props.sendExam(answer,"QUIZ", false)}>SAVE EXAM</button>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
