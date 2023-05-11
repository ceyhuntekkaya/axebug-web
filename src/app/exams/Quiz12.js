import React, { useState } from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import { Link } from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Quiz12Answer.json");

export default function Quiz12(props) {
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
              <strong> QUIZ CHAPTER 3 EPISODE 12</strong>
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
                          1. How many days does the travel take in earth time?
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
                            A) 1919
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
                            B) 1981
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
                            C) 1920
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
                            D) 1923
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <strong>
                          2. The journey gets shorter if they use ____________.
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
                            A) rat runs
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
                            B) rabbit runs
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
                            C) lion runs
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
                            D) wormhole
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>
                          3. What is the reason for the time difference between
                          going there and coming back?
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
                            A) Because their speed will be different.
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
                            B) Because of the rotation of the arrival point.
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
                            C) Because they will get tired on the way.
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
                            D) Because they will come back using a different
                            route.
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>
                          4. Why should they target their point before the
                          departure according to Axebug?
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
                            A) Because Axebug wants to have a well-organized
                            trip.
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
                            B) Because they don’t trust Robug.
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
                            C) Because the Dung Beetle wants to go back to Earth
                            before Christmas.
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
                            D) Because they don’t want to get lost.
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <strong>5.“Thinking straight” means _______.</strong>
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
                            A) To put something in a specific area.
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
                            B) Easy to figure out, or understand.
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
                            C) Not thinking very right or clearly.
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
                            D) Take a short break from a task.
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/quiz_12_listeng.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> So, we should target our point
                        before we start our journey. Otherwise we will get{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][1].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 1, e.target.value, true)
                          }
                        />
                        .
                      </div>
                      <div className="paragraf">
                        <strong>Dun beetle:</strong> Now I get it!
                      </div>
                      <div className="paragraf">
                        <strong>Axebug: </strong>There is a{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][2].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 2, e.target.value, true)
                          }
                        />
                        between days because of the actions in cosmos.
                      </div>
                      <div className="paragraf">
                        <strong>Dun beetle: </strong> We should follow all the
                        actions very{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][3].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 3, e.target.value, true)
                          }
                        />
                        .
                      </div>

                      <div className="paragraf">
                        <strong>Axebug:</strong> Spot on, my friend.
                      </div>
                      <div className="paragraf">
                        <strong>Ladybug: </strong>That means we can{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][4].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 4, e.target.value, true)
                          }
                        />
                        where we will land too.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13: </strong>So, I think we are all
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][5].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 5, e.target.value, true)
                          }
                        />
                        clear.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> Let’s take a rest, then we
                        will meet at the
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][5].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 5, e.target.value, true)
                          }
                        />
                        area.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> Come on!
                      </div>
                      <div className="paragraf">
                        <strong>Dun beetle: </strong>My favorite time! Let’s
                        take
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][5].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 5, e.target.value, true)
                          }
                        />
                        .
                      </div>
                      <div className="paragraf">
                        <strong>Black Writing:</strong>12 hours later. 5 Minutes
                        to departure. Earth time 9 o’clock
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> It’s time. Let’s begin. You
                        can board to ‘zzz55’.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong>From now on, we will run this
                        ship with a{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][7].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 7, e.target.value, true)
                          }
                        />
                        intelligence. Co-pilots are ladybug and dung beetle.
                      </div>
                      <div className="paragraf">
                        <strong>Monitor:</strong> Tower, we are ready to launch.
                      </div>
                      <div className="paragraf">
                        <strong>Watchman 2:</strong> Fuel tanks are ready.
                      </div>
                      <div className="paragraf">
                        <strong>Watchman 1:</strong> There is a robot in ‘zzz55’
                        to assist you.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> All set! Waiting for your{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][7].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 7, e.target.value, true)
                          }
                        />
                        , tower!
                      </div>
                      <div className="paragraf">
                        <strong>Tower:</strong> You can power up the engine and
                        launch.
                      </div>
                      <div className="paragraf">
                        <strong>Ladybug:</strong> Engine ready. We are
                        launching.
                      </div>
                      <div className="paragraf">
                        <strong>Watchman 2:</strong> Ready
                      </div>
                      <div className="paragraf">
                        <strong>Watchman 1:</strong> 3,2,1! You can
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][7].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 7, e.target.value, true)
                          }
                        />
                        .
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> That’s the 10th spaceship for
                        this task. I hope we will make it to the top this time…
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
                        <div className="col-2"> 1. Task</div>
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
                            <strong>A. </strong> Or else, alternatively.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 2. Otherwise</div>
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
                            <strong>B. </strong> A great success, just like
                            winning the lottery.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 3. Assist</div>
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
                            <strong>C. </strong> An assignment or a duty to be
                            accomplished.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 4. Jackpot</div>
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
                            <strong>D. </strong> An exact thing.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 5. Spot On</div>
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
                            <strong>E. </strong> To help someone or something.
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
                        <div className="col-3"> 1. negnie </div>
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
                        <div className="col-3"> 2. hetorweis </div>
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
                        <div className="col-3"> 3. raodb </div>
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
                        <div className="col-3"> 4. talot </div>
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
                        <div className="col-3"> 5. perdareut </div>
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
                        <div className="col-3"> 6. stak </div>
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
                        <div className="col-3"> 7. sastis </div>
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
                        <div className="col-3"> 8. ghasitrt </div>
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e12_pg26_p2.mp3`}
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e12_pg27_p4.mp3`}
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e12_pg27_p10.mp3`}
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e12_pg29_p3.mp3`}
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
