import React, { useState, useEffect } from 'react'
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

export default function ContentBase(props) {
    const [selectedContent, setSelectedContent] = useState(contentModel);
    const [level, setLevel] = useState(1);
    const [txtValue, settxtValue] = useState("");

    const [speechValue, setSpeechValue] = useState(100);
    useEffect(() => {
        if (props.selectedContent) {
            setSelectedContent(props.selectedContent);
            setLevel(1);
            clearValues()
        }
    }, [props.selectedContent])

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

    const clearValues=()=>{
        settxtValue("");
        setSpeechValue(0)
    }

    useEffect(() => {
        clearValues();
    }, [level])

    

    return (
        <div className="card">
            <div className='row m-2'>
                <div className='col-4 boxDark'><h3><b>AXEBUG DIGITAL</b></h3></div>
                <div className="col-8 btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2 w-100" role="group" aria-label="First group">
                        <button type="button" className={`btn btn-${level === 1 ? "dark" : "secondary"}`} onClick={() => setLevel(1)}>Listen & Speak</button>
                        <button type="button" className={`btn btn-${level === 2 ? "dark" : "secondary"}`} onClick={() => setLevel(2)}>Read & Speak</button>
                        <button type="button" className={`btn btn-${level === 3 ? "dark" : "secondary"}`} onClick={() => setLevel(3)}>Listen & Write</button>
                        <button type="button" className={`btn btn-${level === 4 ? "dark" : "secondary"}`} onClick={() => setLevel(4)}>Read & Write</button>
                    </div>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col-4 boxWhite mr-5'><h3><b>AXE4SKILS</b></h3></div>
                <div className='col-8 boxDark ml-5'><h4>Listen to the audio. Then, repeat the sentences clearly.</h4></div>
            </div>
            <div className="card-body">

                <div className="">
                    {
                        level === 1 || level === 3 ?
                            <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                <source src={`../assets/${selectedContent.soundUrl}`} type="audio/mpeg" />
                            </audio> : null
                    }
                    {
                        level === 1 ?
                            <img src={`../assets/${selectedContent.imageFullUrl}`} alt="" className="w-50 border border-2 border-dark" style={{ height: 400 }} /> : null
                    }
                    {
                        level === 2 || level === 4 ?
                            <img src={`../assets/${selectedContent.imageEmptyUrl}`} alt="" className="w-50 border border-2 border-dark" style={{ height: 400 }} /> : null
                    }
                    {
                        level === 4 ?
                            <div className="alert alert-secondary mt-2" role="alert">
                                {selectedContent.text}
                            </div> : null
                    }
                    {
                        level === 3 || level === 4 ?
                            <div className="mb-3">
                                <label htmlFor="txt" className="form-label">Write text...</label>
                                <input type="text" className="form-control" id="txt" placeholder="Write text..." 
                                value={txtValue} onChange={(e) => settxtValue(e.target.value)} />
                                <button className='btn btn-success' onClick={()=> getSpeechText(txtValue)}>Check Text</button>
                            </div> : null
                    }
                </div>
                <div>
                    <div className='row  mt-3'>
                        <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={speechValue} id="file" max="100"> 78% </progress>
                        <div className='col-auto' style={{ height: 30 }}><h2>% {speechValue}</h2></div>
                    </div>
                </div>
                <div className="row row-cols-auto mt-2">
                    {
                        level === 1 || level === 2 ?
                            <SpechText getSpeechText={getSpeechText} /> : null
                    }
                    {
                        level > 1 ?
                            <div className="col"><button className="btn btn-dark" onClick={prevtExersize}>Prev</button></div>
                            : null
                    }
                    <div className="col"><button className="btn btn-dark" onClick={nextExersize}>{level === 4 ? "Next Panel" : "Next"}</button></div>
                </div>
            </div>
        </div>
    )
}
