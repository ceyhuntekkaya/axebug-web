import React, { useEffect, useState } from 'react';
import useEpisode from '../api/useEpisode';
import GoalTask from './GoalTask';

export default function GoalEpisode(props) {

    const [episodes, setEpisodes] = useEpisode([]);

    useEffect(() => {
        setEpisodes("findByChapter", props.chapterId);
        // eslint-disable-next-line 
    }, [])

    return (<React.Fragment>
        {
            episodes ?
                episodes.map((episode, key) =>
                    <React.Fragment>
                        <div className='text-white bg-dark p-2 m-2'>
                            <h3>{episode.name}</h3>
                        </div>
                        <GoalTask studentId={props.studentId} episodeId={episode.id} />
                    </React.Fragment>
                )
                : null
        }
    </React.Fragment>
    )
}
