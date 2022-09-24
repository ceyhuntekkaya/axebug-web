import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useChapter from '../api/useChapter';
import GoalEpisode from '../app/GoalEpisode';
import { useParams } from 'react-router-dom';


export default function TeacherScore() {
    let { id } = useParams();
    const [chapters, setChapters] = useChapter([]);



    useEffect(() => {
        //setPanelList('findAllPanels')
        setChapters("findAllChapters", null);
        // eslint-disable-next-line 
    }, [])



    const goalContent = (type) => {
        return (<React.Fragment>
            {
                chapters ?
                    chapters.map(chapter =>
                        <React.Fragment>
                            <div className='text-white bg-dark p-2 m-2'><h2>{chapter.name}</h2></div>
                            <GoalEpisode chapterId={chapter.id} studentId={id} />
                        </React.Fragment>
                    )
                    : null
            }

        </React.Fragment>)
    }


  return (
    <div className='container'>
            <div className='row'>
                <div className='col-5 mt-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex " style={{ width: "100%" }}><h2><b> <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
                        </div>

                    </div>
                </div>
                <div className='col-7 mt-3'>
                    <div>
                        <div className="border border-2 border-dark p-2 pr-0 mt-4  black900" style={{ width: "100%", color: "white", backgroundColor: "#222529" }}><h2><b>GOALS AND SCORES</b></h2></div>
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    goalContent(true)
                }
            </div>
        </div>
  )
}
