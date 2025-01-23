import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Square from '../app/components/Square'
import ClassroomScore from './components/ClassroomScore'
import TeacherCalender from './components/TeacherCalender'
import useTeacher from "../api/useTeacher"
import { useNavigate } from "react-router-dom";



export default function Teacher() {

  const [schoolRoomScore, setSchoolRoomScore] = useTeacher([]);
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    document.body.style.backgroundColor = 'white'; // '#231F20';
    const teacherData = JSON.parse(localStorage.getItem("teacher"));
    setTeacher(teacherData);
    console.log(teacherData)
    setSchoolRoomScore("schoolRoomScore", teacherData.id);
  }, [])

  const navigate = useNavigate();
  const addScoreArea = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
          </div>
          <div className='col-12'>
            <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{teacher.name} {teacher.surname} </b></h2></div>
          </div>
          <div className='col-12'>
            <div className="text-white bg-dark border border-2 border-dark p-4 mt-3" style={{ width: "100%" }}>
              {
                schoolRoomScore ?
                  schoolRoomScore.map((schoolRoom, key) =>
                    <ClassroomScore key={key} schoolRoom={schoolRoom} />
                  ) : null
              }


            </div>
          </div>
        </div>
      </div>
    )
  }


  const exit = () => {
    localStorage.setItem("teacher", null);
    navigate(`/`);
  }

  return (<React.Fragment>
    <div className='row'>
      <div className='col-5'>
        {
          addScoreArea()
        }
      </div>
      <div className='col-5'>

        <TeacherCalender />
      </div>
      <div className='col-2 p-3 mr-3'>
        <div className='p-2'>


        <div className='col-4'>
              <div className="mt-3 d-flex justify-content-center"><img style={{ cursor: "pointer" }} onClick={() => exit()} className='w-100' src={`assets/exit.png`} /></div>

            </div>
        </div>
        {
          // <Square fontSize={30} col="12" backgroundColor="white" to={`/teacher-classes/`}><b>My Classes</b></Square>
        }

        <Square fontSize={30} col="12" backgroundColor="white" to={`/teacher-contents/`}><b>Contents</b></Square>
        <Square fontSize={30} col="12" backgroundColor="white" to={`/teacher-reports/`}><b>Reports</b></Square>
      </div>
    </div>

    <div className='mt-3'></div>
  </React.Fragment>
  )
}
