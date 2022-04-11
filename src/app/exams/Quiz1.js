import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz1Answer.json');


export default function Quiz1(props) {
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
    temp.result[skils][section][queationNumber].student = value;
    let finalScore = temp.result[skils][section][queationNumber].weigth;
    if (compare) {
      var similarity = stringSimilarity.compareTwoStrings(clearText(value), clearText(temp.result[skils][section][queationNumber].answer));
      const finalScore = similarity * parseFloat(temp.result[skils][section][queationNumber].weigth)
      temp.result[skils][section][queationNumber].score = finalScore;
    }
    else {
      temp.result[skils][section][queationNumber].score = finalScore;
    }
    if (finalScore > (temp.result[skils][section][queationNumber].weigth / 10 * 6)) {
      temp.result[skils][section][queationNumber].functionScore = true;
    }
    else {
      temp.result[skils][section][queationNumber].functionScore = false;
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
            <h5 className="card-title mt-3"><h1><strong> AXE QUIZ CHAPTER 1 EPISODE 1</strong></h1></h5>

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
                            <strong>   A. Choose the correct answer</strong>
                          </div>

                          <div className='row'>
                            <strong>1. Who says ‘the World is flat’?</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Narrator
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
                            <strong>2. Who do you think stinks the most?</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Narrator
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Axebug
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Dung Beetle
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Ladybug
                              </label>
                            </div>
                          </div>

                          <div className='row'>
                            <strong>3. What’s the name of Axebug’s Spaceship?</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) ZZZ44
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) ZZZ55
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) ZZZ66
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) ZZZ77
                              </label>
                            </div>
                          </div>

                          <div className='row'>
                            <strong>4. How do Axebug and his crew reach to the spaceship?</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) By jumping up a bridge
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) By climbing up a ladder
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) By taking the bus
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) By going downstairs
                              </label>
                            </div>
                          </div>

                          <div className='row'>
                            <strong>5. What was the weather like on the argument day?</strong>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Windy and strange
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                B) Rainy and peaceful
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                C) Stormy and excited
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                D) Calm and sunny
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
                            <strong>   ?????????????????????????????</strong>
                          </div>


                          <strong>Axebug:</strong> Tell me what brings you out here?


                          <div className="paragraf"><strong>Dung Beetle:</strong> Will you ask the
                            <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
                            or shall i do it?
                          </div>

                          <div className="paragraf"><strong>Narrator: </strong>Upon listening their argument...
                          </div>

                          <div className="paragraf"><strong>Axebug:</strong> Hmm!
                          </div>
                          <div className="paragraf"><strong>Axebug:</strong> It’s neither fl t nor round. The world is a
                            <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} />
                          </div>

                          <div className="paragraf"><strong>Axebug:</strong> Hey! Just
                            <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
                            would you like to find the an wer by yourselves? Q1LB4
                          </div>

                          <div className="paragraf"><strong>Dung Beetle:</strong> Wow! This sounds
                            <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} />.
                            Let’s try to find the an wer.
                            <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
                          </div>

                          <div className="paragraf"><strong>Ladybug:</strong> I’ll find the answer, come hell or
                            <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />.
                          </div>

                          <div className="paragraf"><strong>Axebug: </strong>This way,
                            <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} />
                            I’m sure you will enjoy this journey
                            <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} />.
                          </div>

                          <div className="paragraf"><strong>Axebug:</strong>
                            <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} />.
                          </div>

                          <div className="paragraf"><strong>Axebug:</strong> I will show you something you have never seen before.
                          </div>

                          <div className="paragraf"><strong>Axebug:</strong> Over there! Right
                            <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} />
                            you’ll see it once we climb up the
                            <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} />.
                          </div>

                          <div className="paragraf"><strong>Axebug:</strong> Oh, finall ! Come on! Let’s go in.
                          </div>

                          <div className="paragraf"><strong>Axebug: </strong>And here we are. Please
                            <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value, true)} />.
                          </div>
                        </React.Fragment>
                        : null
                    }
                    {
                      pageNo === 2 ?

                        <React.Fragment>
                          <div class="alert alert-dark" role="alert">
                            <strong>  **************************</strong>
                          </div>

                          <div className='row'>
                            <div className='col-2'>1. Argument
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />
                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>A. </strong>A person with knowledge, smart enough</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>2. Stubborn
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />
                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>B. </strong>Travel in a period of time</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>3. Accept
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />
                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>C. </strong>A negative discussion between two or more people</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>4. Wise
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />
                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>D. </strong>To receive a thought or something that someone has given to you</div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>5. Journey
                            </div>
                            <div className='col-1'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />
                            </div>
                            <div className='col-9'>
                              <div className="paragraf alert alert-success"><strong>E. </strong>Connected to a purpose or opinion very much</div>
                            </div>
                          </div>




                          <hr />

                          <div className='row'>
                            <div className='col-2'> Experience
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][6].student} onChange={(e) => setStudentOpenAnswer(0, 2, 6, e.target.value)} />
                            </div>
                            <div className='col-8'>
                              The type of liquid change It’s form to a cold solid matter by freezing
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>Ice
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][7].student} onChange={(e) => setStudentOpenAnswer(0, 2, 7, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              Practical knowledge of your own
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>Bug
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][8].student} onChange={(e) => setStudentOpenAnswer(0, 2, 8, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              The distance covered by a spaceship, airplane or a vehicle
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>Range
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][9].student} onChange={(e) => setStudentOpenAnswer(0, 2, 9, e.target.value)} />

                            </div>
                            <div className='col-8'>
                              Strength or energy
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-2'>Force
                            </div>
                            <div className='col-2'>
                              <input className="form-input w-100" type="text" value={answer.result[0][2][10].student} onChange={(e) => setStudentOpenAnswer(0, 2, 10, e.target.value)} />
                            </div>
                            <div className='col-8'>
                              An invertebrate, type of insect
                            </div>
                          </div>


                        </React.Fragment>
                        : null
                    }

                    {
                      pageNo === 3 ?

                        <React.Fragment>

                          <div class="alert alert-dark" role="alert">
                            <strong>   D. Unscramble the words. </strong>
                          </div>




                          <div className='row'>
                            <div className='col-3'>
                            </div>
                            <div className='col-9'>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'>
                            </div>
                            <div className='col-9'>
                            </div>
                          </div>



                          <div className='row'>
                            <div className='col-3'> 1. Tnksiy
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                            </div>
                            <div className='col-9'></div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 2. Teriponnuprt
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 3. Derttecul
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 4. Eyurjon
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 5. Yallfni
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 6. Ioqeustn
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 7. Nurdo
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 8. Aillgev
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 9. Yenveutlla
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-3'> 10. Olmwcee
                            </div>
                            <div className='col-9'><input className="form-input textformat" type="text" value={answer.result[0][3][10].student} onChange={(e) => setStudentOpenAnswer(0, 3, 10, e.target.value, true)} />
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
