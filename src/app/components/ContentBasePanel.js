import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SpechText from './SpechText';

const contentModel = {
    "id": 1,
    "name": "",
    "imageEmptyUrl": "cizgi1.jpg",
    "imageFullUrl": "cizgi2.png",
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "soundUrl": "voice.mp3",
    "orderNumber": 1,
    "sectionId": 1
}

var stringSimilarity = require("string-similarity");

export default function ContentBasePanel(props) {
    const [selectedContent, setSelectedContent] = useState(contentModel);
    const [studentScore, setStudentScore] = useState(null);
    const [progressColor, setProgressColor] = useState("success");
    const [level, setLevel] = useState(1);
    const [txtValue, settxtValue] = useState("");
    const [speechValue, setSpeechValue] = useState(100);
    useEffect(() => {
        if (props.selectedContent) {
            setSelectedContent(props.selectedContent);
            setLevel(1);
            clearValues()
        }
        var audio = document.getElementById('audio');
        if (audio)
            audio.load();

        if (props.studentWorkTaskList) {
            const hasScore = props.studentWorkTaskList.find(s => s.episodeTaskPanel.id === props.selectedContent.id)
            if (hasScore) {
                setStudentScore(hasScore)
            }
            else {
                setStudentScore(null)
            }
            showScore()
        }


    }, [props.selectedContent])

    const showScore = () => {
        if (studentScore) {
            if (level === 2) {
                setSpeechValue(studentScore.readEvaluation)
            }
            else if (level === 4) {
                setSpeechValue(studentScore.writeEvaluation)
            }
            else if (level === 1) {
                setSpeechValue(studentScore.speakingEvaluation)
            }
            else if (level === 3) {
                setSpeechValue(studentScore.listeningEvaluation)
            }
        }

    }
    const clearText = (text) => {
        let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
        newText = newText.toLowerCase();
        return newText;
    }

    const getSpeechText = (text) => {
        var similarity = stringSimilarity.compareTwoStrings(clearText(text), clearText(selectedContent.text));
        const value = parseInt(similarity * 100)
        setSpeechValue(value);
        props.setEvulations(level, text, value)
    }

    const nextExersize = () => {
        if (level < 4) {
            setLevel(level + 1);
        }
        else {
            props.onNextContent();
        }
        clearValues()
    }
    const prevtExersize = () => {
        if (level > 1) {
            setLevel(level - 1);
        }
        clearValues()
    }

    const clearValues = () => {
        settxtValue("");
        setSpeechValue(0)
    }

    useEffect(() => {
        clearValues();
        showScore()
    }, [level])

    useEffect(() => {
        if (speechValue < 20)
            setProgressColor("danger")
        else if (speechValue < 50)
            setProgressColor("warning")
        else if (speechValue < 75)
            setProgressColor("info")
        else
            setProgressColor("success")
    }, [speechValue])

    return (
        <div className="card">
            <div className='row m-2'>
            <div className='col-4 boxDark mr-5 d-flex justify-content-center'><h3><b><Link to="/student" style={{ color:"white", textDecoration:"none" }}> AXEBUG DIGITAL</Link></b></h3></div> <div className="col-8 btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2 w-100" role="group" aria-label="First group">
                        <button type="button" className={`btn btn-${level === 1 ? "success" : "secondary"}`} onClick={() => setLevel(1)}>Listen & Speak</button>
                        <button type="button" className={`btn btn-${level === 4 ? "danger" : "secondary"}`} onClick={() => setLevel(4)}>Read & Write</button>
                        <button type="button" className={`btn btn-${level === 2 ? "warning" : "secondary"}`} onClick={() => setLevel(2)}>Read & Speak</button>
                        <button type="button" className={`btn btn-${level === 3 ? "primary" : "secondary"}`} onClick={() => setLevel(3)}>Listen & Write</button>
                    </div>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col-4 boxWhite mr-5 d-flex justify-content-center'><h3><b>AXE4SKILS</b></h3></div>
                <div className='col-8 boxDark ml-5 d-flex justify-content-center'><h4>
                    {
                        level === 1 ?
                            "Listen and repeat the sentences you hear."
                            : null
                    }
                    {
                        level === 2 ?
                            "Read the following sentences aloud."
                            : null
                    }
                    {
                        level === 3 ?
                            "Listen to the sentences and write what you hear."
                            : null
                    }
                    {
                        level === 4 ?
                            "Read the sentences and write them."

                            : null
                    }
                </h4></div>
            </div>
            <div className="card-body">
                <div className="">
                    {
                        level === 1 || level === 3 ?
                            <audio id="audio" controls className='w-100' style={{ backgroundColor: "#222529", height: 45 }}>
                                <source id="audioSource" src={`../assets/${selectedContent.soundUrl}`} type="audio/mpeg" />
                            </audio> : null
                    }
                    {
                        level === 1 ?
                            <div className="d-flex justify-content-center">
                                <img src={`../assets/${selectedContent.imageEmptyUrl}`} alt="" className="w-50 border border-2 border-dark" style={{ height: 400 }} />
                            </div>
                            : null
                    }
                    {
                        level === 2 || level === 4 ?
                            <div className="d-flex justify-content-center">
                                <img src={`../assets/${selectedContent.imageFullUrl}`} alt="" className="w-50 border border-2 border-dark" style={{ height: 400 }} />
                            </div>
                            : null
                    }
                    {
                        level === 3 || level === 4 ?
                            <div className="mb-3 mt-2">
                                <div className='row'>
                                    <div className='col'>
                                        <input type="text" className="form-control" id="txt" placeholder="Write text..."
                                            value={txtValue} onChange={(e) => settxtValue(e.target.value)} />
                                    </div>
                                    <div className='col-auto'> <button className='btn btn-success' onClick={() => getSpeechText(txtValue)}>Check Text</button></div>
                                </div>
                            </div> : null
                    }
                </div>
                <div>
                    <div className='row m-0 mt-2'>
                        <div className="progress col p-0" style={{ height: "30px" }}>
                            <div className={`progress-bar progress-bar-striped bg-${progressColor} progress-bar-animated`}
                                role="progressbar" style={{ width: speechValue + "%" }}
                                aria-valuenow={speechValue} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className='col-auto' style={{ height: 30 }}><h2>% {speechValue}</h2></div>
                    </div>
                </div>
                <div className="row row-cols-auto mt-2">
                    {
                        level === 1 || level === 2 ?
                            <SpechText getSpeechText={getSpeechText} /> : null
                    }
                    <div className='row mt-2'>
                        {
                            level > 1 ?
                                <div className='col-auto'><button className="btn btn-success" onClick={prevtExersize}>Prev</button></div>
                                : null
                        }
                        <div className='col-auto'><button className="btn btn-success pl-2" onClick={nextExersize}>{level === 4 ? "Next Panel" : "Next"}</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
