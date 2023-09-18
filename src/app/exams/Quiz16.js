import React, { useState } from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import { Link } from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Quiz16Answer.json");

export default function Quiz16(props) {
  const [answer, setAnswer] = useState({ ...answerEmpty });
  const [pageNo, setPageNo] = useState(1);
  const [maxPage] = useState(5);

  const nextPage = () => {
    if (pageNo < maxPage - 1) setPageNo(pageNo + 1);
    // props.sendExam(answer,"QUIZ", false)
  };
  const prevPage = () => {
    if (pageNo > 0) setPageNo(pageNo - 1);
    // props.sendExam(answer,"QUIZ", false)
  };

  const setStudentOpenAnswer = (
    skils,
    section,
    queationNumber,
    value,
    compare
  ) => {
    const temp = { ...answer };
    temp.result[skils][section][queationNumber].student = value;
    let finalScore = temp.result[skils][section][queationNumber].weigth;

    var similarity = stringSimilarity.compareTwoStrings(
      clearText(value),
      clearText(temp.result[skils][section][queationNumber].answer)
    );
    finalScore =
      similarity *
      parseFloat(temp.result[skils][section][queationNumber].weigth);
    temp.result[skils][section][queationNumber].score = finalScore;

    if (
      finalScore >
      (temp.result[skils][section][queationNumber].weigth / 10) * 6
    ) {
      temp.result[skils][section][queationNumber].functionScore = true;
    } else {
      temp.result[skils][section][queationNumber].functionScore = false;
    }
    setAnswer(temp);
  };
  const getSpeechText = (text, questionNumber) => {
    setStudentOpenAnswer(0, 4, questionNumber, text, true);
  };

  const clearText = (text) => {
    let newText = text
      .replace(".", "")
      .replace("'", "")
      .replace("!", "")
      .replace(",", "")
      .replace("’", "")
      .replace("?", "")
      .replace("-", "")
      .replace("_", "");
    newText = newText.toLowerCase();
    return newText;
  };

  return (
    <div className="container">
      <div className="card mt-5 mb-5">
        <div className="card-header">
          <div className="d-flex justify-content-center">
            <h4>
              <strong><Link to="/mytasks"> RETURN TASK LIST</Link></strong>
            </h4>
          </div>
        </div>

        <div className="card-header">
          <div className="d-flex justify-content-center">
            <h1>
              <strong> QUIZ CHAPTER 4 EPISODE 16</strong>
            </h1>
          </div>
        </div>
        <div className="card-body p-5">
          <div>
            {answer ? (
              <React.Fragment>
                <div style={{ fontSize: "18pt" }}>
                  {pageNo === 0 ? (
                    <React.Fragment>
                      <div className="alert alert-dark" role="alert">
                        <strong> A. Choose the correct answer.</strong>
                      </div>
                      <div className="row">
                        <strong>1. They received __________ call.</strong>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as1"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 1, "A")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            A) book
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as1"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 1, "B")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            B) mail
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as1"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 1, "C")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            C) food order
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as1"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 1, "D")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            D) SOS
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <strong>
                          2. The aid was requested by the ____________.
                        </strong>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as2"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 2, "A")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            A) robots
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as2"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 2, "B")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            B) president
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as2"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 2, "C")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            C) headquarter
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as2"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 2, "D")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            D) police
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>
                          3. They travel with ____________ to the head quarter.
                        </strong>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as3"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 3, "A")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            A) Area C923
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as3"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 3, "B")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            B) Area C924
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as3"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 3, "C")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            C) Area C925
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as3"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 3, "D")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            D) Area C926
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>
                          4. Dung beetle loves the vehicle because ____________
                          .
                        </strong>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as4"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 4, "A")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            A) it is green
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as4"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 4, "B")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            B) it is soft
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as4"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 4, "C")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            C) it is round
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as4"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 4, "D")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            D) it smells
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <strong>5. Why did they send an SOS?</strong>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as5"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 5, "A")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            A) Trafic accident
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as5"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 5, "B")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            B) Energy shortage
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as5"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 5, "C")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            C) Health problem
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="as5"
                            onChange={(e) => setStudentOpenAnswer(0, 0, 5, "D")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            D) Disagreement
                          </label>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : null}
                  {pageNo === 1 ? (
                    <React.Fragment>
                      <div className="alert alert-dark" role="alert">
                        <strong> B. Listen and fill in the gaps.</strong>
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/ouiz_16_listening.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="paragraf">
                        <strong>RAXEBUG:</strong> Can anything pass
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][1].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 1, e.target.value, true)
                          }
                        />
                        at all?
                      </div>
                      <div className="paragraf">
                        <strong>LADYBUG:</strong> No, it can’t.
                      </div>
                      <div className="paragraf">
                        <strong>AXEBUG: </strong>Then, the car and the
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][2].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 2, e.target.value, true)
                          }
                        />
                        are going with the same speed, right?
                      </div>
                      <div className="paragraf">
                        <strong>DUNG BEETLE : </strong> Yes.
                      </div>

                      <div className="paragraf">
                        <strong>AXEBUG:</strong> So, according to the person
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][3].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 3, e.target.value, true)
                          }
                        />
                        , headlights are not going in front of the car.
                      </div>
                      <div className="paragraf">
                        <strong>DUNG BEETLE : </strong>WMaybe, he is behind the
                        car, he can’t see
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][4].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 4, e.target.value, true)
                          }
                        />
                        .
                      </div>
                      <div className="paragraf">
                        <strong>AXEBUG: </strong>The general relativity only
                        examines
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][5].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 5, e.target.value, true)
                          }
                        />
                        which change speed.
                      </div>
                      <div className="paragraf">
                        <strong>DUNG BEETLE :</strong> But, light speed is
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][6].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 6, e.target.value, true)
                          }
                        />
                      </div>
                      <div className="paragraf">
                        <strong>AXEBUG:</strong> Yeap.
                      </div>
                      <div className="paragraf">
                        <strong>AXEBUG: </strong>General relativity explains us
                        blackholes and the expanding
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][7].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 7, e.target.value, true)
                          }
                        />
                        model.
                      </div>
                      <div className="paragraf">
                        <strong>DUNG BEETLE :</strong>
                        I guess special relativity is just in constant speed
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][8].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 8, e.target.value, true)
                          }
                        />
                        .
                      </div>
                      <div className="paragraf">
                        <strong>AXEBUG:</strong> General
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][9].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 9, e.target.value, true)
                          }
                        />
                        tells us about gravitional field, time and their
                        effects.
                      </div>
                      <div className="paragraf">
                        <strong>AXEBUG:</strong> It also opens up how blackholes
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][10].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 10, e.target.value, true)
                          }
                        />
                        after hypernova explosions.
                      </div>
                      <div className="paragraf">
                        <strong>DUNG BEETLE :</strong> Space, time, blackhole,
                        hypernova, relativity…
                      </div>
                      <div className="paragraf">
                        <strong>RDUNG BEETLE :</strong> It’s just too much to
                        sink in.
                      </div>
                    </React.Fragment>
                  ) : null}
                  {pageNo === 2 ? (
                    <React.Fragment>
                      <div className="alert alert-dark" role="alert">
                        <strong>
                          {" "}
                          C. Match the words with their definitions
                        </strong>
                      </div>

                      <div className="row">
                        <div className="col-2"> 1. Blackhole</div>
                        <div className="col-1">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][1].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 1, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-9">
                          <div className="paragraf alert alert-success">
                            <strong>A. </strong> Any natural object outside of
                            the Earth's atmosphere.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 2. Spinning</div>
                        <div className="col-1">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][2].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 2, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-9">
                          <div className="paragraf alert alert-success">
                            <strong>B. </strong> A region in space where gravity
                            is so strong that nothing, not even light, can
                            escape.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 3. Take Off</div>
                        <div className="col-1">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][3].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 3, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-9">
                          <div className="paragraf alert alert-success">
                            <strong>C. </strong> Leaving ground and beginning to
                            fly.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 4. Celestial Body</div>
                        <div className="col-1">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][4].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 4, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-9">
                          <div className="paragraf alert alert-success">
                            <strong>D. </strong> To become understood or known..
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          {" "}
                          5. To become understood or known..
                        </div>
                        <div className="col-1">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][5].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 5, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-9">
                          <div className="paragraf alert alert-success">
                            <strong>E. </strong> Rotating, turning around.
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : null}
                  {pageNo === 3 ? (
                    <React.Fragment>
                      <div className="alert alert-dark" role="alert">
                        <strong> D. Unscramble the words.</strong>
                      </div>
                      <div className="row">
                        <div className="col-3"> 1. LTAF </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][1].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                1,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 2. COCUR </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][2].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                2,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 3. EHSET </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][3].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                3,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 4. CARFESU </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][4].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                4,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 5. NOSRES</div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][5].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                5,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 6. RBATEH </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][6].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                6,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 7. TEDSYOR </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][7].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                7,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 8. GTUREYLN </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][8].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                8,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 9. OWASEME </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][9].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                9,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3"> 10. USCTK </div>
                        <div className="col-9">
                          <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[0][3][10].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(
                                0,
                                3,
                                10,
                                e.target.value,
                                true
                              )
                            }
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  ) : null}
                  {pageNo === 4 ? (
                    <React.Fragment>
                      <div className="alert alert-dark" role="alert">
                        <strong>
                          {" "}
                          A. Listen to the audio. Then, repeat the sentences
                          clearly.
                        </strong>
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/c4_e16_pg24_p15.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber="S1"
                        />
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/c4_e16_pg25_p17.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber="S2"
                        />
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/c4_e16_pg26_p1.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber="S3"
                        />
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/c4_e16_pg26_p5.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber="S4"
                        />
                      </div>
                    </React.Fragment>
                  ) : null}
                  {pageNo === 5 ? <FinishExam /> : null}
                </div>
              </React.Fragment>
            ) : null}
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            {pageNo !== 0 ? (
              <div className="col-auto">
                <button className="btn btn-success" onClick={() => prevPage()}>
                  PREV
                </button>
              </div>
            ) : null}
            {pageNo !== maxPage - 1 ? (
              <div className="col-auto pl-2">
                <button className="btn btn-success" onClick={() => nextPage()}>
                  NEXT
                </button>
              </div>
            ) : null}
            {pageNo === maxPage - 1 ? (
              <div className="col-auto pl-2">
                <button
                  className="btn btn-success"
                  onClick={() => props.sendExam(answer, "QUIZ", true)}
                >
                  FINISH EXAM
                </button>
              </div>
            ) : null}
            {/* <div className="col pl-4">
              <button className='btn btn-info pl-4' onClick={() => props.sendExam(answer,"QUIZ", false)}>SAVE EXAM</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
