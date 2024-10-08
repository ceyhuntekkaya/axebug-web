import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useYearlyPlan from '../api/useYearlyPlan';
import { Link } from 'react-router-dom';
import Home from './components/Home';


export default function MyTasks() {
    const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });
    // const [studentWorkTaskList, setStudentWorkApi] = useStudentWork([]);
    const [studentWorkTaskList, setStudentWorkApi] = useYearlyPlan([]);

    useEffect(() => {
        document.body.style.backgroundColor = '#eeeeee'; // '#231F20';
        const studentData = JSON.parse(localStorage.getItem("student"));
        setStudent(studentData);
        setStudentWorkApi("findActivePlanBySchool", studentData.school.id)
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (studentWorkTaskList) {
            const activeTaskList = studentWorkTaskList.schoolRoomWorkList;
            localStorage.setItem("schoolRoomWorkList", JSON.stringify(activeTaskList))
        }
    }, [studentWorkTaskList])

    const checkComplated = (task, exam) => {
        if (task) {
            const find = studentWorkTaskList.studentWorkList.find(
                sw => sw.episodeTaskPanel ? sw.episodeTaskPanel.episodeTask.id === task.id : null);
            if (find)
                return false
        }
        else if (exam) {
            const find = studentWorkTaskList.studentWorkList.find(
                sw => sw.exam ? sw.exam.id === exam.id : null);
            if (find)
                return false
        }
        return true
    }




    const activeTaskShow = (type) => {
        return (<React.Fragment>
            <div className='row' style={{ paddingLeft: "20px", paddingRight: "8px", paddingTop: "10px" }}>
                {
                    studentWorkTaskList ?
                        studentWorkTaskList.map((task, key) =>
                            type || checkComplated(task.episodeTask, task.exam) === true ?
                                task.episodeTask ?
                                    <Square key={key} fontSize={30} col="3" backgroundColor="#FEF2F4" to={`/study/?id=${task.episodeTask.id}`}><b>{task.episodeTask.name}</b></Square>
                                    :
                                    task.exam.examType === "EXAM" ?
                                        <Square key={key} fontSize={30} col="3" backgroundColor="#C9A7EB" to={`/app/exam/${task.exam.id}`}><b>{task.exam.name}</b></Square>
                                        :
                                        <Square key={key} fontSize={30} col="3" backgroundColor="#87CBB9" to={`/app/quiz/${task.exam.id}`}><b>{task.exam.name}</b></Square>
                                : null
                        )
                        : null
                }
            </div>
        </React.Fragment>)
    }



    return (
        <div className='container'>
            <div className='row'>

                
                <div className='col-5 mt-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/student" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
                        </div>
                        <div className='col-12'>
                            <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{student.name}'s Tasks</b></h2></div>
                        </div>
                    </div>
                </div>



                <div className='col-7 mt-3'>
                    <div>
                        <div className="border border-2 border-dark p-2 mt-4 d-flex justify-content-center black900" style={{ width: "100%", color: "white", backgroundColor: "#222529" }}><h2><b>YOUR TASKS</b></h2></div>
                    </div><div className='row'>
                        {
                            activeTaskShow(true)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
