import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usePanel from '../api/usePanel';
import useStudentWork from '../api/useStudentWork'

export default function GoalDetails(props) {
    const [panels, setPanels] = usePanel([]);
    const [studentWorkTaskList, setStudentWorkApi] = useStudentWork(null);


    useEffect(() => {
        document.body.style.backgroundColor = '#eeeeee'; // '#231F20';
        if (props.studentId) {
            setStudentWorkApi("checkStudentWorkTask", { studentId: props.studentId, taskId: props.taskId });
        }
        else {
            const studentData = JSON.parse(localStorage.getItem("student"));
            setStudentWorkApi("checkStudentWorkTask", { studentId: studentData.id, taskId: props.taskId });
        }
        //setPanels("findByTask", props.taskId);
        // eslint-disable-next-line 
    }, [])


    useEffect(() => {
        setPanels("findByTask", props.taskId);
        // eslint-disable-next-line 
    }, [studentWorkTaskList])


    const calculateScore = (panelId) => {

        if (studentWorkTaskList) {
            const found = studentWorkTaskList.find(w => w.episodeTaskPanel.id === panelId)
            if (found) {

                return found.speakingEvaluation + " - " + found.readEvaluation + " - " + found.writeEvaluation + " - " + found.listeningEvaluation

            }
            else {
                return ".. - .. - .. - .."
            }
        }
        else {
            return ".. - .. - .. - .."
        }
    }

    return (
        <div className='row'>
            {
                panels ?
                    panels.map((panel, key) => (
                        <div className={`col-2 mb-2 mt-2`} ><Link to={`/study/?id=${props.taskId}`}>
                            <img src={`https://axebug.s3.eu-central-1.amazonaws.com/assets/${panel.imageFullUrl}`} key={key} className={`col-12`} style={{ cursor: "pointer" }} alt={key} />
                        </Link><div className='border border-success p-1 mt-1 d-flex justify-content-center' style={{ fontSize: "10pt" }}>{calculateScore(panel.id)}</div>
                        </div>
                    )) : null
            }
        </div>
    )
}
