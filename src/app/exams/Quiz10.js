import React, {useEffect, useState} from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import {Link} from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Quiz10Answer.json");

export default function Quiz10(props) {
    const [answer, setAnswer] = useState({...answerEmpty});
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

        if (isTeacher.includes("teacher")) {
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
        const temp = {...answer};
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
                            <strong><Link to={returnLink}> RETURN TASK LIST</Link></strong>
                        </h4>
                    </div>
                </div>

                <div className="card-header">
                    <div className="d-flex justify-content-center">
                        <h1>
                            <strong> QUIZ CHAPTER 3 EPISODE 10</strong>
                        </h1>
                    </div>
                </div>
                <div className="card-body p-5">
                    <div>
                        {answer ? (
                            <React.Fragment>
                                <div style={{fontSize: "18pt"}}>
                                    {pageNo === 0 ? (
                                        <React.Fragment>
                                            <div className="alert alert-dark" role="alert">
                                                <strong> A. Choose the correct answer.</strong>
                                            </div>
                                            <div className="row">
                                                <strong>
                                                    1. Designexium is the element of _________________ .
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
                                                        A) love and peace
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
                                                        B) imagination and creativity
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
                                                        C) power and strength
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
                                                        D) courage and liberty
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <strong>
                                                    2. How did the Robug Colony know that there is an
                                                    existence of life on earth?
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
                                                        A) They reached a message from the earth.
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
                                                        B) They were watching the earth by telescopes
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
                                                        C) A robug fortune teller told them about it.
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
                                                        D) They know everything about the whole galaxy.
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <strong>
                                                    3. The message that the Robug Colony have reached is
                                                    __________________ .
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
                                                        A) poo rolled by a dung beetle.
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
                                                        B) garbage that is thrown away to space.
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
                                                        C) the golden record sent in 1977.
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
                                                        D) the smell of a piece of pizza.
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <strong>
                                                    4. The golden record has ____________ inside it.
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
                                                        A) the sound of the earth
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
                                                        B) the sound of a bee
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
                                                        C) the ‘baby shark’ song
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
                                                        D) the song of the earth
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <strong>5. How did they go there so quickly?</strong>
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
                                                        A) A wise man told them about a short way.
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
                                                        B) zzz55 is the fastest spaceship in the whole
                                                        galaxy.
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
                                                        C) They entered the wormhole.
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
                                                        D) A magician sent them there.
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={`https://app.axebug.com/axebug/assets/quiz_10_listeng.mp3`}
                                                        type="audio/mpeg"
                                                    />
                                                </audio>
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> Here you go! Daily routine!
                                                Power shortage!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> We shut down all the{" "}
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
                                                <strong>Robug 13: </strong>So, we don’t use the energy
                                                for a while.
                                            </div>
                                            <div className="paragraf">
                                                <strong>LADYBUG: </strong> Are we going to stay in the
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][2].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 2, e.target.value, true)
                                                    }
                                                />
                                                ?
                                            </div>

                                            <div className="paragraf">
                                                <strong>Dung beetle:</strong> Yeah, so what?
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung beetle: </strong>Unless you’re being a{" "}
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][3].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 3, e.target.value, true)
                                                    }
                                                />
                                                ...
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug: </strong>No, I’m not!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug:</strong> I just... I just can’t fly in
                                                the dark.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung beetle:</strong>Drama queen! Always{" "}
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
                                                <strong>Axebug: </strong>I repeat, why is designexium so
                                                major?
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> Designexium is an energy
                                                source as well as an{" "}
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][5].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 5, e.target.value, true)
                                                    }
                                                />
                                                and creativity element.
                                            </div>
                                            <div className="paragraf">
                                                <strong>All together:</strong> What on earth are you
                                                saying?
                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong> Imagination!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung beetle:</strong>{" "}
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][6].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 6, e.target.value, true)
                                                    }
                                                />
                                                !
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug: </strong> And energy!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> Precisely! It fires up your
                                                creativity!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung beetle:</strong> Imagine me having rolling
                                                power forever!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung beetle:</strong> Lady, you{" "}
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][7].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 7, e.target.value, true)
                                                    }
                                                />
                                                the jackpot! You can fly in the dark afterall.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug:</strong> Hmm...
                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong> Give me a{" "}
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][8].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 8, e.target.value, true)
                                                    }
                                                />
                                                , will you?
                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong> I also wonder about another
                                                thing.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> Knowledge is power! I’m
                                                listening.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong> How did you find us? I mean ...
                                                how did you even know that we ever{" "}
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][9].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 9, e.target.value, true)
                                                    }
                                                />
                                                ?
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> You said one, but asked two.
                                                I’ll answer both then...
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> A{" "}
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[0][1][10].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 1, 10, e.target.value, true)
                                                    }
                                                />
                                                happened. One in a septillion... .
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
                                                <div className="col-2"> 1. Shut down</div>
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
                                                        <strong>A. </strong> Being anxious about something.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"> 2. Worried</div>
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
                                                        <strong>B. </strong> An instrument, device, or
                                                        weapon to use for a certain purpose.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"> 3. Tool</div>
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
                                                        <strong>C. </strong> Being or living.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"> 4. Chit-chat</div>
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
                                                        <strong>D. </strong>Closing a device, machine, or a
                                                        place.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"> 5. Exist</div>
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
                                                        <strong>E. </strong> An informal conversation among
                                                        friends.
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
                                                <div className="col-3"> 1. miagitonai</div>
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
                                                <div className="col-3"> 2. harstoge</div>
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
                                                <div className="col-3"> 3. wocadr</div>
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
                                                <div className="col-3"> 4. carucli</div>
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
                                                <div className="col-3"> 5. cerdor</div>
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
                                                <div className="col-3"> 6. rebak</div>
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
                                                <div className="col-3"> 7. otlo</div>
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
                                                <div className="col-3"> 8. raplot</div>
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
                                                <div className="col-3"> 9. vedeci</div>
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
                                                <div className="col-3"> 10. ayvegor</div>
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={`https://app.axebug.com/axebug/assets/c3_e10_pg13_p2.mp3`}
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={`https://app.axebug.com/axebug/assets/c3_e10_pg13_p5.mp3`}
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={`https://app.axebug.com/axebug/assets/c3_e10_pg14_p3.mp3`}
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={`https://app.axebug.com/axebug/assets/c3_e10_pg15_p7.mp3`}
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
                                    {pageNo === 5 ? <FinishExam/> : null}
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
