import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz3Answer.json');

export default function Quiz3(props) {
  const [answer, setAnswer] = useState({ ...answerEmpty })
  const [pageNo, setPageNo] = useState(0)
  const [maxPage, setMaxPage] = useState(10)

  const nextPage = () => {
    if (pageNo < maxPage - 2) setPageNo(pageNo + 1)
  }
  const prevPage = () => {
    if (pageNo > 0) setPageNo(pageNo - 1)
  }

  const setStudentOpenAnswer = (skils, section, queationNumber, value, compare) => {
    const temp = { ...answer };
    temp[skils][section][queationNumber].student = value;
    let finalScore = temp[skils][section][queationNumber].weigth;
    if (compare) {
      var similarity = stringSimilarity.compareTwoStrings(clearText(value), clearText(temp[skils][section][queationNumber].answer));
      const finalScore = similarity * parseFloat(temp[skils][section][queationNumber].weigth)
      temp[skils][section][queationNumber].score = finalScore;
    }
    else {
      temp[skils][section][queationNumber].score = finalScore;
    }
    if (finalScore > (temp[skils][section][queationNumber].weigth / 10 * 6)) {
      temp[skils][section][queationNumber].functionScore = true;
    }
    else {
      temp[skils][section][queationNumber].functionScore = false;
    }
    setAnswer(temp)
  }

  const getSpeechText = (text, questionNumber) => {
    setStudentOpenAnswer(3, 0, questionNumber, text, true)
  }

  const clearText = (text) => {
    let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
    newText = newText.toLowerCase();
    return newText;
  }
  return (
    <div className='container'>
      <div className="card mt-5 mb-5" style={{ width: "18rem;" }}>
        <div class="card-header">
          <div className="d-flex justify-content-center">
            <h5 className="card-title mt-3"><h1><strong>   AXE QUIZ CHAPTER 1 EPISODE 3</strong></h1></h5>

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
                          <div class="alert alert-dark" role="alert">
                            <strong>     A. Choose the correct answer</strong>
                          </div>

                          <div className='row'>
                            <strong>1. .............. feels dizzy in ZZZ55.</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Hornet
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Axebug
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Dung Beetle
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Ladybug
                              </label>
                            </div>
                          </div>
                          <div className='row'>
                            <strong>2. The earth is located in the .................</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Phobos System
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Sun System
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Solar System
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Saturn System
                              </label>
                            </div>
                          </div>
                          <div className='row'>
                            <strong>3. The sun is a ..............</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Satellite
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Star
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Space
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D)Satellite
                              </label>
                            </div>
                          </div>
                          <div className='row'>
                            <strong>4. Who was right about the earth?</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Dung Beetle
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Hornet
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Ladybug
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Spider
                              </label>
                            </div>
                          </div>
                          <div className='row'>
                            <strong>5. “Let’s hang a left” means ..............</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Make a left turn
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Wave your left hand
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Touch your left ear
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Wink your left eye
                              </label>
                            </div>
                          </div>
                        </React.Fragment>
                        : null
                    }

                    {
                      pageNo === 1 ?
                        <React.Fragment>
                          <div class="alert alert-dark" role="alert">
                            <strong>    ???????????????????????</strong>
                          </div>


                          <div className="paragraf">
                            <strong>Axebug:</strong> I can
                            <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} /> this every
                            <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} /> .
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong> Hurray!
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug: </strong>I feel dizzy.
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug:</strong>
                            <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} /> , it was pitch-black.
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong> What is happening?
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong>
                            <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} /> guys. We are in the space at last.
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong> Where did earth go?
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Don’t panic. It’s right
                            <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} /> us.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Are you ready for the answer?
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong> Yayy! I’m
                            <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} /> . How about
                            <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} /> ?
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug:</strong> I’m ready! Let’s find out.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong>
                            <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} /> lets hang a left now. But first...
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Close your eyes
                            <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} /> I tell you to open them.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Now open your eyes!
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle: </strong>Wow!
                            <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} />
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug:</strong> No! It’s impossible.
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong> It’s
                            <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} /> like I
                            <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value, true)} />.
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug:</strong> He was right.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Yes he is.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> The earth is
                            <input className="form-input textformat" type="text" value={answer.result[0][1][13].student} onChange={(e) => setStudentOpenAnswer(0, 1, 13, e.target.value, true)} /> in the solar system.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> The solar system has the sun and the planets
                            <input className="form-input textformat" type="text" value={answer.result[0][1][14].student} onChange={(e) => setStudentOpenAnswer(0, 1, 14, e.target.value, true)} /> around it.
                          </div>   </React.Fragment>
                        : null
                    }
                    {
                      pageNo === 2 ?

                        <React.Fragment>
                          <div class="alert alert-dark" role="alert">
                            <strong>     ---------------------------------------</strong>
                          </div>

                          <div className='row'>
                            <div className='col-2'>   1. Launch
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>A. </strong> A high possibility, probability</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>    2. Abandoned
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>B. </strong> A hopeless search for something</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>    3. Wild goose chase
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>C. </strong> To send off, usually used for planes of air crafts</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   4. Chance
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>D. </strong> Making a big deal out of something, exaggerating</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   5. Make a fuss
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>E. </strong> Deserted or left by themselves</div>
                            </div>
                          </div>


                          <hr />
                          <div className='row'>
                            <div className='col-2'>    Suddenly
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][6].student} onChange={(e) => setStudentOpenAnswer(0, 2, 6, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              Move in a circular shape
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>     Pitch – Black
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][7].student} onChange={(e) => setStudentOpenAnswer(0, 2, 7, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              To find a place or a location
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>    Locate
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][8].student} onChange={(e) => setStudentOpenAnswer(0, 2, 8, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              Very dark
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   Revolve
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][9].student} onChange={(e) => setStudentOpenAnswer(0, 2, 9, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              Something being very impressive or thrilling
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>    Spectacular
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][10].student} onChange={(e) => setStudentOpenAnswer(0, 2, 10, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              All very quick
                            </div>
                          </div>




                        </React.Fragment>
                        : null
                    }
                    {
                      pageNo === 3 ?

                        <React.Fragment>
                          <div class="alert alert-dark" role="alert">
                            <strong>     D. Unscramble the words.</strong>
                          </div>


                          <div className='row'>
                            <div className='col-3'> 1. Inegmia </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 2. Rceous </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 3. Raslpcretac </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 4. Tcosels </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 5. Rencet </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 6. Dysuedln </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 7. Zydzi </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 8. Idbhne </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 9. Spntlea </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 10. Groinvelv </div>
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
                          <div class="alert alert-dark" role="alert">
                            <strong>    A. Listen to the audio. Then, repeat the sentences clearly.</strong>
                          </div>

                          <div>
                            <SpechText getSpeechText={getSpeechText} questionNumber="S1" />
                          </div>
                          <div>
                            <SpechText getSpeechText={getSpeechText} questionNumber="S2" />
                          </div>
                          <div>
                            <SpechText getSpeechText={getSpeechText} questionNumber="S3" />
                          </div>
                          <div>
                            <SpechText getSpeechText={getSpeechText} questionNumber="S4" />
                          </div>
                        </React.Fragment>
                        : null
                    }
                  </div>
                </React.Fragment>
                : null
            }
          </div>

        </div>
        <div class="card-footer">
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
                  <button className='btn btn-success' onClick={() => props.sendExam(answer)}>FINISH EXAM</button>
                </div>
                : null
            }

          </div>
        </div>
      </div>
    </div>

  )
}

