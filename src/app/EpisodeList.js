import React, { useEffect, useState } from 'react';
import useEpisode from '../api/useEpisode';
import Square from './components/Square';
import { useSearchParams } from 'react-router-dom';

export default function EpisodeList() {
    const [episodes, setEpisodes] = useEpisode([]);
    const [searchParams,] = useSearchParams();
    const [episodeWorks, setEpisodeWorks] = useState(null);

    useEffect(() => {
        var id = searchParams.get("id");
        const schoolRoomWorkList = JSON.parse(localStorage.getItem("schoolRoomWorkList"));
        const episodeWork = [];
        schoolRoomWorkList.forEach(element => {
            if (element.episodeTask) {
                const foundedChapter = element.episodeTask.episode;
                const hasChapter = episodeWork.find(cw => cw.id === foundedChapter.id);
                if (!hasChapter)
                    episodeWork.push(element.episodeTask.episode)
            }
        });
        setEpisodeWorks(episodeWork)
        setEpisodes("findByChapter", id);
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>AXEBUG DIGITAL</b></h2></div>
                <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>EPISODES</b></h2></div>
            </div>
            <div className="d-flex justify-content-center mt-5">

                <div className='row' style={{ width: 750 }}>
                    {
                        episodes ?
                            episodes.map((episode, key) =>
                                episodeWorks.find(cw => cw.id === episode.id) ?
                                    <Square key={key} col="3" backgroundColor="black" to={`/task/?id=${episode.id}`}><h1><b>{episode.name}</b></h1> </Square>
                                    :
                                    <Square key={key} col="3" backgroundColor="white"><h1><b>{episode.name}</b></h1> </Square>
                            )
                            : null
                    }
                </div>
            </div>
        </React.Fragment>
    );
}