import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz4Answer.json');

export default function Quiz4(props) {
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
            <h5 className="card-title mt-3"><h1><strong>  AXE QUIZ CHAPTER 1 EPISODE 4</strong></h1></h5>

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
                            <strong>       A. Choose the correct answer</strong>
                          </div>
                          <div className='row'>
                            <strong>1. ................. is the second closest planet to the Sun.</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Venus
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Mars
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Jupiter
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Uranus
                              </label>
                            </div>
                          </div>
                          <div className='row'>
                            <strong>2. The red planet has ................. satellites.</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) two
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) three
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) four
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) five
                              </label>
                            </div>
                          </div>

                          <div className='row'>
                            <strong>3. To see the planets clearly, they transfer the image to the .................</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) thermometer
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) control panel
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) monitor
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) glasses
                              </label>
                            </div>
                          </div>

                          <div className='row'>
                            <strong>4. There are craters on the surface of the ...............</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Earth
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Sun
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Moon
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Nasa
                              </label>
                            </div>
                          </div>
                          <div className='row'>
                            <strong>5. They think they found ................. in space.</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) jumpers
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) life
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) ships
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) rabbits
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
                            <strong>       B. Listen and fill in the gaps.</strong>
                          </div>



                          <div className="paragraf">
                            <strong>Axebug:</strong> The moon has around 300.000 craters on it’s surface.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Moon is rich of iron,
                            <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
                          </div>

                          <div className="paragraf">
                            <strong>Axebug: </strong>That’s
                            <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} /> with moon.
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle: </strong> Thank you axebug... this was an amazing
                            <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong> Except for the fact that there is
                            <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} /> in outer space other than
                            <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug: </strong>I think there is!
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle: </strong>Axebug says there isn’t. Don’t you get it? Q4LB6
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug:</strong> He said it only for the
                            <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong> Yes, she is right.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug: </strong>We don’t know whether there is life or not in the
                            <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} /> places of space.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Anyway, we will talk about this later. It is time to go back to home.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Could you please check the control panel
                            <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} /> ?
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle: </strong>I think now is the best time to talk about it
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug:</strong> Why?
                          </div>

                          <div className="paragraf">
                            <strong>Ladybug:</strong> You had better
                            <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} /> at the control panel
                          </div>

                          <div className="paragraf">
                            <strong>Dung Beetle:</strong>
                            <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} />
                          </div>

                          <div className="paragraf">
                            <strong>Robug13: </strong>If you see this message
                            <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} /> help!
                          </div>

                          <div className="paragraf">
                            <strong>Axebug: </strong>It is an emergency
                            <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value, true)} />
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> Guys! We are cancelling our return home.
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong> I think we
                            <input className="form-input textformat" type="text" value={answer.result[0][1][13].student} onChange={(e) => setStudentOpenAnswer(0, 1, 13, e.target.value, true)} />. Wooohooo!!!
                          </div>

                          <div className="paragraf">
                            <strong>Axebug:</strong>
                            <input className="form-input textformat" type="text" value={answer.result[0][1][14].student} onChange={(e) => setStudentOpenAnswer(0, 1, 14, e.target.value, true)} />
                          </div>
                        </React.Fragment>
                        : null
                    }
                    {
                      pageNo === 2 ?

                        <React.Fragment>
                          <div class="alert alert-dark" role="alert">
                            <strong>     *********************</strong>
                          </div>

                          <div className='row'>
                            <div className='col-2'>   1. Task
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>A. </strong> Or else, alternatively</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   2. Otherwise
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>B. </strong> A big success, just like you win the lottery</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   3. Assist
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>C. </strong> An assignment or a duty to accomplish</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>    4. Jackpot
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>D. </strong> An exact thing, right</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   5. Spot on
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />

                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>E. </strong> To help someone or something</div>
                            </div>
                          </div>


                          <hr />



                          <div className='row'>
                            <div className='col-2'>   Martian
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][6].student} onChange={(e) => setStudentOpenAnswer(0, 2, 6, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              The central part of a living thing, fruit, which contains It’s seeds
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   Core
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][7].student} onChange={(e) => setStudentOpenAnswer(0, 2, 7, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              A body in the universe, not as big as earth or most other planet
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>    Ring
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][8].student} onChange={(e) => setStudentOpenAnswer(0, 2, 8, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              Supposed living habitants of Mars
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>    Dwarf Planet
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][9].student} onChange={(e) => setStudentOpenAnswer(0, 2, 9, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              Call of a plan or decision about something
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>   Cancel
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][10].student} onChange={(e) => setStudentOpenAnswer(0, 2, 10, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              A circular band
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
                            <div className='col-3'> 1. Urtren </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 2. Cergemney </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 3. Inceeprxee </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> vvv4. Rownar </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 5. Vesamsi </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 6. Vrtiaaoiltagn </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 7. Urcloo </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 8. Gnyhedro </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 9. Ggistbe </div>
                            <div className='col-9'>
                              <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 10. Etorat </div>
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

