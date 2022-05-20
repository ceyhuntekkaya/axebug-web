import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import { Link } from 'react-router-dom';
import useExam from "../api/useExam"


export default function MyReports() {
    const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });
    const [examList, setExamList] = useExam([]);

    useEffect(() => {
        document.body.style.backgroundColor = '#eeeeee'; // '#231F20';
        const studentData = JSON.parse(localStorage.getItem("student"));
        setStudent(studentData);
        setExamList("reportList", studentData.id)
        // eslint-disable-next-line 
    }, [])

    const activeTaskShow = (type) => {
        return (
            <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                {
                    examList ?
                        examList.map((exam, key) =>
                            <Square blank={false} key={key} fontSize={30} col="4" backgroundColor="white" to={`../../admin/report/${exam.id}/${student.id}`}><b>{exam.name}</b></Square>
                        )
                        : null
                }
            </div>
        )
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
                            <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{student.name}'s REPORTS</b></h2></div>
                        </div>
                    </div>
                </div>
                <div className='col-7 mt-3'>
                    <div>
                        <div className="border border-2 border-dark p-2 mt-4 d-flex justify-content-center black900" style={{ width: "100%", color: "white", backgroundColor: "black" }}><h2><b>YOUR REPORTS</b></h2></div>
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
