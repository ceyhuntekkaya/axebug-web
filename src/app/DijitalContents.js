import React, {useEffect, useState} from 'react';
import Square from './components/Square';
import useStudentWork from '../api/useStudentWork'
import {Link} from 'react-router-dom';


export default function DijitalContents() {
    const [student, setStudent] = useState({name: "", surname: "", avatar: ""});
    const [studentWorkTaskList, setStudentWorkApi] = useStudentWork([]);


    useEffect(() => {
        document.body.style.backgroundColor = '#eeeeee'; // '#231F20';
        const studentData = JSON.parse(localStorage.getItem("student"));
        setStudent(studentData);
        setStudentWorkApi("studentActiveTask", studentData.id)
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
        } else if (exam) {
            const find = studentWorkTaskList.studentWorkList.find(
                sw => sw.exam ? sw.exam.id === exam.id : null);
            if (find)
                return false
        }
        return true
    }

    const activeTaskShow = () => {
        return (
            <React.Fragment>
                <div className="row mt-3" style={{paddingLeft: "8px", paddingRight: "8px"}}>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Chapter1/index.html"><img
                        className='w-100' src={`assets/ch1.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Chapter2v3/index.html"><img
                        className='w-100' src={`assets/ch2.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Chapter3/index.html"><img
                        className='w-100' src={`assets/ch3.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Chapter4/index.html"><img
                        className='w-100' src={`assets/ch4.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Activite1/index.html"><img
                        className='w-100' src={`assets/ab1.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Activite2v3/index.html"><img
                        className='w-100' src={`assets/ab2.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Activite3/index.html"><img
                        className='w-100' src={`assets/ab3.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Activite4/index.html"><img
                        className='w-100' src={`assets/ab4.png`}/></a></div>

                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Mathematics/index.html"><img
                        className='w-100' src={`assets/math.png`}/></a></div>
                    <div className="col-3 p-2"><a target="_blank"
                                                  href="https://madeinbrain.net/axebug/HTML/Science/index.html"><img
                        className='w-100' src={`assets/science.png`}/></a></div>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5 mt-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div
                                className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center"
                                style={{width: "100%"}}><h2><b> <Link to="/student" style={{
                                color: "white",
                                textDecoration: "none"
                            }}> AXEBUG DIGITAL</Link></b></h2></div>
                        </div>
                        <div className='col-12'>
                            <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center"
                                 style={{width: "100%"}}><h2><b>{student.name}'s Contents</b></h2></div>
                        </div>
                    </div>
                    <div className='row'>
                        <Square col="4" backgroundColor="black" to="/student"><b><span>HOME PAGE</span></b> </Square>


                    </div>
                </div>
                <div className='col-7 mt-3'>
                    <div>
                        <div className="border border-2 border-dark p-2 mt-4 d-flex justify-content-center black900"
                             style={{width: "100%", color: "white", backgroundColor: "#222529"}}><h2><b>DIJITAL
                            CONTENTS</b></h2></div>
                    </div>
                    <div className='row'>
                        {
                            activeTaskShow(true)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
