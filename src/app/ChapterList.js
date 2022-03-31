import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useChapter from '../api/useChapter';
import Square from './components/Square';

export default function ChapterList() {
  const [chapters, setChapters] = useChapter([]);
  const [chapterWorks, setChapterWorks] = useState(null);

  useEffect(() => {
    const schoolRoomWorkList = JSON.parse(localStorage.getItem("schoolRoomWorkList"));
    const chapterWork = [];
    schoolRoomWorkList.forEach(element => {
      if (element.episodeTask) {
        const foundedChapter = element.episodeTask.episode.chapter;
        const hasChapter = chapterWork.find(cw => cw.id === foundedChapter.id);
        if (!hasChapter)
          chapterWork.push(element.episodeTask.episode.chapter)
      }
    });
    setChapterWorks(chapterWork)
    setChapters("findAllChapters", null);
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>
        <Link to="/student" style={{ color:"white", textDecoration:"none" }}> AXEBUG DIGITAL</Link>
          </b></h2></div>
        <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>CHAPTERS</b></h2></div>
      </div>
      <div className="d-flex justify-content-center mt-5">

        <div className='row' style={{ width: 750 }}>
          {
            chapters ?
              chapters.map((chapter, key) =>
                chapterWorks.find(cw => cw.id === chapter.id) ?
                  <Square key={key} col="3"
                    backgroundColor="black"
                    to={`/episode/?id=${chapter.id}`}
                  ><h1><b>{chapter.name}</b></h1> </Square>
                  :
                  <Square key={key} col="3"
                    backgroundColor="white"
                  ><h1><b>{chapter.name}</b></h1> </Square>
              )
              : null
          }
        </div>
      </div>
    </React.Fragment>
  );
}

