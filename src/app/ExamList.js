import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import { Link } from 'react-router-dom';
import useStudentWork from '../api/useStudentWork'

export default function ExamList() {

    const [studentWorkTaskList, setStudentWorkApi] = useStudentWork(null);
    const [examList, setExamList] = useState([]);

    useEffect(() => {
        document.body.style.backgroundColor = 'white'; // '#231F20';
        const studentData = JSON.parse(localStorage.getItem("student"));
        setStudentWorkApi("studentActiveTask", studentData.id)
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (studentWorkTaskList) {
            //const studentWorkListApi = studentWorkTaskList.studentWorkList;
            //const schoolRoomWorkListApi = studentWorkTaskList.schoolRoomWorkList;
            const examListApi = studentWorkTaskList.examList;
            const exams = [];
            if (examListApi) {
                examListApi.forEach(exam => {
                    const name = exam.name;
                    if (exam.examType === "EXAM") {
                        exams.push(exam)
                        if (studentWorkTaskList) {
                            studentWorkTaskList.schoolRoomWorkList.forEach(element => {
                                if (element.exam) {
                                    if (element.exam.examType === "EXAM") {
                                        if (element.exam.name === name) {
                                            exam.ready = true;
                                        }
                                    }

                                }
                            });
                        }
                    }
                })
            }
            setExamList(exams)
        }
        // eslint-disable-next-line 
    }, [studentWorkTaskList])

    return (
        <React.Fragment>
            <div className="container">
                <div className="text-white bg-dark border border-2 border-dark p-2 mt-5 d-flex justify-content-center" style={{ width: 350 }}><h2><b>
                    <Link to="/student" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link>
                </b></h2></div>
                <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: 350 }}><h2><b>EXAMS</b></h2></div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className='row' style={{ width: 750 }}>
                    {
                        examList.map((exam, key) =>
                            exam.ready === true ?
                                <Square col="3" key={key} to={`../../app/exam/${exam.id}`} backgroundColor="black"><h1><b>{exam.name}</b></h1> </Square>
                                :
                                <Square col="3" key={key} backgroundColor="white"><h1><b>{exam.name}</b></h1> </Square>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    );
}
