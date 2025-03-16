import React, {useEffect, useState} from 'react';
import useChapter from '../api/useChapter';
import Square from './components/Square';
import {Link} from 'react-router-dom';
import Home from './components/Home';

export default function SpellingList() {
    const [chapters, setChapters] = useChapter([]);
    const [activeEpisodeList, setActiveEpisodeList] = useState([]);
    const [ready, setReady] = useState(false);


    const [chapterList, setChapterList] = useState([]);

    useEffect(() => {
        setChapters("findAllChaptersWithEpisodes", null);
        setActiveEpisodeList(JSON.parse(localStorage.getItem("activeEpisodeList")));
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if(chapters){
            let _chapter = [];
            for(let i=0; i<chapters.length; i++){

                for(let j=0; j<chapters[i].episodes.length; j++){

                    _chapter.push(chapters[i].episodes[j])
                }
            }


            console.log(_chapter)
            _chapter = _chapter.sort((a, b) => a.id - b.id)
            setChapterList(_chapter)
        }
        // eslint-disable-next-line
    }, [chapters])



    useEffect(() => {
        if (ready === false)
            if (activeEpisodeList && chapters) {
                chapters.forEach(element => {
                    element.episodes.forEach(episode => {
                        if (activeEpisodeList.includes(episode.id)) {
                            episode.showme = true
                        }
                    })
                })
                const tempEpisode = JSON.stringify(chapters);
                setReady(true)
            }
        // eslint-disable-next-line
    }, [chapters, activeEpisodeList])


    return <React.Fragment>
        <Home secondaryName="SPELLING"/>
        <div className="d-flex justify-content-center mt-5">
            <div className='row' style={{width: 750}}>
                {
                    chapters ?

                                <div className='row' >
                                    {/* <Square key={key} col="3" backgroundColor="black"><h4><b>{key+1}</b></h4> </Square> */}
                                    {
                                        chapterList.map((episode, no) =>

                                            <Square key={no} to={`/spellingword/?id=${episode.id}`} col="3"
                                                    backgroundColor="white">
                                                <h3><b>{episode.name}</b></h3></Square>
                                        )
                                    }
                                </div> : ""

                }
            </div>
        </div>
    </React.Fragment>;
}
