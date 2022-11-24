import React, { useState } from 'react'
import SpechText from '../components/SpechText';
import FinishExam from './FinishExam';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz7Answer.json');

export default function Quiz7(props) {

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
                        <h1><strong>  QUIZ CHAPTER 2 EPISODE 7</strong></h1>

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
                                                        <strong>1. The ship is ______.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) under constellation
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) under control
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) under moon
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) under stars
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>2. They ask them move ahead ______.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) gently
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) fastly
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) jumping
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) furoiusly
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>3. Which colony are they in?</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Doom Colony
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) Robot Colony
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) Donut Colony
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) Robug Colony
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <strong>4. They climb the stairs ______.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) until the lake
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) until the end
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) under the bed
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) under the castle
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <strong>5. Watchmen ask them ______.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) why they come
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                B) what they are going to eat
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                C) where they are going to sleep
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                D) what they are going to do
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
                                                            <source src={`../../assets/OUIZ_7_B_LISTENING.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1:</strong>Sixty   <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
                                                        to enter our range.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1:</strong> We are going to lock down the ship to it’s      <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} />
                                                        ready?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2: </strong>All set for    <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
                                                        !
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1: </strong> Ten seconds to lockdown!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1:</strong> Nine, eight, seven, six, five, four, three, two, one...
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1 and WATCHMAN 2: </strong>Lockdown completed!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 1: </strong>Let's     <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} />
                                                        the ship to the field.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2:</strong>    <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
                                                        is landing.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2:</strong>      <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />
                                                        complete!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>WATCHMAN 2: </strong>All done!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Dung beetle:</strong> What do we do now?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Ladybug:</strong> Is this a joke? I want to go home.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> Cool your jets guys!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Watchman 1:</strong> Did you  <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} />
                                                        the ship?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Watchman 2:</strong> Locking complete.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Watchman 1 :</strong> Open the  <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} />
                                                        .
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
                                                        <div className='col-2'>   1. Force
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>A. </strong> To pause or stop a disturbance, mainly used in aircrafts or prisoner cells.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   2. Lock-Down
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>B. </strong> A large wasp that can give you a bad sting.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   3. Orbit
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>C. </strong> A small room of two doors to let passage through.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>    4. Hormet
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>D. </strong> A round figure of geometry.</div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-2'>   5. Airlock-door
                                                        </div>
                                                        <div className='col-1'>
                                                            <input className="form-input w-100" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />

                                                        </div>
                                                        <div className='col-9'>
                                                            <div className="paragraf alert alert-success"><strong>E. </strong> An elliptical path or way, especially in Space.</div>
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
                                                        <div className='col-3'> 1. lepant </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 2. tse </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 3. thera </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 4. roctoln </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 5. hdaeda </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 6. ptuecar </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 7. ldonckg </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 8. temhle </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 9. saecpsiute </div>
                                                        <div className='col-9'>
                                                            <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-3'> 10. rwote </div>
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
                                                            <source src={`../../assets/p078_001_c2_e7.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S1" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p082_001_c2_e7.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S2" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p087_001_c2_e7.mp3`} type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber="S3" />
                                                    </div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                                            <source src={`../../assets/p0104_001_c2_e7.mp3`} type="audio/mpeg" />
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
