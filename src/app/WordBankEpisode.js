import React, { useEffect } from 'react';
import useWordBank from '../api/useWordBank';
import Square from './components/Square';
import { useSearchParams } from 'react-router-dom';

export default function WordBankEpisode() {
    const [wordList, setWordList] = useWordBank([]);
    const [searchParams,] = useSearchParams();

    useEffect(() => {
        var id = searchParams.get("id");
        setWordList("findByEpisode", id);

    }, [])

    return <React.Fragment>
        <div className="container">
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>AXEBUG DIGITAL</b></h2></div>
            <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>WORD BANK</b></h2></div>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <div className='row' style={{ width: 750 }}>
                {
                    wordList ?
                        wordList.length > 0 ?
                            <React.Fragment>
                                <Square col="2" backgroundColor="black"><h4><b>{wordList[0].episode.chapter.name}</b></h4> </Square>
                                <Square col="2" backgroundColor="black"><h4><b>{wordList[0].episode.name}</b></h4> </Square>
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
