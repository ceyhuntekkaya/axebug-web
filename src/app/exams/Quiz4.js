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

        <div className="card-body p-5">
          <div>
            {
              answer ?
                <React.Fragment>
                  AXE QUIZ CHAPTER 1 EPISODE 4
                  {
                    pageNo === 0 ?
                      <React.Fragment>
                        A. Choose the correct answer
                        <div className='row'>
                          1. ................. is the second closest planet to the Sun.
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
                          2. The red planet has ................. satellites.
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
                          3. To see the planets clearly, they transfer the image to the .................
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
                          4. There are craters on the surface of the ...............
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
                          5. They think they found ................. in space.
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

                        B. Listen and fill in the gaps.
                        <br /><br />Axebug: The moon has around 300.000 craters on it’s surface.
                        <br /><br />Axebug: Moon is rich of iron,
                        <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
                        <br /><br />Axebug: That’s
                        <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} /> with moon.
                        <br /><br />Dung Beetle Thank you axebug... this was an amazing
                        <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
                        <br /><br />Dung Beetle: Except for the fact that there is
                        <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} /> in outer space other than
                        <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
                        <br /><br />Ladybug: I think there is!
                        <br /><br />Dung Beetle: Axebug says there isn’t. Don’t you get it? Q4LB6
                        <br /><br />Ladybug: He said it only for the
                        <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />
                        <br /><br />Dung Beetle: Yes, she is right.
                        <br /><br />Axebug: We don’t know whether there is life or not in the
                        <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} /> places of space.
                        <br /><br />Axebug: Anyway, we will talk about this later. It is time to go back to home.
                        <br /><br />Axebug: Could you please check the control panel
                        <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} /> ?
                        <br /><br />Dung Beetle: I think now is the best time to talk about it
                        <br /><br />Ladybug: Why?
                        <br /><br />Ladybug: You had better
                        <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} /> at the control panel
                        <br /><br />Dung Beetle:
                        <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} />
                        <br /><br />Robug13: If you see this message
                        <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} /> help!
                        <br /><br />Axebug: It is an emergency
                        <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value, true)} />
                        <br /><br />Axebug: Guys! We are cancelling our return home.
                        <br /><br />Axebug: I think we
                        <input className="form-input textformat" type="text" value={answer.result[0][1][13].student} onChange={(e) => setStudentOpenAnswer(0, 1, 13, e.target.value, true)} />. Wooohooo!!!
                        <br /><br />Axebug:
                        <input className="form-input textformat" type="text" value={answer.result[0][1][14].student} onChange={(e) => setStudentOpenAnswer(0, 1, 14, e.target.value, true)} />

                      </React.Fragment>
                      : null
                  }
                  {
                    pageNo === 2 ?

                      <React.Fragment>
                        <table>
                          <tr>
                            <td>1. Task
                              <input className="form-input textformat" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />
                            </td>
                            <td>A. Or else, alternatively</td>
                          </tr>
                          <tr>
                            <td>
                              2. Otherwise
                              <input className="form-input textformat" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />
                            </td>
                            <td>B. A big success, just like you win the lottery</td>
                          </tr>
                          <tr>
                            <td>
                              3. Assist
                              <input className="form-input textformat" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />
                            </td>
                            <td>C. An assignment or a duty to accomplish</td>
                          </tr>
                          <tr>
                            <td>
                              4. Jackpot
                              <input className="form-input textformat" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />
                            </td>
                            <td>D. An exact thing, right</td>
                          </tr>
                          <tr>
                            <td>
                              5. Spot on
                              <input className="form-input textformat" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />
                            </td>
                            <td>E. To help someone or something</td>
                          </tr>

                        </table>
                        <hr />
                        <table>
                          <tr>
                            <td>Martian
                              <input className="form-input textformat" type="text" value={answer.result[0][2][6].student} onChange={(e) => setStudentOpenAnswer(0, 2, 6, e.target.value)} />
                            </td>
                            <td>The central part of a living thing, fruit, which contains It’s seeds</td>
                          </tr>
                          <tr>
                            <td>
                              Core
                              <input className="form-input textformat" type="text" value={answer.result[0][2][7].student} onChange={(e) => setStudentOpenAnswer(0, 2, 7, e.target.value)} />
                            </td>
                            <td> A body in the universe, not as big as earth or most other planet</td>
                          </tr>
                          <tr>
                            <td>
                              Ring
                              <input className="form-input textformat" type="text" value={answer.result[0][2][8].student} onChange={(e) => setStudentOpenAnswer(0, 2, 8, e.target.value)} />
                            </td>
                            <td>Supposed living habitants of Mars</td>
                          </tr>
                          <tr>
                            <td>
                              Dwarf Planet
                              <input className="form-input textformat" type="text" value={answer.result[0][2][9].student} onChange={(e) => setStudentOpenAnswer(0, 2, 9, e.target.value)} />
                            </td>
                            <td>Call of a plan or decision about something</td>
                          </tr>
                          <tr>
                            <td>
                              Cancel
                              <input className="form-input textformat" type="text" value={answer.result[0][2][10].student} onChange={(e) => setStudentOpenAnswer(0, 2, 10, e.target.value)} />
                            </td>
                            <td>A circular band</td>
                          </tr>
                        </table>


                      </React.Fragment>
                      : null
                  }


                  {
                    pageNo === 3 ?

                      <React.Fragment>

                        D. Unscramble the words. forma yazacak. yazma bölümü.
                        <br /><br /><br /><br />

                        <br /><br />1. Urtren
                        <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
                        <br /><br />2. Cergemney
                        <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
                        <br /><br />3. Inceeprxee
                        <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
                        <br /><br />4. Rownar
                        <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
                        <br /><br />5. Vesamsi
                        <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
                        <br /><br />6. Vrtiaaoiltagn
                        <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
                        <br /><br />7. Urcloo
                        <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
                        <br /><br />8. Gnyhedro
                        <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
                        <br /><br />9. Ggistbe
                        <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
                        <br /><br />10. Etorat
                        <input className="form-input textformat" type="text" value={answer.result[0][3][10].student} onChange={(e) => setStudentOpenAnswer(0, 3, 10, e.target.value, true)} />
                      </React.Fragment>
                      : null
                  }

                  {
                    pageNo === 4 ?

                      <React.Fragment>
                        A. Listen to the audio. Then, repeat the sentences clearly.

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

