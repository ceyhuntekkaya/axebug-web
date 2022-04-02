import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Quiz2Answer.json');

export default function Quiz2(props) {
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
            AXE QUIZ CHAPTER 1 EPISODE 2
            <div className='container'>
              A. Choose the correct answer
              <div className='row'>
                1. Axebug says “To answer your question is ..........
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    A) Space monitor
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    B) Space shuttle
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    C) Space battle
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as1" onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    D) Spaceship
                  </label>
                </div>
              </div>
              <div className='row'>
                2. Dung Beetle says “Wouldn’t it be enough if we just .................?”
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    A) Climbed up a ladder
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    B) Climbed up a rope
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    C) Climbed up a tree
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as2" onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    D) Climbed up the Wall
                  </label>
                </div>
              </div>







              <div className='row'>
                3. They launch ..............
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    A) In the morning
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    B) In the afternoon
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    C) At sunset
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as3" onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    D) At night
                  </label>
                </div>
              </div>


              <div className='row'>
                4. Axebug’s spaceship looks like a ..............
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    A) Butterfly
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    B) A bee
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    C) A housefly
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as4" onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    D) A worm
                  </label>
                </div>
              </div>







              <div className='row'>
                5. Hold tight means ..............
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    A) Stay where you are
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    B) Sleep on
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    C) Jump up where you are
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="as5" onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    D) Read on
                  </label>
                </div>
              </div>
            </div>








            <div className='container'>
              B. Listen and fill in the gaps.
              <br /><br />Dung Beetle : Come on! Of course, I had to take them with me. They are my
              <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
              <br /><br />Axebug : Here you are, finally! The spaceship is almost ready. We will
              <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} /> soon.
              <br /><br />Axebug : Follow me! Let’s get your clothes changed for the journey.
              <br /><br />Dung Beetle :
              <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />?
              I have
              <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} /> some with me...
              <br /><br />Axebug: Hah hah! You can’t travel to the space in jeans. You need space suits.
              <br /><br />Axebug: There is one for
              <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
              <br /><br />Axebug: This is for you.
              <br /><br />Axebug:
              <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />
              this is yours
              <br /><br />Dung Beetle: I think my own pyjamas are more comfortable
              <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} /> .
              <br /><br />Axebug: Come on! All aboard.
              <br /><br />Axebug: We are ready to take off if you are both
              <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} /> , can you plaese check the
              <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} /> for me.
              <br /><br />Dung Beetle: What to you want to me check? This is too complicated.
              <br /><br />Axebug: Tell me when you see the
              <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} /> notice on the screen.
              <br /><br />Spaceship computer : I think there is 9 seconds... 8...7...6...5...4...3...2...1... Launch!
              <br /><br />Axebug : Well... Here we go.
              <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} />
            </div>


            <div className='container'>
              <table>
                <tr>
                  <td>1. Suspend
                    <input className="form-input textformat" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />
                  </td>
                  <td>A. Information to use</td>
                </tr>
                <tr>
                  <td>
                    2. Approach
                    <input className="form-input textformat" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />
                  </td>
                  <td>B. Luckily it will happen</td>
                </tr>
                <tr>
                  <td>
                    3. Data
                    <input className="form-input textformat" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />
                  </td>
                  <td>C. To cancel something</td>
                </tr>
                <tr>
                  <td>
                    4. More Likely
                    <input className="form-input textformat" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />
                  </td>
                  <td>D. An area you can see</td>
                </tr>
                <tr>
                  <td>
                    5. Range
                    <input className="form-input textformat" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />
                  </td>
                  <td>E. To come closer</td>
                </tr>

              </table>
              <hr />
              <table>
                <tr>
                  <td>Housefly
                    <input className="form-input textformat" type="text" value={answer.result[0][2][6].student} onChange={(e) => setStudentOpenAnswer(0, 2, 6, e.target.value)} />
                  </td>
                  <td>A little look at something</td>
                </tr>
                <tr>
                  <td>
                    Come Round
                    <input className="form-input textformat" type="text" value={answer.result[0][2][7].student} onChange={(e) => setStudentOpenAnswer(0, 2, 7, e.target.value)} />
                  </td>
                  <td>A common type of fly that lives in people’s houses</td>
                </tr>
                <tr>
                  <td>
                    Glimpse
                    <input className="form-input textformat" type="text" value={answer.result[0][2][8].student} onChange={(e) => setStudentOpenAnswer(0, 2, 8, e.target.value)} />
                  </td>
                  <td>Dificult to understand</td>
                </tr>
                <tr>
                  <td>
                    Rumour
                    <input className="form-input textformat" type="text" value={answer.result[0][2][9].student} onChange={(e) => setStudentOpenAnswer(0, 2, 9, e.target.value)} />
                  </td>
                  <td>To change you opinion</td>
                </tr>
                <tr>
                  <td>
                    Complicated
                    <input className="form-input textformat" type="text" value={answer.result[0][2][10].student} onChange={(e) => setStudentOpenAnswer(0, 2, 10, e.target.value)} />
                  </td>
                  <td>Something spoken truly or not truly</td>
                </tr>
              </table>
            </div>




            <div className='container'>

              D. Unscramble the words. forma yazacak. yazma bölümü.
              <br /><br /><br /><br />

              <br /><br />1. Venrusodatu
              <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
              <br /><br />2. Sricouu
              <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
              <br /><br />3. Nlapsreo
              <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
              <br /><br />4. Jsmaypa
              <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
              <br /><br />5. Nhcula
              <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
              <br /><br />6. Qiruere
              <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
              <br /><br />7. Byfutretl
              <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
              <br /><br />8. Gkidndi
              <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
              <br /><br />9. Lamet
              <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
              <br /><br />10. Fopro
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
