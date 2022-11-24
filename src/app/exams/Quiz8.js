import React, { useState } from 'react'
import SpechText from '../components/SpechText';
import FinishExam from './FinishExam';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz8Answer.json');

export default function Quiz8(props) {

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
                        <h1><strong>  QUIZ CHAPTER 2 EPISODE 8</strong></h1>

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
                                                        <strong>1. What does Watchman see behind the meteorites?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) A dot
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) A tree
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) A whistle
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) A twinkle
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>2. The watchman can __________ inside the ship.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) sleep
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) see
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) dance
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) read
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>3. When will they take control of ZZZ55?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) When it enters the range
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) When it stops the engine
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) When it is in control of another colony
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) When it is fixed up
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>4. Who realizes the attack?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Watchman
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Ladybug
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Dung Beetle
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Axebug
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>5. The watchman switches to ______ mode.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) stealth
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) sleep
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) offline
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) online
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
                                                            <source src={`../../assets/OUIZ_5_B_LISTENING.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1:</strong> Let’s use the seeker
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
                                                        then.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2:</strong> Damn it! Look properly. You are  <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} /> !
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1: </strong>That’s ok. If i miss out, we have you afterall.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1: </strong> The seeker telescope is our eye in space. The data in it records
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2:</strong> We will see what it is when we check the archives.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2: </strong>Keep    <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} /> in outer space other than
                                                        by the way.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2: </strong>This... Is This?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2:</strong> This is a      <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} /> !
                                                    </div>

                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1:</strong> It looks like a bug to me.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1: </strong>Here, i have reached the archives. Now, leave
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2:</strong> Allright. The name of the           <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} />
                                                        is ‘zzz55’.
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
                                                        <div className='col-2'>   1. Suspend
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>A. </strong> Information</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   2. Approach
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>B. </strong> Probably</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   3. Data
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>C. </strong> To cancel something.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>    4. Likely
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>D. </strong> An area you can see.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   5. Range
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>E. </strong> To come closer.</div>
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
                                                        <div className='col-3'> 1. emowrhlo </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 2. rnete </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 3. utinmse </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 4. wdon </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 5. worsle </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 6. snoesrs </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 7. tasleht </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 8. sewat </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 9. ragtviy </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 10. rominor </div>
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
                                                            <source src={`../../assets/p016_001_c2_e5.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S1" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p027_001_c2_e5.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S2" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p035_003_c2_e5.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S3" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p039_001_c2_e5.mp3`} type="audio/mpeg" />
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
