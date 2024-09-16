import React, {useEffect, useState} from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import { Link } from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Quiz2Answer.json");

export default function Quiz2(props) {
  const [answer, setAnswer] = useState({ ...answerEmpty });
  const [pageNo, setPageNo] = useState(0);
  const [maxPage] = useState(5);

  const nextPage = () => {
    if (pageNo < maxPage - 1) setPageNo(pageNo + 1);
    // props.sendExam(answer,"QUIZ", false)
  };
  const prevPage = () => {
    if (pageNo > 0) setPageNo(pageNo - 1);
    // props.sendExam(answer,"QUIZ", false)
  };
  const [returnLink, setReturnLink] = useState("/mytasks");
  useEffect(() => {
    const isTeacher = window.location.href

    if(isTeacher.includes("teacher")){
      setReturnLink("/teacher-contents/QUIZS")
      console.log(isTeacher)
    }
  }, [])
  const setStudentOpenAnswer = (
    skils,
    section,
    queationNumber,
    value,
    compare
  ) => {
    const fffff = answer.result;
    const temp = { ...fffff };
    temp[skils][section][queationNumber].student = value;
    let finalScore = temp[skils][section][queationNumber].weigth;

    var similarity = stringSimilarity.compareTwoStrings(
      clearText(value),
      clearText(temp[skils][section][queationNumber].answer)
    );
    finalScore =
      similarity * parseFloat(temp[skils][section][queationNumber].weigth);
    temp[skils][section][queationNumber].score = finalScore;

    if (finalScore > (temp[skils][section][queationNumber].weigth / 10) * 6) {
      temp[skils][section][queationNumber].functionScore = true;
    } else {
      temp[skils][section][queationNumber].functionScore = false;
    }
    const ggg = { result: temp };
    setAnswer(ggg);
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
              <strong><Link to={returnLink}> RETURN TASK LIST</Link></strong>
            </h4>
          </div>
        </div>
        <div className="card-header">
          <div className="d-flex justify-content-center">
            <h1>
              <strong> QUIZ CHAPTER 1 EPISODE 2</strong>
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
                        <strong>
                          1. Axebug says “To answer for your question is
                          ..........
                        </strong>
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
                            A) space monitor
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
                            B) space shuttle
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
                            C) space battle
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
                            D) spaceship
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <strong>
                          2. Dung Beetle says “Wouldn’t it be enough if we just
                          .................?”
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
                            A) climbed up a ladder
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
                            B) climbed up a rope
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
                            C) climbed up a tree
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
                            D) climbed up the Wall
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>3. They launch ..............</strong>
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
                            A) in the morning
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
                            B) in the afternoon
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
                            C) at sunset
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
                            D) at night
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>
                          4. Axebug’s spaceship looks like a ..............
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
                            A) butterfly
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
                            B) a bee
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
                            C) a housefly
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
                            D) a worm
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>5. Hold tight means ..............</strong>
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
                            A) stay where you are
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
                            B) sleep on
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
                            C) jump up where you are
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
                            D) read on
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
                            src={`https://app.axebug.com/axebug/assets/quiz_listening_c1_e2.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="paragraf">
                        <strong>Dung Beetle :</strong> Come on! Of course, I had
                        to take them with me. They are my
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][1].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 1, e.target.value, true)
                          }
                        />
                      </div>
                      <div className="paragraf">
                        <strong>Axebug :</strong> Here you are, finally! The
                        spaceship is almost ready. We will
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][2].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 2, e.target.value, true)
                          }
                        />{" "}
                        soon.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug :</strong> Follow me! Let’s get your
                        clothes changed for the journey.
                      </div>
                      <div className="paragraf">
                        <strong>Dung Beetle :</strong>
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][3].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 3, e.target.value, true)
                          }
                        />
                        ? I have
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][4].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 4, e.target.value, true)
                          }
                        />{" "}
                        some with me...
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> Hah hah! You can’t travel to
                        the space in jeans. You need space suits.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug: </strong>There is one for
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][5].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 5, e.target.value, true)
                          }
                        />
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> This is for you.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong>
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][6].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 6, e.target.value, true)
                          }
                        />
                        this is yours
                      </div>
                      <div className="paragraf">
                        <strong>Dung Beetle:</strong>I think my own pyjamas are
                        more comfortable
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][7].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 7, e.target.value, true)
                          }
                        />{" "}
                        .
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> Come on! All aboard.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> We are ready to take off if you
                        are both
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][8].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 8, e.target.value, true)
                          }
                        />{" "}
                        , can you plaese check the
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][9].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 9, e.target.value, true)
                          }
                        />{" "}
                        for me.
                      </div>
                      <div className="paragraf">
                        <strong>Dung Beetle:</strong> What to you want to me
                        check? This is too complicated.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> Tell me when you see the
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][10].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 10, e.target.value, true)
                          }
                        />{" "}
                        notice on the screen.
                      </div>
                      <div className="paragraf">
                        <strong>Spaceship computer :</strong> I think there is 9
                        seconds... 8...7...6...5...4...3...2...1... Launch!
                      </div>
                      <div className="paragraf">
                        <strong>Axebug :</strong> Well... Here we go.
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][11].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 11, e.target.value, true)
                          }
                        />
                      </div>{" "}
                    </React.Fragment>
                  ) : null}
                  {pageNo === 2 ? (
                    <React.Fragment>
                      <div className="alert alert-dark" role="alert">
                        <strong>
                          {" "}
                          C. Match the words / phrases with their definitions
                        </strong>
                      </div>

                      <div className="row">
                        <div className="col-2"> 1. Suspend</div>
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
                            <strong>A. </strong> Information to use
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 2. Approach</div>
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
                            <strong>B. </strong> Luckily it will happen
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-2"> 3. Data</div>
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
                            <strong>C. </strong> To cancel something
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-2"> 4. More Likely</div>
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
                            <strong>D. </strong> An area you can see
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-2"> 5. Range</div>
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
                            <strong>E. </strong> To come closer
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-2"> Housefly</div>
                        <div className="col-2">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][6].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 6, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-8">A little look at something</div>
                      </div>
                      <div className="row">
                        <div className="col-2"> Come Round</div>
                        <div className="col-2">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][7].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 7, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-8">
                          A common type of fly that lives in people’s houses
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> Glimpse</div>
                        <div className="col-2">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][8].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 8, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-8">Dificult to understand</div>
                      </div>
                      <div className="row">
                        <div className="col-2"> Rumour</div>
                        <div className="col-2">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][9].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 9, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-8">To change you opinion</div>
                      </div>
                      <div className="row">
                        <div className="col-2"> Complicated</div>
                        <div className="col-2">
                          <input
                            className="form-input w-100"
                            type="text"
                            value={answer.result[0][2][10].student}
                            onChange={(e) =>
                              setStudentOpenAnswer(0, 2, 10, e.target.value)
                            }
                          />
                        </div>
                        <div className="col-8">
                          Something spoken truly or not truly
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
                        <div className="col-3"> 1. venrusodatu </div>
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
                        <div className="col-3"> 2. sricouu </div>
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
                        <div className="col-3"> 3. nlapsreo </div>
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
                        <div className="col-3"> 4. jsmaypa </div>
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
                        <div className="col-3"> 5. nhcula </div>
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
                        <div className="col-3"> 6. qiruere </div>
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
                        <div className="col-3"> 7. byfutretl </div>
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
                        <div className="col-3"> 8. gkidndi </div>
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
                        <div className="col-3"> 9. lamet </div>
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
                        <div className="col-3"> 10. fopro </div>
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
                      A. Listen to the audio. Then, repeat the sentences
                      clearly.
                      <div className="alert alert-dark" role="alert">
                        <audio
                          controls
                          className="w-100"
                          style={{ backgroundColor: "black", height: 45 }}
                        >
                          <source
                            src={`https://app.axebug.com/axebug/assets/p035_01_c1e2.mp3`}
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
                            src={`https://app.axebug.com/axebug/assets/p037_03_c1e2.mp3`}
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
                            src={`https://app.axebug.com/axebug/assets/p054_01_c1e2.mp3`}
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
                            src={`https://app.axebug.com/axebug/assets/p060_03_c1e2.mp3`}
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
