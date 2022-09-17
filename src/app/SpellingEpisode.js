import React, { useEffect, useState } from 'react';
import useWordBank from '../api/useWordBank';
import Square from './components/Square';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';

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
        <Home secondaryName="SPELLING" />
        <div className=" container d-flex justify-content-center mt-5">
            <div className='row'>
                {
                    wordList ?
                        wordList.length > 0 ?
                            <React.Fragment>
                                <Square col="2" backgroundColor="black"><h4><b>{chapter.name}</b></h4> </Square>
                                <Square col="2" backgroundColor="black"><h4><b>{episode.name}</b></h4> </Square>
                            </React.Fragment> : null : null
                }
                {
                    wordList ?
                        wordList.map((word, key) =>
                            <Square key={key} to={`/app/spelling/?id=${word.id}&e=${word.episode.id}`} col="2"
                                backgroundColor={word.category === "EASY" ? "#F4BFBF" : word.category === "MEDIUM" ? "#FAF0D7" : "#8CC0DE"}><h2>{word.name}</h2> </Square>
                        ) : null
                }
            </div>
        </div>
    </React.Fragment>;
}

