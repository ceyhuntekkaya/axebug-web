import React, { useState } from 'react'
import SpechText from '../components/SpechText';
import FinishExam from './FinishExam';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz9Answer.json');

export default function Quiz9(props) {

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
        temp.result[skils][section][queationNumber].student = value;
        let finalScore = temp.result[skils][section][queationNumber].weigth;

        var similarity = stringSimilarity.compareTwoStrings(clearText(value), clearText(temp.result[skils][section][queationNumber].answer));
        finalScore = similarity * parseFloat(temp.result[skils][section][queationNumber].weigth)
        temp.result[skils][section][queationNumber].score = finalScore;

        if (finalScore > (temp.result[skils][section][queationNumber].weigth / 10 * 6)) {
            temp.result[skils][section][queationNumber].functionScore = true;
        }
        else {
            temp.result[skils][section][queationNumber].functionScore = false;
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
                        <h1><strong>  QUIZ CHAPTER 3 EPISODE 9</strong></h1>

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
                                                        <strong>1. Why did they go back to the headquarters?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) To take a rest.
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) To visit grand-Robug.
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) To set up their route.
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) To have their lunch.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>2. What type of galaxy is the Milky Way?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Elliptical
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Irregular
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Spiral
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Barred
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>3. How many stops will they visit according to their route?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Six
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Five
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Four
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Three
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>4. Why did Robug Colony have to leave their planet?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Because their ancestors couldn’t protect their sources.
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Because they were kidnapped by some aliens.
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Because their planet was so boring.
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Because they got an SOS call from another planet.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>5. Which element does Robug Colony need to survive?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Designexium
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Magnesium
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Titanium
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Potassium
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
                                                            <source src={`../../assets/quiz_9_listeng.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13: </strong> We geared up ‘ZZZ55’ for this tough journey.
                                                        .
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> Let’s <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} /> .
                                                      
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13: </strong>If this journey hits the nail on the head, life in our colony will be  <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} />
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> We will hit the <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
                                                        . Don’t you worry.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>DUNG BEETLE:</strong> What?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13: </strong>Let’s go back to headquarters and run through the checklist.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> All right. Let’s <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
                                                        it and set up our route.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Ladybug:</strong> Tell me about it!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> Why did you    <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
                                                        an S.OS.? What’s the problem?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13: </strong>I am counting on you and your crew!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>ROBUG 13: </strong> That’s the milky way over there.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> Where are we <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} /> ? 
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>ROBUG 13: </strong> Show it on the big screen.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13: </strong> This is where we are right now. We are far away from the solar system.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> Where are we <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />	to?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13:</strong> You are heading to the m44 constellation.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong>  Ok. Which <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} />
                                                         are we on right now?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13:</strong> We are on the m45 constellation.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13:</strong> From here, to there.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong>It’s not going to be a short  <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} />
                                                        is it?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13:</strong> ‘ZZZ55’ is <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} /> as rock, now.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug: </strong> Let’s Go On About The <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} />. I Want To Know Everything.
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
                                                        <div className='col-2'>   1. Run through
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>A. </strong> To become larger or grater.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   2. Mistery
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>B. </strong> Go through quickly.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   3. Accord
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>C. </strong> An unknown and curious thing, a secret.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>    4. Grow
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>D. </strong> Use something up.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   5. Consume
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>E. </strong> A formal agreement.</div>
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
                                                        <div className='col-3'> 1. unjoery </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 2. rucpode </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 3. tuore </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 4. myeryst </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 5. osucatuı </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 6. eltar </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 7. roefvere </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 8. rbed </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 9. prisal </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 10. brader </div>
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
                                                            <source src={`../../assets/c3_e9_pg4_p3.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S1" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/c3_e9_pg4_p6.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S2" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/c3_e9_pg5_p1.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S3" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/c3_e9_pg4_p7.mp3`} type="audio/mpeg" />
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
