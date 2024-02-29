import React, { useState } from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import { Link } from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Exam2Answer.json");

export default function Exam2(props) {
  const [answer, setAnswer] = useState({ ...answerEmpty });
  const [pageNo, setPageNo] = useState(0);
  const [maxPage] = useState(7);

  const nextPage = () => {
    if (pageNo < maxPage - 1) setPageNo(pageNo + 1);
    //props.sendExam(answer,"EXAM", false)
  };
  const prevPage = () => {
    if (pageNo > 0) setPageNo(pageNo - 1);
    //props.sendExam(answer,"EXAM", false)
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
    // if (compare) {
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
    setStudentOpenAnswer(3, 0, questionNumber, text, true);
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
            <h5 className="card-title mt-3">
              <h1>
                <strong>EXAM CHAPTER 2</strong>
              </h1>
            </h5>
          </div>
        </div>
        <div className="card-body p-5 pt-3">
          {answer ? (
            <React.Fragment>
              <div style={{ fontSize: "18pt" }}>
                {pageNo === 0 ? (
                    <React.Fragment>
                      <div className="alert alert-dark" role="alert">
                        <strong>
                          A. Read the text and fill in the blanks with the ords below.
                        </strong>
                      </div>
                      <div className="d-flex justify-content-center pb-3">
                        <strong>
                          <h3>WORMHOLE - KILOMETERS - PAPER - SPHERE - EXACTLY</h3>
                        </strong>
                      </div>
                      <div className="paragraf">
                        <strong>Ladybug:</strong>: Can you explain what a wormhole is?
                      </div>
                      <div className="paragraf">
                        <strong>Dung beetle:</strong>: Did we just pass millions of
                        <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[1][0][6].student}
                            onChange={(e) =>
                                setStudentOpenAnswer(1, 0, 6, e.target.value)
                            }
                        />
                        in a few minutes?
                      </div>

                      <div className="paragraf">
                        <strong>Axebug:</strong>: I will explain what a
                        <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[1][0][6].student}
                            onChange={(e) =>
                                setStudentOpenAnswer(1, 0, 6, e.target.value)
                            }
                        />
                        is, but let’s be all eyes.
                      </div>

                      <div className="paragraf">
                        <strong>Axebug:</strong>: Ummm...
                      </div>
                      <div className="paragraf">
                        <strong>Ladybug:</strong>: What?
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong>: It is errrm...
                      </div>
                      <div className="paragraf">
                        <strong>Dung beetle:</strong>: What is it?
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong>: Aahaa! This is
                        <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[1][0][6].student}
                            onChange={(e) =>
                                setStudentOpenAnswer(1, 0, 6, e.target.value)
                            }
                        />
                        what a worm hole looks like.
                      </div>
                      <div className="paragraf">
                        <strong>Ladybug:</strong>: It is a
                        <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[1][0][6].student}
                            onChange={(e) =>
                                setStudentOpenAnswer(1, 0, 6, e.target.value)
                            }
                        />
                        then.
                      </div>

                      <div className="paragraf">
                        <strong>Axebug:</strong>: Yes, it is.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong>: When we entered the sphere, we passed millions of kilometers in a
                        few minutes.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong>:So how did this happen?
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong>: It is a piece of cake for me to explain. Just give me a pen and
                        <input
                            className="form-input textformat"
                            type="text"
                            value={answer.result[1][0][6].student}
                            onChange={(e) =>
                                setStudentOpenAnswer(1, 0, 6, e.target.value)
                            }
                        />
                        .
                      </div>
                      <div className="paragraf">
                        <strong>Dung beetle:</strong>: Take these.
                      </div>


                    </React.Fragment>
                ) : null}

                {pageNo === 1 ? (
                    <React.Fragment>
                      <div>
                        <div className="alert alert-dark" role="alert">
                          <strong>
                            B. Match the idioms with the correct definitions
                          </strong>
                        </div>


                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Piece of a cake
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Blind as a bat
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Leave no stone unturned
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Get the wrong sow by the ear
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Let’s be all eyes
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Houston, we have a problem
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Hold your horses
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          One man’s trash is another man’s treasure
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Recharge your batteries
                        </div>
                        <div className="paragraf">
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][6].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 6, e.target.value)
                              }
                          />
                          Take the biscuit
                        </div>


                        <div className="paragraf">





                          a. To be calm.<br/>
                          b. To get back to your usual power or strength.<br/>
                          c. A task which is done very easily.<br/>
                          d. Had enough of something.<br/>
                          e. Something which is not important for a person, but which means a lot to another
                          person.<br/>
                          f. A person who can’t see very well.<br/>
                          g. To use every single way to accomplish something.<br/>
                          h. To misunderstand.<br/>
                          i. There is a problem to solve.<br/>
                          j. To be careful.
                        </div>


                      </div>
                    </React.Fragment>
                ) : null}

                {pageNo === 2 ? (
                    <React.Fragment>
                      <div>
                        <div className="alert alert-dark" role="alert">
                          <strong>
                            C. Read the following statements and choose TRUE (✓) or FALSE (X).
                          </strong>
                        </div>


                        <table>
                          <tr>
                            <td></td>
                            <td>TRUE</td>
                            <td>FALSE</td>
                          </tr>
                          <tbody>
                          <tr>
                            <td>1. The thing that watchmen noticed was ZZZ55</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td>2. A wormhole is a sphere.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td>3. Entering a wormhole makes the distances closer.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td>4. ZZZ55 entered a black hole.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td>5. Watchmen took the control of the spaceship.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td> 6. Axebug crew went to the Robug Planet to visit historical places.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td> 7. They went to the headquarter by ZZZ55.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td> 8. The SOS call was from the watchmen.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td> 9. The Robug Colony has energy shortage problems.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          <tr>
                            <td>  10. They need to find the element of robotixium.</td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                            <td><input
                                className="form-input textformat"
                                type="checkbox"
                                value={answer.result[1][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(1, 0, 6, e.target.value)
                                }
                            /></td>
                          </tr>
                          </tbody>
                        </table>


                      </div>
                    </React.Fragment>
                ) : null}

                {pageNo === 3 ? (
                    <React.Fragment>
                      <div>
                        <div className="alert alert-dark" role="alert">
                          <strong>A. Listen and fill in the blanks.</strong>
                        </div>
                        <div className="alert alert-dark" role="alert">
                          <audio
                              controls
                              className="w-100"
                              style={{backgroundColor: "black", height: 45}}
                          >
                            <source
                                src={`https://app.axebug.com/axebug/assets/axe_exam_c_1_listening_a.mp3`}
                                type="audio/mpeg"
                            />
                          </audio>
                        </div>
                        <div className="paragraf">
                        <strong>1:</strong>
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][1].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(1, 0, 1, e.target.value)
                          }
                        />

                      </div>
                      <div className="paragraf">
                        <strong>2:</strong>
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][2].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(1, 0, 2, e.target.value)
                          }
                        />

                      </div>
                        <div className="paragraf">
                          <strong>3:</strong>
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][3].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 3, e.target.value)
                              }
                          />

                        </div>
                        <div className="paragraf">
                          <strong>4:</strong>
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][4].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 4, e.target.value)
                              }
                          />

                        </div>
                        <div className="paragraf">
                          <strong>5:</strong>
                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][5].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(1, 0, 5, e.target.value)
                              }
                          />
                        </div>
                        <div className="paragraf">
                          <strong>6:</strong>

                          <input
                              className="form-input textformat"
                              type="text"
                              value={answer.result[1][0][5].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(1, 0, 5, e.target.value)
                          }
                        />



                      </div>
                      <div className="paragraf">
                        <strong>7:</strong>
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][7].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(1, 0, 7, e.target.value)
                          }
                        />

                      </div>

                      <div className="paragraf">
                        <strong>8:</strong>

                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][8].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(1, 0, 8, e.target.value)
                          }
                        />
                      </div>
                      <div className="paragraf">
                        <strong>9:</strong>
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][9].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(1, 0, 9, e.target.value)
                          }
                        />
                      </div>
                      <div className="paragraf">
                        <strong>10 :</strong>
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][10].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(1, 0, 10, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}
                {pageNo === 4 ? (
                  <React.Fragment>
                    <div>
                      <div className="alert alert-dark" role="alert">
                        <strong>
                          Listen and fill the blanks
                        </strong>
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/axe_exam_c_1_listening_b.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> These are our friends. From now on, they can <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][10].student}
                          onChange={(e) =>
                              setStudentOpenAnswer(1, 0, 10, e.target.value)
                          }
                      /> freely.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> You can go back to the  <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][10].student}
                          onChange={(e) =>
                              setStudentOpenAnswer(1, 0, 10, e.target.value)
                          }
                      />. I will take care of our guests.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> You have come a long way. Take a break. Eat and  <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][10].student}
                          onChange={(e) =>
                              setStudentOpenAnswer(1, 0, 10, e.target.value)
                          }
                      />.
                        We will talk afterwards.
                      </div>
                      <div className="paragraf">
                        <strong>TEN HOURS LATER </strong>
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong>My friends! So glad to see you. We need your help!
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong>We couldn’t ignore your <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][10].student}
                          onChange={(e) =>
                              setStudentOpenAnswer(1, 0, 10, e.target.value)
                          }
                      /> of course.
                      </div>
                      <div className="paragraf">
                        <strong> Ladybug: </strong>Tell me about it!
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> Why did you send an sos? What’s the problem?
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> We arrived to this <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[1][0][10].student}
                          onChange={(e) =>
                              setStudentOpenAnswer(1, 0, 10, e.target.value)
                          }
                      /> long before you ever lived.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> What?
                      </div>
                      <div className="paragraf">
                        <strong>Dung Beetle: </strong>How long?
                      </div>
                      <div className="paragraf">
                      <strong>Ladybug:</strong> I don’t get it!
                      </div>

                    </div>
                  </React.Fragment>
                ) : null}
                {pageNo === 5 ? (
                  <React.Fragment>
                    <div>

                      <div className="row">
                        <div className="col-6">

                          <div className="alert alert-dark" role="alert">
                            <strong>
                              A. Write the definitions of the following words.
                            </strong>
                          </div>


                          <div className="paragraf">
                            <strong>SOS :</strong> <input
                              style={{width: 150}}
                              className="form-input textformat border border-success"
                              type="text"
                              value={answer.result[2][0][1].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(2, 0, 1, e.target.value)
                              }
                          />
                          </div>
                          <div className="paragraf">
                            <strong>RECEIVE :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][1].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 1, e.target.value)
                                }
                            />
                          </div>

                          <div className="paragraf">
                            <strong>FETCH :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][2].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 2, e.target.value)
                                }
                            />
                          </div>

                          <div className="paragraf">
                            <strong>AID:</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][3].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 3, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>TARGET :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][3].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 3, e.target.value)
                                }
                            />
                          </div>


                          <div className="paragraf">
                            <strong>REQUEST :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][4].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 4, e.target.value)
                                }
                            />
                          </div>

                          <div className="paragraf">
                            <strong>UNFASTENe:</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][5].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 5, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>STROLL AROUND :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][5].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 5, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>MISTAKE :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 6, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>SALVATION :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 6, e.target.value)
                                }
                            />
                          </div>
                        </div>


                        <div className="col-6">
                          <div className="alert alert-dark" role="alert">
                            <strong>
                              B. Write an antonym for each word.
                            </strong>
                          </div>


                          <div className="paragraf">
                            <strong>EASY :</strong> <input
                              style={{width: 150}}
                              className="form-input textformat border border-success"
                              type="text"
                              value={answer.result[2][0][1].student}
                              onChange={(e) =>
                                  setStudentOpenAnswer(2, 0, 1, e.target.value)
                              }
                          />
                          </div>
                          <div className="paragraf">
                            <strong>SLOW DOWN :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][1].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 1, e.target.value)
                                }
                            />
                          </div>

                          <div className="paragraf">
                            <strong>GO FAST :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][2].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 2, e.target.value)
                                }
                            />
                          </div>

                          <div className="paragraf">
                            <strong>DECREASE:</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][3].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 3, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>ENTER :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][3].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 3, e.target.value)
                                }
                            />
                          </div>


                          <div className="paragraf">
                            <strong>MOVE :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][4].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 4, e.target.value)
                                }
                            />
                          </div>

                          <div className="paragraf">
                            <strong>EXIT: </strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][5].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 5, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>THRILLED :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][5].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 5, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>COMPLETE :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 6, e.target.value)
                                }
                            />
                          </div>
                          <div className="paragraf">
                            <strong>ONE BY ONE :</strong>
                            <input
                                style={{width: 150}}
                                className="form-input textformat border border-success"
                                type="text"
                                value={answer.result[2][0][6].student}
                                onChange={(e) =>
                                    setStudentOpenAnswer(2, 0, 6, e.target.value)
                                }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}

                {pageNo === 6 ? (
                  <React.Fragment>
                    <div>
                      <div className="alert alert-dark" role="alert">
                        <strong>
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
                            src={`https://app.axebug.com/axebug/assets/p015_02_c1e1.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber={1}
                        />
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/p043_02_c1e2.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber={2}
                        />
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/p075_01_c1e3.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber={3}
                        />
                      </div>
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/p099_01_c1e4.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="border border-success p-3 mt-3">
                        <SpechText
                          getSpeechText={getSpeechText}
                          questionNumber={4}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}
                {pageNo === 7 ? <FinishExam /> : null}
              </div>
            </React.Fragment>
          ) : null}
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
                  onClick={() => props.sendExam(answer, "EXAM", true)}
                >
                  FINISH EXAM
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
