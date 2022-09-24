import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useTeacher from "../api/useTeacher"
import ClassroomScore from './components/ClassroomScore';

export default function TeacherClassrooms() {

  const [schoolRoomScore, setSchoolRoomScore] = useTeacher([]);
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = 'white'; // '#231F20';
    const teacherData = JSON.parse(localStorage.getItem("teacher"));
    setTeacher(teacherData);
    setSchoolRoomScore("schoolRoomScore", teacherData.id);
  }, [])


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
        </div>
        <div className='col-12'>
          <div className="text-white bg-dark border border-2 border-dark p-4 mt-3" style={{ width: "100%" }}>
            {
              schoolRoomScore ?
                schoolRoomScore.map((schoolRoom, key) => <React.Fragment>
                  <ClassroomScore key={key} schoolRoom={schoolRoom} />
                 
                </React.Fragment>
                ) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
