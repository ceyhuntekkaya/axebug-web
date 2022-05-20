import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useWordBank from '../api/useWordBank';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SpechText from './components/SpechText';

var stringSimilarity = require("string-similarity");

export default function Spelling() {
    const [searchParams,] = useSearchParams();
    const [wordList, setWordList] = useWordBank(null);
    const [selectedWord, setSelectedWord] = useState({ number: 0, type: "" });
    const [selectedWordId, setSelectedWordId] = useState(0);
    const [currentKey, setCurrentKey] = useState(0);
    const [episode, setEpisode] = useState({});
    const [chapter, setChapter] = useState({});
    const [progressColor, setProgressColor] = useState("success");

    const [speechValue, setSpeechValue] = useState(100);

    useEffect(() => {
        var id = searchParams.get("id");
        setSelectedWordId(parseInt(id));
        var episodeId = searchParams.get("e");
        setWordList("findByEpisode", { episodeId: episodeId, category: "spelling" });

        var audio = document.getElementById('audio');
        if (audio)
            audio.load();
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        var audio = document.getElementById('audio');
        if (audio)
            audio.load();
        // eslint-disable-next-line 
    }, [selectedWord])



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

    useEffect(() => {
        if (wordList) {
            wordList.forEach((word, key) => {
                if (key === 0) {
                    setChapter(word.episode.chapter)
                    setEpisode(word.episode)
                }
                if (word.id === selectedWordId) {
                    setCurrentKey(key)
                    setSelectedWord(word);
                }
            });
        }
        // eslint-disable-next-line 
    }, [wordList])

    const nextQuestions = () => {
        if (currentKey < wordList.length - 1) {
            setSelectedWord(wordList[currentKey + 1]);
            setCurrentKey(currentKey + 1)
        }
    }

    const prevQuestions = () => {
        if (currentKey > 0) {
            setSelectedWord(wordList[currentKey - 1]);
            setCurrentKey(currentKey - 1)
        }
    }

    const getSpeechText = (text) => {
        var similarity = stringSimilarity.compareTwoStrings(clearText(text), clearText(selectedWord.name));
        const value = parseInt(similarity * 100)
        setSpeechValue(value);

        console.log(value)

    }
    const clearText = (readnigText) => {
        let newText = String(readnigText).replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
        newText = newText.toLowerCase();
        return newText;
    }



    return <React.Fragment>
        <div className="container">
            <div className="row mt-4">
                <div className="col ml-2">
                    <div className="mb-4">
                        <div className="">
                            <div className='row m-2'>
                                <div className='col-4 boxDark mr-5'><h3><b>
                                    <Link to="/student" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link>
                                </b></h3></div>
                                <div className='col-8 boxWhite ml-5'><h4>Listening and Speaking</h4></div>
                            </div>
                            <div className='row m-2'>
                                <div className='col-4 boxWhite mr-5'><h3><b>SPELLING BEE</b></h3></div>
                                <div className='col-8 boxDark ml-5'><h4>Listen to the audio. Then, repeat the sentences clearly.</h4></div>
                            </div>
                            <div className="m-2">
                                <div className="row">
                                    <div className='col-4 boxWhite mr-5'>
                                        <div className="row mb-3">
                                            <Square col="5" backgroundColor="black"><h1><b>{chapter.name}</b></h1> </Square>
                                            <Square col="5" backgroundColor="black"><h1><b>{episode.name}</b></h1> </Square>
                                            <div className="col-5"><button className="btn btn-dark w-100" onClick={prevQuestions}>Prev Word</button></div>
                                            <div className="col-5"><button className="btn btn-dark w-100" onClick={nextQuestions}>Next Word</button></div>
                                        </div>
                                    </div>
                                    <div className='col-8 ml-5'>
                                        <audio id="audio" controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                            <source src={`../../assets/${selectedWord.soundUrl}`} type="audio/mpeg" />
                                        </audio>
                                        <div className='boxWhite p-2'>
                                            <div>
                                                <span style={{ fontSize: 72, fontWeight: "bold", letterSpacing: 15 }}>{selectedWord.name}</span></div>
                                        </div>
                                        <div className='boxWhite p-2'>
                                            <SpechText getSpeechText={getSpeechText} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='row m-0 mt-2 p-0'>
                                            <div className="progress col p-0" style={{ height: "30px" }}>
                                                <div className={`progress-bar progress-bar-striped bg-${progressColor} progress-bar-animated`}
                                                    role="progressbar" style={{ width: speechValue + "%" }}
                                                    aria-valuenow={speechValue} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className='col-auto' style={{ height: 30 }}><h2>% {speechValue}</h2></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;
}
