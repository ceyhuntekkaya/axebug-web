import React, { useEffect, useState } from 'react';
import useTask from '../api/useTask';
import GoalDetails from './GoalDetails';

export default function GoalTask(props) {
    const [tasks, setTasks] = useTask([]);
    useEffect(() => {
        setTasks("findByEpisode", props.episodeId);
        // eslint-disable-next-line 
    }, [])

    return (
        <React.Fragment>
            {
                tasks ?
                    tasks.map((task, key) =>
                        <React.Fragment>
                            <div className='text-white bg-dark p-2 m-2'>
                                <h4>{task.name}</h4>
                            </div>
                            <GoalDetails taskId={task.id} />
                        </React.Fragment>
                    )
                    : null
            }
        </React.Fragment>
    )
}
