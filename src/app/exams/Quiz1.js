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
            AXE QUIZ CHAPTER 1 EPISODE 1
            <div className='container'>
              A. Choose the correct answer
              <div className='row'>
                1. Who says ‘the World is flat’?
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
                2. Who do you think stinks the most?
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
                3. What’s the name of Axebug’s Spaceship?
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
                4. How do Axebug and his crew reach to the spaceship?
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
                5. What was the weather like on the argument day?
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
            </div>


            <div className='container'>

              Axebug: Tell me what brings you out here? Q1LB1
              <br /><br />Dung Beetle: Will you ask the
              <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
              or shall i do it?
              <br /><br />Narrator: Upon listening their argument...
              <br /><br />Axebug: Hmm!
              <br /><br />Axebug: It’s neither fl t nor round. The world is a
              <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} />
              <br /><br />Axebug: Hey! Just
              <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} />
              would you like to find the an wer by yourselves? Q1LB4
              <br /><br />Dung Beetle: Wow! This sounds
              <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} />.
              Let’s try to find the an wer.
              <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />
              <br /><br />Ladybug: I’ll find the answer, come hell or
              <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} />.
              <br /><br />Axebug: This way,
              <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} />
              I’m sure you will enjoy this journey
              <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} />. Q1LB9
              <br /><br />Axebug:
              <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} />.
              <br /><br />Axebug: I will show you something you have never seen before.
              <br /><br />Axebug: Over there! Right
              <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} />
              you’ll see it once we climb up the
              <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} />.
              <br /><br />Axebug: Oh, finall ! Come on! Let’s go in.
              <br /><br />Axebug: And here we are. Please
              <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value, true)} />.
            </div>


            <div className='container'>
              <table>
                <tr>
                  <td>1. Argument
                    <input className="form-input textformat" type="text" value={answer.result[0][2][1].student} onChange={(e) => setStudentOpenAnswer(0, 2, 1, e.target.value)} />
                  </td>
                  <td>A. A person with knowledge, smart enough</td>
                </tr>
                <tr>
                  <td>
                    2. Stubborn
                    <input className="form-input textformat" type="text" value={answer.result[0][2][2].student} onChange={(e) => setStudentOpenAnswer(0, 2, 2, e.target.value)} />
                  </td>
                  <td>B. Travel in a period of time</td>
                </tr>
                <tr>
                  <td>
                    3. Accept
                    <input className="form-input textformat" type="text" value={answer.result[0][2][3].student} onChange={(e) => setStudentOpenAnswer(0, 2, 3, e.target.value)} />
                  </td>
                  <td>C. A negative discussion between two or more people</td>
                </tr>
                <tr>
                  <td>
                    4. Wise
                    <input className="form-input textformat" type="text" value={answer.result[0][2][4].student} onChange={(e) => setStudentOpenAnswer(0, 2, 4, e.target.value)} />
                  </td>
                  <td>D. To receive a thought or something that someone has given to you</td>
                </tr>
                <tr>
                  <td>
                    5. Journey
                    <input className="form-input textformat" type="text" value={answer.result[0][2][5].student} onChange={(e) => setStudentOpenAnswer(0, 2, 5, e.target.value)} />
                  </td>
                  <td>E. Connected to a purpose or opinion very much</td>
                </tr>

              </table>
              <hr />
              <table>
                <tr>
                  <td>Experience
                    <input className="form-input textformat" type="text" value={answer.result[0][2][6].student} onChange={(e) => setStudentOpenAnswer(0, 2, 6, e.target.value)} />
                  </td>
                  <td>The type of liquid change It’s form to a cold solid matter by freezing</td>
                </tr>
                <tr>
                  <td>
                    Ice
                    <input className="form-input textformat" type="text" value={answer.result[0][2][7].student} onChange={(e) => setStudentOpenAnswer(0, 2, 7, e.target.value)} />
                  </td>
                  <td>Practical knowledge of your own</td>
                </tr>
                <tr>
                  <td>
                    Bug
                    <input className="form-input textformat" type="text" value={answer.result[0][2][8].student} onChange={(e) => setStudentOpenAnswer(0, 2, 8, e.target.value)} />
                  </td>
                  <td>The distance covered by a spaceship, airplane or a vehicle</td>
                </tr>
                <tr>
                  <td>
                    Range
                    <input className="form-input textformat" type="text" value={answer.result[0][2][9].student} onChange={(e) => setStudentOpenAnswer(0, 2, 9, e.target.value)} />
                  </td>
                  <td>Strength or energy</td>
                </tr>
                <tr>
                  <td>
                    Force
                    <input className="form-input textformat" type="text" value={answer.result[0][2][10].student} onChange={(e) => setStudentOpenAnswer(0, 2, 10, e.target.value)} />
                  </td>
                  <td>An invertebrate, type of insect</td>
                </tr>
              </table>
            </div>




            <div className='container'>

              D. Unscramble the words. forma yazacak. yazma bölümü.
              <br /><br /><br /><br />

              <br /><br />1. Tnksiy
              <input className="form-input textformat" type="text" value={answer.result[0][3][1].student} onChange={(e) => setStudentOpenAnswer(0, 3, 1, e.target.value, true)} />
              <br /><br />2. Teriponnuprt
              <input className="form-input textformat" type="text" value={answer.result[0][3][2].student} onChange={(e) => setStudentOpenAnswer(0, 3, 2, e.target.value, true)} />
              <br /><br />3. Derttecul
              <input className="form-input textformat" type="text" value={answer.result[0][3][3].student} onChange={(e) => setStudentOpenAnswer(0, 3, 3, e.target.value, true)} />
              <br /><br />4. Eyurjon
              <input className="form-input textformat" type="text" value={answer.result[0][3][4].student} onChange={(e) => setStudentOpenAnswer(0, 3, 4, e.target.value, true)} />
              <br /><br />5. Yallfni
              <input className="form-input textformat" type="text" value={answer.result[0][3][5].student} onChange={(e) => setStudentOpenAnswer(0, 3, 5, e.target.value, true)} />
              <br /><br />6. Ioqeustn
              <input className="form-input textformat" type="text" value={answer.result[0][3][6].student} onChange={(e) => setStudentOpenAnswer(0, 3, 6, e.target.value, true)} />
              <br /><br />7. Nurdo
              <input className="form-input textformat" type="text" value={answer.result[0][3][7].student} onChange={(e) => setStudentOpenAnswer(0, 3, 7, e.target.value, true)} />
              <br /><br />8. Aillgev
              <input className="form-input textformat" type="text" value={answer.result[0][3][8].student} onChange={(e) => setStudentOpenAnswer(0, 3, 8, e.target.value, true)} />
              <br /><br />9. Yenveutlla
              <input className="form-input textformat" type="text" value={answer.result[0][3][9].student} onChange={(e) => setStudentOpenAnswer(0, 3, 9, e.target.value, true)} />
              <br /><br />10. Olmwcee
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
