import React, { useEffect } from 'react';
import useTask from '../api/useTask';
import Square from './components/Square';
import { useSearchParams } from 'react-router-dom';

export default function TaskList() {
    const [tasks, setTasks] = useTask([]);
    const [searchParams,] = useSearchParams();

    useEffect(() => {
        var id = searchParams.get("id");
            setTasks("findByEpisode", id);
    }, [])

    return (
        <React.Fragment>
        <div className="container">
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>AXEBUG DIGITAL</b></h2></div>
            <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>TASKS</b></h2></div>
        </div>
        <div className="d-flex justify-content-center mt-5">

            <div className='row' style={{ width: 750 }}>
                {
                    tasks ?
                    tasks.map((task, key) =>
                            <Square key={key} col="2" backgroundColor="white" to={`/study/?id=${task.id}`}><h1><b>{task.name}</b></h1> </Square>
                        )
                        : null
                }
            </div>
        </div>
    </React.Fragment>
    );
}
