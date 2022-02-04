import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useWordBank from '../api/useWordBank';
import { useSearchParams } from 'react-router-dom';

export default function WordBank(props) {
    const [searchParams,] = useSearchParams();
    const [wordList, setWordList] = useWordBank(null);
    const [selectedWord, setSelectedWord] = useState({ number: 0, type: "" });
    const [selectedWordId, setSelectedWordId] = useState(0);
    const [currentKey, setCurrentKey] = useState(0);
    const [episode, setEpisode] = useState({});
    const [chapter, setChapter] = useState({});


    useEffect(() => {
        var id = searchParams.get("id");
        setSelectedWordId(parseInt(id));
        var episodeId = searchParams.get("e");
        setWordList("findByEpisode", {episodeId: episodeId, category: "wordBank"});
    }, [])

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

    return <React.Fragment>
        <div className="container">
            <div className="row mt-4">
                <div className="col ml-2">
                    <div className="mb-4">
                        <div className="">
                            <div className='row m-2'>
                                <div className='col-4 boxDark mr-5'><h3><b>AXEBUG DIGITAL</b></h3></div>
                                <div className='col-8 boxWhite ml-5'><h4>Listening and Speaking</h4></div>
                            </div>
                            <div className='row m-2'>
                                <div className='col-4 boxWhite mr-5'><h3><b>WORDBANK</b></h3></div>
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
                                        <audio controls className='w-100' style={{ backgroundColor: "black", height: 45 }}>
                                            <source src={`../../assets/${selectedWord.soundUrl}`} type="audio/mpeg" />
                                        </audio>
                                        <div className='boxWhite p-2'>
                                            <div>
                                                <span style={{ fontSize: 48, fontWeight: "bold" }}>{selectedWord.name}</span>
                                                <span style={{ fontSize: 36, fontStyle: 'italic' }}>/ {selectedWord.type}</span></div>
                                            <div style={{ fontSize: 48 }}>
                                                {
                                                    selectedWord.description
                                                }
                                            </div>
                                        </div>
                                        <div className='col-12 boxDark ml-5'><h4>Record your voice</h4></div>

                                    </div>
                                    <div className='row  mt-3'>
                                        <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} id="file" value="78" max="100"> 78% </progress>
                                        <div className='col-auto' style={{ height: 30 }}><h2>% 78</h2></div>
                                    </div>
                                    <div className='col-12 boxDark mt-5'><h2>Total Word Score 87</h2></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;
}
