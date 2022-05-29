import React, { useEffect, useState } from 'react';
import useWordBank from '../api/useWordBank';
import Square from './components/Square';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SpellingEpisode() {
    const [wordList, setWordList] = useWordBank([]);
    const [searchParams,] = useSearchParams();
    const [episode, setEpisode] = useState({});
    const [chapter, setChapter] = useState({});

    useEffect(() => {
        var id = searchParams.get("id");
        setWordList("findByEpisode", { episodeId: id, category: "spelling" });
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (wordList) {
            setChapter(wordList[0].episode.chapter);
            setEpisode(wordList[0].episode)
        }
        // eslint-disable-next-line 
    }, [wordList])



    return <React.Fragment>
        <div className="container">
            <div className='row p-2 mt-5'>
                <div className='col'>
                    <div className="text-white bg-dark border border-2 border-dark d-flex justify-content-center" style={{ width: 350 }}><h2><b>
                    <Link to="/student" style={{ color:"white", textDecoration:"none" }}> AXEBUG DIGITAL</Link>
                        </b></h2></div>
                    <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>SPELLING BEE</b></h2></div>

                </div>
                <div className='col'>
                    <Square col="3" backgroundColor="black"><h4><b>{chapter.name}</b></h4> </Square>
                    <Square col="3" backgroundColor="black"><h4><b>{episode.name}</b></h4> </Square>
                </div>

            </div>
        </div>
        <div className=" container d-flex justify-content-center mt-5">
            <div className='row'>
                {
                    wordList ?
                        wordList.map((word, key) =>
                            <Square key={key} to={`/app/spelling/?id=${word.id}&e=${word.episode.id}`} col="2" 
                            backgroundColor={word.category === "EASY" ? "#F4BFBF": word.category === "MEDIUM" ? "#FAF0D7": "#8CC0DE"}><h2>{word.name}</h2> </Square>
                        ) : null
                }
            </div>
        </div>
    </React.Fragment>;
}

