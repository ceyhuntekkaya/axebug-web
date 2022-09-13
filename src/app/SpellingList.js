import React, { useEffect, useState } from 'react';
import useChapter from '../api/useChapter';
import Square from './components/Square';
import { Link } from 'react-router-dom';

export default function SpellingList() {
  const [chapters, setChapters] = useChapter([]);
  const [activeEpisodeList, setActiveEpisodeList] = useState([]);

  const [list, setList] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChapters("findAllChaptersWithEpisodes", null);
    setActiveEpisodeList(JSON.parse(localStorage.getItem("activeEpisodeList")));


    // eslint-disable-next-line 
  }, [])


  useEffect(() => {
    if (ready == false)
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
        setList(JSON.parse(tempEpisode))

      }

    // eslint-disable-next-line 
  }, [chapters, activeEpisodeList])

console.log(list)

  return <React.Fragment>
    <div className="container">
      <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>
        <Link to="/student" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link>
      </b></h2></div>
      <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>SPELLING</b></h2></div>
    </div>
    <div className="d-flex justify-content-center mt-5">
      <div className='row' style={{ width: 750 }}>
        {
          list ?
          list.map((chapter, key) =>
              <div className='row' key={key}>
                {/* <Square key={key} col="3" backgroundColor="black"><h4><b>{key+1}</b></h4> </Square> */}
                {
                  chapter.episodes.map((episode, no) =>
                  no === 0 && key == 0 ? 
                    <Square key={no} to={`/spellingword/?id=${episode.id}`} col="3" backgroundColor="white"><h3><b>{episode.name}</b></h3> </Square>
                    : null
                  )
                }
              </div>
            ) : null
        }
      </div>
    </div>
  </React.Fragment>;
}
