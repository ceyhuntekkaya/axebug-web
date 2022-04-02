import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz4Answer.json');

export default function Quiz4() {
  const [answer, setAnswer] = useState({ ...answerEmpty })

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
    setStudentOpenAnswer("speaking", "A", questionNumber, text, true)
  }

  const clearText = (text) => {
    let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
    newText = newText.toLowerCase();
    return newText;
  }
  return (
    <div>
      AXE QUIZ CHAPTER 1 EPISODE 4
      <div className='container'>
        A. Choose the correct answer
        <div className='row'>
          1. ................. is the second closest planet to the Sun.
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer("general", "A", "S1", "A")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              A) Venus
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer("general", "A", "S1", "B")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              B) Mars
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer("general", "A", "S1", "C")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              C) Jupiter
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer("general", "A", "S1", "D")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              D) Uranus
            </label>
          </div>
        </div>

        <div className='row'>
          2. The red planet has ................. satellites.
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer("general", "A", "S2", "A")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              A) two
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer("general", "A", "S2", "B")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              B) three
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer("general", "A", "S2", "C")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              C) four
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer("general", "A", "S2", "D")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              D) five
            </label>
          </div>
        </div>

        <div className='row'>
          3. To see the planets clearly, they transfer the image to the .................
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer("general", "A", "S3", "A")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              A) thermometer
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer("general", "A", "S3", "B")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              B) control panel
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer("general", "A", "S3", "C")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              C) monitor
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer("general", "A", "S3", "D")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              D) glasses
            </label>
          </div>
        </div>

        <div className='row'>
          4. There are craters on the surface of the ...............
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer("general", "A", "S4", "A")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              A) Earth
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer("general", "A", "S4", "B")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              B) Sun
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer("general", "A", "S4", "C")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              C) Moon
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer("general", "A", "S4", "D")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              D) Nasa
            </label>
          </div>
        </div>
        <div className='row'>
          5. They think they found ................. in space.
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer("general", "A", "S5", "A")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              A) jumpers
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer("general", "A", "S5", "B")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              B) life
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer("general", "A", "S5", "C")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              C) ships
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer("general", "A", "S5", "D")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              D) rabbits
            </label>
          </div>
        </div>

      </div>


      <div className='container'>

        B. Listen and fill in the gaps.
        <br /><br />Axebug: The moon has around 300.000 craters on it’s surface.
        <br /><br />Axebug: Moon is rich of iron,
        <input className="form-input" type="text" value={answer.general.B.S1.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S1", e.target.value, true)} />
        <br /><br />Axebug: That’s
        <input className="form-input" type="text" value={answer.general.B.S2.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S2", e.target.value, true)} /> with moon.
        <br /><br />Dung Beetle Thank you axebug... this was an amazing
        <input className="form-input" type="text" value={answer.general.B.S3.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S3", e.target.value, true)} />
        <br /><br />Dung Beetle: Except for the fact that there is
        <input className="form-input" type="text" value={answer.general.B.S4.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S4", e.target.value, true)} /> in outer space other than
        <input className="form-input" type="text" value={answer.general.B.S5.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S5", e.target.value, true)} />
        <br /><br />Ladybug: I think there is!
        <br /><br />Dung Beetle: Axebug says there isn’t. Don’t you get it? Q4LB6
        <br /><br />Ladybug: He said it only for the
        <input className="form-input" type="text" value={answer.general.B.S6.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S6", e.target.value, true)} />
        <br /><br />Dung Beetle: Yes, she is right.
        <br /><br />Axebug: We don’t know whether there is life or not in the
        <input className="form-input" type="text" value={answer.general.B.S7.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S7", e.target.value, true)} /> places of space.
        <br /><br />Axebug: Anyway, we will talk about this later. It is time to go back to home.
        <br /><br />Axebug: Could you please check the control panel
        <input className="form-input" type="text" value={answer.general.B.S8.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S8", e.target.value, true)} /> ?
        <br /><br />Dung Beetle: I think now is the best time to talk about it
        <br /><br />Ladybug: Why?
        <br /><br />Ladybug: You had better
        <input className="form-input" type="text" value={answer.general.B.S9.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S9", e.target.value, true)} /> at the control panel
        <br /><br />Dung Beetle:
        <input className="form-input" type="text" value={answer.general.B.S10.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S10", e.target.value, true)} />
        <br /><br />Robug13: If you see this message
        <input className="form-input" type="text" value={answer.general.B.S11.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S11", e.target.value, true)} /> help!
        <br /><br />Axebug: It is an emergency
        <input className="form-input" type="text" value={answer.general.B.S12.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S12", e.target.value, true)} />
        <br /><br />Axebug: Guys! We are cancelling our return home.
        <br /><br />Axebug: I think we
        <input className="form-input" type="text" value={answer.general.B.S13.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S13", e.target.value, true)} />. Wooohooo!!!
        <br /><br />Axebug:
        <input className="form-input" type="text" value={answer.general.B.S14.student} onChange={(e) => setStudentOpenAnswer("general", "B", "S14", e.target.value, true)} />

      </div>


      <div className='container'>
        <table>
          <tr>
            <td>1. Task
              <input className="form-input" type="text" value={answer.general.C.S1.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S1", e.target.value)} />
            </td>
            <td>A. Or else, alternatively</td>
          </tr>
          <tr>
            <td>
              2. Otherwise
              <input className="form-input" type="text" value={answer.general.C.S2.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S2", e.target.value)} />
            </td>
            <td>B. A big success, just like you win the lottery</td>
          </tr>
          <tr>
            <td>
              3. Assist
              <input className="form-input" type="text" value={answer.general.C.S3.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S3", e.target.value)} />
            </td>
            <td>C. An assignment or a duty to accomplish</td>
          </tr>
          <tr>
            <td>
              4. Jackpot
              <input className="form-input" type="text" value={answer.general.C.S4.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S4", e.target.value)} />
            </td>
            <td>D. An exact thing, right</td>
          </tr>
          <tr>
            <td>
              5. Spot on
              <input className="form-input" type="text" value={answer.general.C.S5.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S5", e.target.value)} />
            </td>
            <td>E. To help someone or something</td>
          </tr>

        </table>
        <hr />
        <table>
          <tr>
            <td>Martian
              <input className="form-input" type="text" value={answer.general.C.S6.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S6", e.target.value)} />
            </td>
            <td>The central part of a living thing, fruit, which contains It’s seeds</td>
          </tr>
          <tr>
            <td>
            Core
              <input className="form-input" type="text" value={answer.general.C.S7.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S7", e.target.value)} />
            </td>
            <td> A body in the universe, not as big as earth or most other planet</td>
          </tr>
          <tr>
            <td>
            Ring
              <input className="form-input" type="text" value={answer.general.C.S8.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S8", e.target.value)} />
            </td>
            <td>Supposed living habitants of Mars</td>
          </tr>
          <tr>
            <td>
              Dwarf Planet
              <input className="form-input" type="text" value={answer.general.C.S9.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S9", e.target.value)} />
            </td>
            <td>Call of a plan or decision about something</td>
          </tr>
          <tr>
            <td>
            Cancel
              <input className="form-input" type="text" value={answer.general.C.S10.student} onChange={(e) => setStudentOpenAnswer("general", "C", "S10", e.target.value)} />
            </td>
            <td>A circular band</td>
          </tr>
        </table>
      </div>




      <div className='container'>

        D. Unscramble the words. forma yazacak. yazma bölümü.
        <br /><br /><br /><br />

        <br /><br />1. Urtren
        <input className="form-input" type="text" value={answer.general.D.S1.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S1", e.target.value, true)} />
        <br /><br />2. Cergemney
        <input className="form-input" type="text" value={answer.general.D.S2.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S2", e.target.value, true)} />
        <br /><br />3. Inceeprxee
        <input className="form-input" type="text" value={answer.general.D.S3.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S3", e.target.value, true)} />
        <br /><br />4. Rownar
        <input className="form-input" type="text" value={answer.general.D.S4.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S4", e.target.value, true)} />
        <br /><br />5. Vesamsi
        <input className="form-input" type="text" value={answer.general.D.S5.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S5", e.target.value, true)} />
        <br /><br />6. Vrtiaaoiltagn
        <input className="form-input" type="text" value={answer.general.D.S6.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S6", e.target.value, true)} />
        <br /><br />7. Urcloo
        <input className="form-input" type="text" value={answer.general.D.S7.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S7", e.target.value, true)} />
        <br /><br />8. Gnyhedro
        <input className="form-input" type="text" value={answer.general.D.S8.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S8", e.target.value, true)} />
        <br /><br />9. Ggistbe
        <input className="form-input" type="text" value={answer.general.D.S9.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S9", e.target.value, true)} />
        <br /><br />10. Etorat
        <input className="form-input" type="text" value={answer.general.D.S10.student} onChange={(e) => setStudentOpenAnswer("general", "D", "S10", e.target.value, true)} />
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

    </div>
  )
}

