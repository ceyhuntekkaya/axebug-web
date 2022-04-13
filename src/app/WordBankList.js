import React, { useEffect } from 'react';
import useChapter from '../api/useChapter';
import Home from './components/Home';
import Square from './components/Square';

export default function WordBankList() {
  const [chapters, setChapters] = useChapter([]);

  useEffect(() => {
    setChapters("findAllChaptersWithEpisodes", null);
  }, [])

  return <React.Fragment>
    <Home secondaryName="Word Bank" />
    <div className="d-flex justify-content-center mt-5">
      <div className='row' style={{ width: 750 }}>
        {
          chapters ?
            chapters.map((chapter, key) =>
              <div className='row'>
                <Square key={key} col="2" backgroundColor="black"><h4><b>{chapter.name}.{key}</b></h4> </Square>
                {
                  chapter.episodes.map((episode, no) =>
                    <Square key={"chap" + no} to={`/words/?id=${episode.id}`} col="2" backgroundColor="white"><h3><b>{episode.name}</b></h3> </Square>
                  )
                }
              </div>
            ) : null
        }
      </div>
    </div>
  </React.Fragment>;
}
