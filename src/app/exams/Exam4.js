import React, {useEffect, useState} from "react";
import SpechText from "../components/SpechText";
import FinishExam from "./FinishExam";
import {Link} from "react-router-dom";

var stringSimilarity = require("string-similarity");
const answerEmpty = require("./Exam4Answer.json");

export default function Exam4(props) {
    const [answer, setAnswer] = useState({...answerEmpty});
    const [pageNo, setPageNo] = useState(0);
    const [maxPage] = useState(4);

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
                                <strong>EXAM CHAPTER 4</strong>
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
                                                    1. Which of the following words starting with the letter Z is
                                                    mentioned in the text?
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
                                                        A) Zebra
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
                                                        B) Zoology
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
                                                        C) Zeppelin
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
                                                        D) Zygote
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <strong>
                                                    2. Plato was the first one to ____________ .
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
                                                        A) establish a tower
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
                                                        B) establish an Academy
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
                                                        C) establish a restaurant
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
                                                        D) establish a library
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <strong>
                                                    3. The shape of the spaceship was inspired by ____________ .

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
                                                        A) a bee
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
                                                        B) a houseflye
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
                                                        C) a spider
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
                                                        D) a caterpillar
                                                    </label>
                                                </div>
                                            </div>


                                            <div className="alert alert-dark" role="alert">
                                                <strong>
                                                    B. Read the story. Choose a word from the box below.
                                                    Write the correct words in the blanks.
                                                </strong>
                                            </div>
                                            <div className="d-flex justify-content-center pb-3"></div>
                                            <div className="paragraf">
                                                The residents of the Joule Town have been told to arm
                                                themselves with hats and
                                                <input
                                                    className="form-input textformat"
                                                    value={answer.result[0][0][1].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 0, 1, e.target.value, true)
                                                    }
                                                    type="text"
                                                />
                                                because of the recent snake attacks. Many people from the
                                                town experienced attacks during the day and
                                                <input
                                                    className="form-input textformat"
                                                    value={answer.result[0][0][2].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 0, 2, e.target.value, true)
                                                    }
                                                    type="text"
                                                />
                                                time. “Recent weeks have been a nightmare!” said a
                                                resident of the Joule Town. Some people needed some
                                                treatment and they had to stay in
                                                <input
                                                    className="form-input textformat"
                                                    value={answer.result[0][0][3].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 0, 3, e.target.value, true)
                                                    }
                                                    type="text"
                                                />
                                                due to these attacks. They say a snake was last seen on
                                                the bridge of Woods. A group of
                                                <input
                                                    className="form-input textformat"
                                                    value={answer.result[0][0][4].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 0, 4, e.target.value, true)
                                                    }
                                                    type="text"
                                                />
                                                living in the town had a massive attack and they all had
                                                to have injections required by the treatment curriculum.
                                            </div>
                                            <div className="paragraf">
                                                Tourists were worried and they left the town immeadiately
                                                which caused financial problems for the residents. The
                                                local
                                                <input
                                                    className="form-input textformat"
                                                    value={answer.result[0][0][5].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 0, 5, e.target.value, true)
                                                    }
                                                    type="text"
                                                />
                                                and authorities are hoping to catch the snakes as soon as
                                                possible. They say the plan is to catch and prevent the
                                                <input
                                                    className="form-input textformat"
                                                    value={answer.result[0][0][6].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(0, 0, 6, e.target.value, true)
                                                    }
                                                    type="text"
                                                />
                                                from giving harm to people, and the government shall
                                                decide about the future of the animals.
                                            </div>

                                            <div className="row">
                                                <div className="col-2 border border-success p-2 m-1">
                                                    boots
                                                </div>
                                                <div className="col-2 border border-success p-2 m-1">
                                                    night
                                                </div>
                                                <div className="col-2 border border-success p-2 m-1">
                                                    hospitals
                                                </div>
                                                <div className="col-2 border border-success p-2 m-1">
                                                    teenagers
                                                </div>
                                                <div className="col-2 border border-success p-2 m-1">
                                                    police
                                                </div>
                                                <div className="col-2 border border-success p-2 m-1">
                                                    reptile
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ) : null}

                                {pageNo === 1 ? (
                                    <React.Fragment>


                                        <div>
                                            <div className="alert alert-dark" role="alert">
                                                <strong>C. Listen and fill in the blanks.</strong>
                                            </div>
                                            <div className="alert alert-dark" role="alert">
                                                <audio
                                                    controls
                                                    className="w-100"
                                                    style={{backgroundColor: "black", height: 45}}
                                                >
                                                    <source
                                                        src={`https://app.axebug.com/axebug/assets/exam_4_listening.mp3`}
                                                        type="audio/mpeg"
                                                    />
                                                </audio>
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> You will reach the first stop
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][1].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 1, e.target.value)
                                                    }
                                                />
                                                later.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong> We have only five hours for
                                                resupply then!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> Remember, keep your eyes wide
                                                open!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug 13:</strong> You will
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][2].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 2, e.target.value)
                                                    }
                                                />
                                                the third stop much easier, trust me.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug:</strong> According to the coordinates,
                                                there should be a wormhole ahead.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong> Totally right!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung Beetle:</strong> Is it going to be a rat
                                                run with the
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][3].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 3, e.target.value)
                                                    }
                                                />
                                                ?
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug:</strong> As quick as a flash
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][6].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 6, e.target.value)
                                                    }
                                                />
                                                !
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug13:</strong> They are cosmic tunnels
                                                afterall. They even connect the furthest points of the
                                                galaxy.
                                            </div>

                                            <div className="paragraf">
                                                <strong>Robug13:</strong> This journey was suppose to
                                                take 1923 days.
                                            </div>

                                            <div className="paragraf">
                                                <strong>Dung beetle :</strong> Thanks to the wormhole,
                                                it takes 220 days.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug13 :</strong> That’s like one tenth shorter
                                                than the actual trip.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug :</strong> Due to my
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][4].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 4, e.target.value)
                                                    }
                                                />
                                                , the trip is %90 shorter.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung beetle :</strong> What about coming back?
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug:</strong> If I do the math...
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug:</strong> Coming back will be %82
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][5].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 5, e.target.value)
                                                    }
                                                />
                                                .
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug13:</strong> This one has brains!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug13:</strong>Math is life, indeed.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Axebug:</strong>
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][7].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 7, e.target.value)
                                                    }
                                                />
                                                is a way to understand universe.
                                            </div>
                                            <div className="paragraf">
                                                <strong>Robug13:</strong>After you leave the wormhole,
                                                you should land to your third stop.
                                            </div>

                                            <div className="paragraf">
                                                <strong>Robug13 :</strong> You have 7 hours before
                                                <input
                                                    className="form-input textformat"
                                                    type="text"
                                                    value={answer.result[1][0][8].student}
                                                    onChange={(e) =>
                                                        setStudentOpenAnswer(1, 0, 8, e.target.value)
                                                    }
                                                />
                                                .
                                            </div>
                                            <div className="paragraf">
                                                <strong>Ladybug :</strong> Heads up over here!
                                            </div>
                                            <div className="paragraf">
                                                <strong>Dung beetle :</strong>The area of bossroach!
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ) : null}

                                {pageNo === 2 ? (
                                        <React.Fragment>


                                            <div>
                                                <div className="alert alert-dark" role="alert">
                                                    <strong>
                                                        D. Match the words and phrases with the correct definitions.
                                                    </strong>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="paragraf">
                                                            <strong>1. Disciplinary:</strong>
                                                            <input
                                                                style={{width: 50}}
                                                                className="form-input textformat border border-success"
                                                                type="text"
                                                                value={answer.result[2][0][1].student}
                                                                onChange={(e) =>
                                                                    setStudentOpenAnswer(2, 0, 1, e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                        <div className="paragraf">
                                                            <strong>2. Vital:</strong>
                                                            <input
                                                                style={{width: 50}}
                                                                className="form-input textformat border border-success"
                                                                type="text"
                                                                value={answer.result[2][0][1].student}
                                                                onChange={(e) =>
                                                                    setStudentOpenAnswer(2, 0, 1, e.target.value)
                                                                }
                                                            />
                                                        </div>

                                                        <div className="paragraf">
                                                            <strong>3. Patience:</strong>
                                                            <input
                                                                style={{width: 50}}
                                                                className="form-input textformat border border-success"
                                                                type="text"
                                                                value={answer.result[2][0][1].student}
                                                                onChange={(e) =>
                                                                    setStudentOpenAnswer(2, 0, 1, e.target.value)
                                                                }
                                                            />
                                                        </div>

                                                        <div className="paragraf">
                                                            <strong>4. Essential:</strong>
                                                            <input
                                                                style={{width: 50}}
                                                                className="form-input textformat border border-success"
                                                                type="text"
                                                                value={answer.result[2][0][1].student}
                                                                onChange={(e) =>
                                                                    setStudentOpenAnswer(2, 0, 1, e.target.value)
                                                                }
                                                            />
                                                        </div>

                                                        <div className="paragraf">
                                                            <strong>5. Light speed:</strong>
                                                            <input
                                                                style={{width: 50}}
                                                                className="form-input textformat border border-success"
                                                                type="text"
                                                                value={answer.result[2][0][1].student}
                                                                onChange={(e) =>
                                                                    setStudentOpenAnswer(2, 0, 1, e.target.value)
                                                                }

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="paragraf alert alert-success">
                                                            <strong>A. </strong>Totally necessary.
                                                        </div>
                                                        <div className="paragraf alert alert-success">
                                                            <strong>B. </strong>The speed of light.
                                                        </div>
                                                        <div className="paragraf alert alert-success">
                                                            <strong>C. </strong>Tolerance.
                                                        </div>
                                                        <div className="paragraf alert alert-success">
                                                            <strong>D. </strong>Concerning discipline.
                                                        </div>
                                                        <div className="paragraf alert alert-success">
                                                            <strong>E. </strong>Very important.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>

                                        ) : null}
                                        {pageNo === 3 ? (
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
                                                            src={`https://app.axebug.com/axebug/assets/c4_e13_pg8_p7.mp3`}
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
                                                            src={`https://app.axebug.com/axebug/assets/c4_e14_pg16_p6.mp3`}
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
                                                            src={`https://app.axebug.com/axebug/assets/c4_e15_pg22_p8.mp3`}
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
                                                            src={`https://app.axebug.com/axebug/assets/c4_e16_pg27_p15.mp3`}
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
                                        {pageNo === 4 ? <FinishExam/> : null}
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
                                    {/* <div className="col pl-4">
                            <button className='btn btn-info pl-4' onClick={() => props.sendExam(answer,"EXAM", false)}>SAVE EXAM</button>
                        </div> */}
                                </div>
                            </div>
                        </div>
                        </div>
                        );
                    }
