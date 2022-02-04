import React, { useEffect } from 'react';
import useChapter from '../api/useChapter';
import Square from './components/Square';

export default function ChapterList() {
  const [chapters, setChapters] = useChapter([]);

  useEffect(() => {
    setChapters("findAllChapters", null);
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>AXEBUG DIGITAL</b></h2></div>
        <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>CHAPTERS</b></h2></div>
      </div>
      <div className="d-flex justify-content-center mt-5">

        <div className='row' style={{ width: 750 }}>
          {
            chapters ?
              chapters.map((chapter, key) =>
                <Square key={key} col="3" backgroundColor="white" to={`/episode/?id=${chapter.id}`}><h1><b>{chapter.name}</b></h1> </Square>
              )
              : null
          }
        </div>
      </div>
    </React.Fragment>
  );
}

