import React, { useState, useEffect } from 'react'
import Menu from '../component/Menu'
import useSchoolRoom from '../../api/useSchoolRoom'
import useStudent from "../../api/useStudent"
import useExam from "../../api/useExam"
import { Link } from 'react-router-dom'

export default function ReportList() {
    const [studentList, setStudentList] = useStudent([]);
    const [schoolRoomList, setSchoolRoomList] = useSchoolRoom([]);
    const [selectedStudent, setSelectedStudent] = useState({});
    const [setSchool] = useState(null);
    const [selectedSchoolRoomId, setSelectedSchoolRoomId] = useState(0);
    const [examList, setExamList] = useExam([]);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem("school"));
        setSchool(res);
        setSchoolRoomList("findAllSchoolRoom", res.id);
        // eslint-disable-next-line 
    }, [])

    const selectStudentEvent = (student) => {
        setSelectedStudent(student)
        setExamList("reportList", student.id)
    }

    const handleSchooroomChange = (schoolRoomId) => {
        setSelectedSchoolRoomId(schoolRoomId)
        setStudentList("findBySchoolRoomStudent", schoolRoomId);
    }

    return (
        <div className="container">
            <Menu />
            <div className="row mt-4">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Student
                        </div>
                        <div className="card-body">
                            {
                                examList ?
                                examList.map((exam, key) => 
                                <React.Fragment>
                                    <Link className='btn btn-success w-100' to={`../../admin/report/${exam.id}/${selectedStudent.id}`}> {exam.name}</Link>
                                   
                                </React.Fragment>
                                )
                                    
                                    : null

                            }
                          
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Student List
                        </div>
                        <div className="card-body">
                            <div>
                                <select className="form-select" id="schoolRoomGrade" value={selectedSchoolRoomId}
                                    onChange={(e) => handleSchooroomChange(e.target.value)}>
                                    <option value="0">Select School Room</option>
                                    {
                                        schoolRoomList ?
                                            schoolRoomList.map((schoolroom, key) => (
                                                <option key={key} value={`${schoolroom.id}`}>{schoolroom.name}</option>
                                            )) : null
                                    }
                                </select>
                            </div>

                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Surname</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {studentList ?
                                        studentList.map((std, key) => (
                                            <tr key={key} className={`${selectedStudent.id === std.id ? "btn-warning" : ""}`}>
                                                <th><button className="btn btn-success" onClick={() => selectStudentEvent(std)}>Select</button></th>
                                                <td>{std.name}</td>
                                                <td>{std.surname}</td>
                                            </tr>
                                        )) : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
