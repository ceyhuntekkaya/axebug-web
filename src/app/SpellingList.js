import React, { useEffect } from 'react';
import useChapter from '../api/useChapter';
import Square from './components/Square';
import { Link } from 'react-router-dom';

export default function SpellingList() {
  const [chapters, setChapters] = useChapter([]);

  useEffect(() => {
    setChapters("findAllChaptersWithEpisodes", null);
  }, [])

  return <React.Fragment>
    <div className="container">
      <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>
      <Link to="/student" style={{ color:"white", textDecoration:"none" }}> AXEBUG DIGITAL</Link>
        </b></h2></div>
      <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>SPELLING BEE</b></h2></div>
    </div>
    <div className="d-flex justify-content-center mt-5">
      <div className='row' style={{ width: 750 }}>
        {
          chapters ?
            chapters.map((chapter, key) =>
              <div className='row'>
                <Square key={key} col="2" backgroundColor="black"><h4><b>{chapter.name}.{key}</b></h4> </Square>
                {
                  chapter.episodes.map((episode, no) =>
                    <Square key={"chap"+no} to={`/spellingword/?id=${episode.id}`} col="2" backgroundColor="white"><h3><b>{episode.name}</b></h3> </Square>
                  )
                }
              </div>
            ) : null
        }
      </div>
    </div>
  </React.Fragment>;
}
