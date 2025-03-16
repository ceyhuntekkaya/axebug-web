import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import useChapter from '../../api/useChapter';
import Square from '../../app/components/Square';

export default function TeacherSpellingList() {
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
        <div className="container">
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center"
                 style={{width: 350}}><h2><b>
                <Link className='homeLinkBlack' style={{textDecoration: "none"}} to="/teacher-contents/">AXEBUG
                    DIGITAL</Link></b></h2></div>
            <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{width: 350}}>
                <h2><b>SPELLING</b></h2></div>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <div className='row' style={{width: 750}}>
                {
                    chapters ?

                                <div className='row' >

                                    {
                                        chapterList.map((episode, no) =>
                                            <Square key={no} to={`/teacher-spellingword/?id=${episode.id}`} col="3"
                                                    backgroundColor="white"><h3><b>{episode.name} </b></h3></Square>
                                        )
                                    }
                                </div> : null

                }
            </div>
        </div>
    </React.Fragment>;
}
