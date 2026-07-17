import React, {useEffect, useState} from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import {Link} from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Exam3Answer.json");
const { getFileUrl } = require('../../api/fileUrl');

export default function Exam3(props) {
    const [answer, setAnswer] = useState({...answerEmpty});
    const [pageNo, setPageNo] = useState(0);
    const [maxPage] = useState(5);

    const nextPage = () => {
        if (pageNo < maxPage - 1) setPageNo(pageNo + 1);
        //props.sendExam(answer,"EXAM", false)
    };
    const prevPage = () => {
        if (pageNo > 0) setPageNo(pageNo - 1);
        //props.sendExam(answer,"EXAM", false)
    };

    const [returnLink, setReturnLink] = useState("/mytasks");
    useEffect(() => {
        const isTeacher = window.location.href

        if (isTeacher.includes("teacher")) {
            setReturnLink("/teacher-contents/EXAMS")
            console.log(isTeacher)
        }
    }, [])


    console.log(answer.result)

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
        // if (compare) {
        var similarity = stringSimilarity.compareTwoStrings(
            clearText(value),
            clearText(temp.result[skils][section][queationNumber].answer)
        );
        finalScore =
            similarity *
            parseFloat(temp.result[skils][section][queationNumber].weigth);
        temp.result[skils][section][queationNumber].score = finalScore;
        // }
        // else {
        //     if(value=== temp.result[skils][section][queationNumber].answer){
        //         temp.result[skils][section][queationNumber].score = finalScore;
        //     }
        //     else{
        //         temp.result[skils][section][queationNumber].score = 0;
        //     }
        // }
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


    console.log(pageNo)

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
                            <strong><Link to={returnLink}> RETURN TASK LIST</Link></strong>
                        </h4>
                    </div>
                </div>

                <div className="card-header">
                    <div className="d-flex justify-content-center">
                        <h5 className="card-title mt-3">
                            <h1>
                                <strong>EXAM CHAPTER 3</strong>
                            </h1>
                        </h5>
                    </div>
                </div>
                <div className="card-body p-5 pt-3">
                    {answer ? (
                        <React.Fragment>
                            <div style={{fontSize: "18pt"}}>
                                {pageNo === 0 ? (
                                    <React.Fragment>

                                        <div>
                                            <div className="alert alert-dark" role="alert">
                                                <strong>
                                                    A. Read the text and choose the correct answer.
                                                </strong>
                                            </div>

                                            <div className="row p-2">
                                                <strong>
                                                    1. Which of the following statements is an opinion?
                                                    ___________________ .
                                                </strong>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as6"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 6, "A")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        A) Disney made many movies like Bambi.
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as6"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 6, "B")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        B) In the 1940s, Disney had an idea to build an amazingpark for
                                                        families.
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as6"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 6, "C")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        C) Disneyland was first opened in California.
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as6"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 6, "D")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        D) Walt Disney was a creative genius.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <strong>
                                                    2. According to the writer, Disneyland is a ___________.
                                                </strong>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as7"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 7, "A")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        A) small park
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as7"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 7, "B")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        B) an amusement park for all ages
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as7"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 7, "C")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        C) orange grove
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as7"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 7, "D")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        D) huge playground
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <strong>
                                                    3. He came to ___________ as an ambulance driver for Red Cross.
                                                    .
                                                </strong>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as8"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 8, "A")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        A) England
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as8"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 8, "B")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        B) France
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as8"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 8, "C")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        C) Germany
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as8"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 8, "D")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        D) Spain
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <strong>
                                                    4. He came to California ___________.
                                                </strong>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as9"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 9, "A")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        A) when he was already rich
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as9"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 9, "B")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        B) with a bag full of biscuits
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as9"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 9, "C")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        C) with a suitcase and $20 in his pocket
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as9"
                                                        onChange={(e) => setStudentOpenAnswer(0, 0, 9, "D")}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        D) when he was a child
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <strong>
                                                    5. Snow White and the Seven Dwarfs is ___________ .
                                                </strong>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as10"
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(0, 0, 10, "A")
                                                        }
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        A) a random story
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as10"
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(0, 0, 10, "B")
                                                        }
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        B) a space adventure
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as10"
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(0, 0, 10, "C")
                                                        }
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        C) a brand of toy
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="as10"
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(0, 0, 10, "D")
                                                        }
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        D) the first full-length animated movie by Disney
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ) : null}

                                {pageNo === 1 ? (
                                    <React.Fragment>


                                        <div>
                                            <div className="alert alert-dark" role="alert">
                                                <strong>
                                                    B. Listen and fill the blanks
                                                </strong>
                                            </div>
                                            <div className="alert alert-dark" role="alert">
                                                <audio
                                                    controls
                                                    className="w-100"
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={getFileUrl('axe_exam_c_2_listening_B.mp3')}
                                                        type="audio/mpeg"
                                                    />
                                                </audio>
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong>So, I think we are all<input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> Let’s take a rest then we will meet at
                                                the <input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />area.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> Come on!
                                            </div>
                                            <div className="paragraf">

                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung Beetle:</strong> My favorite time! Let’s take<input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Black Writing:</strong> 12 hours later. 5 Minutes to<input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />. Earth time 9 o’clock.

                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong>It’s time. Let’s begin. You can board to
                                                ZZZ55.
                                            </div>
                                            <div className="paragraf">

                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong>From now on, we will run this ship with<input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />. Co-pilots are ladybug and dung beetle.

                                            </div>
                                            <div className="paragraf">
                                                <strong>Monitor:</strong>Tower, we are ready to launch.
                                            </div>
                                            <div className="paragraf">

                                            </div>
                                            <div className="paragraf">
                                                <strong>Watchman 2:</strong>Fuel tanks are ready.
                                            </div>
                                            <div className="paragraf">

                                            </div>
                                            <div className="paragraf">
                                                <strong>Watchman 1:</strong>There is a robot in ‘zzz55’ to<input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />.

                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong>All set! Waiting for your signal, tower!
                                            </div>
                                            <div className="paragraf">

                                            </div>
                                            <div className="paragraf">
                                                <strong>Tower:</strong>You can power up the engine and launch.
                                            </div>
                                            <div className="paragraf">

                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug:</strong><input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />ready. We are launching.

                                            </div>
                                            <div className="paragraf">
                                                <strong>Watchman 2:</strong>Ready.
                                            </div>
                                            <div className="paragraf">

                                            </div>
                                            <div className="paragraf">
                                                <strong>Watchman 1:</strong>3,2,1! You can<input
                                                className="form-input textformat"
                                                type="text"
                                                value={answer.result[1][0][10].student}
                                                onChange={(e) =>
                                                    setStudentOpenAnswer(1, 0, 10, e.target.value)
                                                }
                                            />.


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
                                                    <td>1. They don’t need to calculate the total time of travel.</td>
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
                                                    <td>2. The travel takes 1923 days in earth time.</td>
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
                                                    <td>3. Arriving there will take 220 days, but coming back will take
                                                        450 days.
                                                    </td>
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
                                                    <td>4. The reason for the time differences between going and coming
                                                        back is the speed.
                                                    </td>
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
                                                    <td>5. Axebug asked how they see space from Earth.</td>
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
                                                    <td> 6. Axebug gave traveling from earth to mars as an example to
                                                        explain the time differences.
                                                    </td>
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
                                                <strong>D. Macth a synonym for each word.</strong>
                                            </div>

                                            <div className="row">
                                                <div className="col-2 alert alert-info m-3">
                                                    Seek
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2] ? answer.result[2][1][1]?.student: ""}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 1, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Go On
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2] ? answer.result[2][1][2]?.student: ""}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 2, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Fault
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2] ? answer.result[2][1][3]?.student: ""}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 3, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Count On
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][4].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 4, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Rich
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][5].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 5, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Forest
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][6].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 6, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Rest
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][7].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 7, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Fellow
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][8].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 8, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Right
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][9].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 9, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Switch
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][10].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 10, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Constantly
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][11].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 11, e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-2 alert alert-info m-3">
                                                    Fold
                                                    <input
                                                        style={{fontSize: 30}}
                                                        className="form-input w-100"
                                                        type="text"
                                                        value={answer.result[2][1][12].student}
                                                        onChange={(e) =>
                                                            setStudentOpenAnswer(2, 1, 12, e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-2 alert alert-warning m-1">
                                                    Search
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">End</div>
                                                <div className="col-1 alert alert-warning m-1">
                                                    Continue
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">
                                                    Mistake
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">
                                                    Depend On
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">
                                                    Wealthy
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">
                                                    Forestland
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">Sos</div>
                                                <div className="col-2 alert alert-warning m-1">
                                                    Relax
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">
                                                    Person
                                                </div>
                                                <div className="col-1 alert alert-warning m-1">
                                                    True
                                                </div>
                                                <div className="col-2 alert alert-warning m-1">
                                                    Turn On
                                                </div>
                                                <div className="col-1 alert alert-warning m-1"></div>
                                                Regularly
                                            </div>
                                            <div className="col-1 alert alert-warning m-1"></div>
                                            Bend
                                        </div>
                                    </React.Fragment>
                                ) : null}
                                {pageNo === 4 ? (
                                    <React.Fragment>


                                        <div>
                                            <div className="alert alert-dark" role="alert">
                                                <strong>
                                                    E. Listen to the audio. Then, repeat the sentences
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
                                                        src={getFileUrl('c3_e9_pg8_p3.mp3')}
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={getFileUrl('c3_e10_pg16_p1.mp3')}
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={getFileUrl('c3_e11_pg18_p6.mp3')}
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
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={getFileUrl('c3_e12_pg30_p4.mp3')}
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
                                {pageNo === 5 ? <FinishExam/> : null}
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
                                    onClick={() => {
                                        console.log("Merhaba");
                                        console.log(answer);
                                        props.sendExam(answer, "EXAM", true)
                                        console.log(props.sendExam);
                                    }}
                                >
                                    FINISH EXAM
                                </button>
                            </div>
                        ) : null}
                        {/* <div className="col pl-4">
                            <button className='btn btn-info pl-4' onClick={() => props.sendExam(answer,"EXAM", false)}>SAVE EXAM</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
);
}
