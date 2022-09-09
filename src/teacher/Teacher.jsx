import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Square from '../app/components/Square'
import ClassroomScore from './components/ClassroomScore'
import TeacherCalender from './components/TeacherCalender'
import useTeacher from "../api/useTeacher"
const studensUp = [
  { classroom: "5-A", name: "Kerem C." },
  { classroom: "5-B", name: "Ömer G." },
  { classroom: "5-B", name: "Derya A." },
  { classroom: "5-A", name: "Osman İ." },
  { classroom: "5-C", name: "Serap E." },
  { classroom: "5-C", name: "Faruk E." },
]
const studensDown = [
  { classroom: "5-C", name: "Osman C." },
  { classroom: "5-B", name: "Dilan M." },
  { classroom: "5-B", name: "Yıldız O." },
  { classroom: "5-A", name: "Seden D." },
  { classroom: "5-A", name: "Mina D." },
  { classroom: "5-C", name: "Ahmet D." },
]


export default function Teacher() {

  const [schoolRoomScore, setSchoolRoomScore] = useTeacher([]);
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    const teacherData = JSON.parse(localStorage.getItem("teacher"));
    setTeacher(teacherData);
    setSchoolRoomScore("schoolRoomScore", teacherData.id);
  }, [])

  console.log(schoolRoomScore)

  const addScoreArea = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/student" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
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
        <Square fontSize={30} col="12" backgroundColor="white" to={`/study/`}><b>My Classes</b></Square>
        <Square fontSize={30} col="12" backgroundColor="white" to={`/study/`}><b>Contents</b></Square>
        <Square fontSize={30} col="12" backgroundColor="white" to={`/study/`}><b>Reports</b></Square>
      </div>
    </div>
    <div className='container'>
      <div className='row mt-3'>
        {
          studensUp.map((s, key) =>
            <div key={key} className="col-2 bg-success border border-info p-2">
              {s.classroom}<br />
              {s.name}
            </div>
          )
        }
      </div>
      <div className='row mb-5 mt-1'>
        {
          studensDown.map((s, key) =>
            <div key={key} className="col-2 bg-info border border-success p-2">
              {s.classroom}<br />
              {s.name}
            </div>
          )
        }
      </div>
    </div>
  </React.Fragment>
  )
}
