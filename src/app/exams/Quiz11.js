import React, { useState } from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import { Link } from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Quiz11Answer.json");

export default function Quiz11(props) {
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
              <strong> QUIZ CHAPTER 3 EPISODE 11</strong>
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
                          1. According to the space map, where are they exactly?
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
                            A) M35
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
                            B) M36
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
                            C) M44
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
                            D) M45
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <strong>
                          2. The time of the travel gets shorter if they use?
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
                          3. How many stops are there in the journey including
                          the launch and arrival point?
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
                            A) seven stops
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
                            B) four stops
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
                            C) five stops
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
                            D) six stops
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <strong>
                          4. Who is the enemy that Robug talked about?
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
                            A) wormhole
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
                            B) black hole
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
                            C) Gangster Bossroac
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
                            D) Robug’s friend
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <strong>
                          5. 'Slow and steady always win the race’ means
                          ___________
                        </strong>
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
                            A) Using all bravery and courage to stay strong.
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
                            B) A person affecting other people badly because
                            s/he chooses to be on the dark side.
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
                            C) Someone being careful and calm always succeeds.
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
                            D) Get ready for a challenge.
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/quiz_11_listeng.mp3`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> We are voyagers in{" "}
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
                        <strong>Axebug:</strong> Let’s go through our plan to{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][2].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 2, e.target.value, true)
                          }
                        />
                        DESIGNEXIUM.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13: </strong>Yes guys
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13: </strong> Last check before the{" "}
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
                        <strong>Robug 13:</strong>The trek is a long{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][4].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 4, e.target.value, true)
                          }
                        />
                        to you, of course.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13: </strong>But you should focus on which
                        speed time is flowing.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug: </strong>Umm…
                      </div>
                      <div className="paragraf">
                        <strong>Axebug: </strong> We
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][5].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 5, e.target.value, true)
                          }
                        />
                        should.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug: </strong> Starting from space maps.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13: </strong>{" "}
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
                        <strong>Robug 13:</strong>Have a look at the maps.
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> Let’s
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][7].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 7, e.target.value, true)
                          }
                        />
                        the stars.
                      </div>
                      <div className="paragraf">
                        <strong>Ladybug:</strong> Yeah… stars…
                      </div>
                      <div className="paragraf">
                        <strong>Dung beetle:</strong> Don’t come if you don’t
                        want to!
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong> You have seen this map
                        before.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong>Practice the map very{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][6].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 6, e.target.value, true)
                          }
                        />
                        .
                      </div>
                      <div className="paragraf">
                        <strong>Axebug:</strong> You’re right. We don’t want to
                        get lost.
                      </div>
                      <div className="paragraf">
                        <strong>Robug 13:</strong>Not a single minute to lose.{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][8].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 8, e.target.value, true)
                          }
                        />
                        your sleeves.
                      </div>

                      <div className="paragraf">
                        <strong>Dung beetle:</strong>Hurray! A new a{" "}
                        <input
                          className="form-input textformat"
                          type="text"
                          value={answer.result[0][1][9].student}
                          onChange={(e) =>
                            setStudentOpenAnswer(0, 1, 9, e.target.value, true)
                          }
                        />
                        begins!
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
                        <div className="col-2"> 1. Launch</div>
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
                            <strong>A. </strong> Possibility, probability.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 2. Abandoned</div>
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
                            <strong>B. </strong> A hopeless search for
                            something.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 3. Wild goose chase</div>
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
                            <strong>C. </strong> To send off, usually used for
                            planes of air crafts.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 4. Chance</div>
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
                            <strong>D. </strong> Making a big deal out of
                            something, exaggerating.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2"> 5. Make a fuss</div>
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
                            <strong>E. </strong> Deserted or left by themselves.
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
                        <div className="col-3"> 1. fainetdeyl </div>
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
                        <div className="col-3"> 2. variral </div>
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
                        <div className="col-3"> 3. goryeva </div>
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
                        <div className="col-3"> 4. kees </div>
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
                        <div className="col-3"> 5. edsep </div>
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
                        <div className="col-3"> 6. onatbimi </div>
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
                        <div className="col-3"> 7. betrirel </div>
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
                        <div className="col-3"> 8. ragnsgte </div>
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e11_pg18_p3.mp3`}
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e11_pg19_p12.mp3`}
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e11_pg21_p5.mp3`}
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
                            src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/c3_e11_pg23_p1.mp3`}
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
