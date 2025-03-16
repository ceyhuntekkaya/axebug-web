import React, {useEffect, useState} from 'react';
import useChapter from '../api/useChapter';
import Home from './components/Home';
import Square from './components/Square';

export default function WordBankList() {
    const [chapters, setChapters] = useChapter([]);
    const [chapterList, setChapterList] = useState([]);

    useEffect(() => {
        setChapters("findAllChaptersWithEpisodes", null);
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

    return <React.Fragment>
        <Home secondaryName="WORDBANK"/>
        <div className="d-flex justify-content-center mt-5">
            <div className='row' style={{width: 750}}>


                {
                    chapters ?

                        <div className='row' >

                            {
                                chapterList.map((episode, no) =>
                                    <Square key={"chap" + no} to={`/words/?id=${episode.id}`} col="3"
                                            backgroundColor="white"><h3><b>{episode.name}</b></h3></Square>
                                )
                            }
                        </div> : null

                }



            </div>
        </div>
    </React.Fragment>;
}
