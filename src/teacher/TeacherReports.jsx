import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSchoolRoom from '../api/useSchoolRoom';
import useExam from '../api/useExam';
import useStudent from '../api/useStudent';
import StudentSingleReport from './StudentSingleReport';

export default function TeacherReports() {
  const [studentList, setStudentList] = useStudent([]);
  const [exams, setExams] = useExam([]);
  const [schoolRooms, setSchoolRooms] = useSchoolRoom([]);
  const [studentId, setStudentId] = useState(0)
  const [examId, setExamId] = useState(0)
  const [schoolRoomId, setSchoolRoomId] = useState(0)
  const [timeStamp, setTimeStamp] = useState(0)


  useEffect(() => {
    setExams("findAllExam")
    const teacher = JSON.parse(localStorage.getItem('teacher'))
    setSchoolRooms("findAllSchoolRoom", teacher.school.id)
    //     setReportData("createReport", { studentId: std, examId: id })
  }, [])


  useEffect(() => {
    if (schoolRoomId !== undefined) {
      setStudentList('findBySchoolRoomStudent', schoolRoomId)
    }
  }, [schoolRoomId])


  const getReport = () => {
    if (examId !== 0 && studentId !== 0) {
      setTimeStamp(Date.now().toString())
    }
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-4'>
          <div className='row'>
            <div className='col-12'>
              <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
            </div>
            <div className='col-12'>
              <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}>
                <div className='row w-100'>
                  <div className='col-3'>Exams<br />
                    <select className="form-select" onChange={(e) => setExamId(e.target.value)}>
                      <option value="0">Select Exam</option>
                      {
                        exams ?
                          exams.map((exam, key) =>
                            <option key={key} value={exam.id}>{exam.name}</option>
                          ) : null
                      }
                    </select>

                  </div>
                  <div className='col-3'>Class Rooms<br />

                    <select className="form-select" onChange={(e) => setSchoolRoomId(e.target.value)}>
                      <option value="0">Select Classroom</option>
                      {
                        schoolRooms ?
                          schoolRooms.map((schoolRoom, key) =>
                            <option key={key} value={schoolRoom.id}>{schoolRoom.name}</option>
                          ) : null
                      }
                    </select>
                  </div>
                  <div className='col-3'>Students<br />

                    <select className="form-select" onChange={(e) => setStudentId(e.target.value)}>
                      <option value="0">Select Student</option>
                      {
                        studentList ?
                          studentList.map((student, key) =>
                            <option key={key} value={student.id}>{student.name} {student.surname}</option>
                          ) : null
                      }
                    </select>
                  </div>
                  <div className='col-3'><br /><button onClick={() => getReport()} className='btn btn-success'>Get Report</button></div>
                </div>


              </div>
            </div>
            <div className='w-100'>

              {
                timeStamp ? examId !== 0 && studentId !== 0 ?
                  <StudentSingleReport studentId={studentId} examId={examId} />
                  : null : null
              }

            </div>

          </div>
        </div>



      </div>
    </div>
  )
}
