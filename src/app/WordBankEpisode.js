import React, { useEffect, useState } from 'react';
import useWordBank from '../api/useWordBank';
import Square from './components/Square';
import {useSearchParams} from 'react-router-dom';
import Home from './components/Home';

export default function WordBankEpisode() {
    const [wordList, setWordList] = useWordBank([]);
    const [searchParams,] = useSearchParams();
    const [episode, setEpisode] = useState({});
    const [chapter, setChapter] = useState({});

    useEffect(() => {
        var id = searchParams.get("id");
        setWordList("findByEpisode", { episodeId: id, category: "wordBank" });

    }, [])
    useEffect(() => {
        console.log(wordList)
        if (wordList) {
            setChapter(wordList[0].episode.chapter);
            setEpisode(wordList[0].episode)
        }
    }, [wordList])
    console.log("ceycey: ",wordList)

    return <React.Fragment>
        <Home secondaryName="Word Bank" secondaryLink="/wordbank" />
        <div className="d-flex justify-content-center mt-5">
            <div className='row' style={{ width: 750 }}>
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
                            <Square key={key} to={`/app/wordbank/?id=${word.id}&e=${word.episode.id}`} col="2" backgroundColor="white"><h4><b>{word.name}</b></h4> </Square>
                        ) : null
                }
            </div>
        </div>
    </React.Fragment>;
}
