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
    setStudentOpenAnswer("speaking", 0, questionNumber, text, true)
  }

  const clearText = (text) => {
    let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
    newText = newText.toLowerCase();
    return newText;
  }
  return (
    <div>
      {
        answer ?
          <React.Fragment>
            AXE QUIZ CHAPTER 1 EPISODE 3
            <div className='container'>
              A. Choose the correct answer
              <div className='row'>
                1. .............. feels dizzy in ZZZ55.
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
                2. The earth is located in the .................
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
                3. The sun is a ..............
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
                4. Who was right about the earth?
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
                5. “Let’s hang a left” means ..............
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
            </div>

            <div className='container'>
              Axebug: I can
              <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} /> this every
              <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} /> .
              Dung Beetle: Hurray!
              Ladybug: I feel dizzy. Q3B3
              Ladybug:
              <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} /> , it was pitch-black.
              Dung Beetle: What is happening?
              Axebug:
              <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} /> guys. We are in the space at last.
              Dung Beetle: Where did earth go?
              Axebug: Don’t panic. It’s right
              <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} /> us.
              Axebug: Are you ready for the answer?
              Dung Beetle: Yayy! I’m
              <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} /> . How about
              <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} /> ?
              Ladybug: I’m ready! Let’s find out.
              Axebug:
              <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} /> lets hang a left now. But first...
              Axebug: Close your eyes
              <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} /> I tell you to open them.
              Axebug: Now open your eyes!
              Dung Beetle: Wow!
              <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} />
              Ladybug: No! It’s impossible.
              Dung Beetle: It’s
              <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} /> like I
              <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value, true)} />.
              Ladybug: He was right.
              Axebug: Yes he is.
              Axebug: The earth is
              <input className="form-input textformat" type="text" value={answer.result[0][1][13].student} onChange={(e) => setStudentOpenAnswer(0, 1, 13, e.target.value, true)} /> in the solar system.
              Axebug: The solar system has the sun and the planets
              <input className="form-input textformat" type="text" value={answer.result[0][1][14].student} onChange={(e) => setStudentOpenAnswer(0, 1, 14, e.target.value, true)} /> around it.
            </div>


            <div className='container'>
              <table>
                <tr>
                  <td>1. Launch
                    <input className="form-input textformat" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />
                  </td>
                  <td>A. A high possibility, probability</td>
                </tr>
                <tr>
                  <td>
                    2. Abandoned
                    <input className="form-input textformat" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />
                  </td>
                  <td>B. A hopeless search for something</td>
                </tr>
                <tr>
                  <td>
                    3. Wild goose chase
                    <input className="form-input textformat" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />
                  </td>
                  <td>C. To send off, usually used for planes of air crafts</td>
                </tr>
                <tr>
                  <td>
                    4. Chance
                    <input className="form-input textformat" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />
                  </td>
                  <td>D. Making a big deal out of something, exaggerating</td>
                </tr>
                <tr>
                  <td>
                    5. Make a fuss
                    <input className="form-input textformat" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />
                  </td>
                  <td>E. Deserted or left by themselves</td>
                </tr>

              </table>
              <hr />
              <table>
                <tr>
                  <td>Suddenly
                    <input className="form-input textformat" type="text" value={answer.result[0][2][6].student} onChange={(e) => setStudentOpenAnswer(0, 2, 6, e.target.value)} />
                  </td>
                  <td>Move in a circular shape</td>
                </tr>
                <tr>
                  <td>
                    Pitch – Black
                    <input className="form-input textformat" type="text" value={answer.result[0][2][7].student} onChange={(e) => setStudentOpenAnswer(0, 2, 7, e.target.value)} />
                  </td>
                  <td> To find a place or a location</td>
                </tr>
                <tr>
                  <td>
                    Locate
                    <input className="form-input textformat" type="text" value={answer.result[0][2][8].student} onChange={(e) => setStudentOpenAnswer(0, 2, 8, e.target.value)} />
                  </td>
                  <td>Very dark</td>
                </tr>
                <tr>
                  <td>
                    Revolve
                    <input className="form-input textformat" type="text" value={answer.result[0][2][9].student} onChange={(e) => setStudentOpenAnswer(0, 2, 9, e.target.value)} />
                  </td>
                  <td>Something being very impressive or thrilling</td>
                </tr>
                <tr>
                  <td>
                    Spectacular
                    <input className="form-input textformat" type="text" value={answer.result[0][2][10].student} onChange={(e) => setStudentOpenAnswer(0, 2, 10, e.target.value)} />
                  </td>
                  <td>All very quick</td>
                </tr>
              </table>
            </div>

            <div className='container'>

              D. Unscramble the words. forma yazacak. yazma bölümü.
              <br /><br /><br /><br />

              <br /><br />1. Inegmia
              <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
              <br /><br />2. Rceous
              <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
              <br /><br />3. Raslpcretac
              <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
              <br /><br />4. Tcosels
              <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
              <br /><br />5. Rencet
              <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
              <br /><br />6. Dysuedln
              <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
              <br /><br />7. Zydzi
              <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
              <br /><br />8. Idbhne
              <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
              <br /><br />9. Spntlea
              <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
              <br /><br />10. Groinvelv
              <input className="form-input textformat" type="text" value={answer.result[0][3][10].student} onChange={(e) => setStudentOpenAnswer(0, 3, 10, e.target.value, true)} />
            </div>

            <div className='container'>
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
            </div>
            <button onClick={() => props.sendExam(answer)}>FINISH EXAM</button>
          </React.Fragment>
          : null
      }
    </div>
  )
}

