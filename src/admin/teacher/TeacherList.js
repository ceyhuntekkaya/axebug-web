import React, { useState, useEffect } from 'react'
import Menu from '../component/Menu'
import TeacherTask from './TeacherTask'
import useTeacher from "../../api/useTeacher"

export default function TeacherList() {
  const [teacherList, setTeacherList] = useTeacher([]);
  const [selectedTeacher, setSelectedTeacher] = useState({});
  const [school, setSchool] = useState(null);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("school"));
    setSchool(res);
    setTeacherList("findBySchoolteacher", res.id);
    // eslint-disable-next-line 
  }, [])


  const addTeacher = (teacher) => {
    teacher.school = { id: school.id };
    setTeacherList("createteacher", teacher);
  }


  const updateTeacher = (teacher) => {

  }

  const deleteTeacher = (teacher) => {
    setTeacherList("deleteteacher", teacher.id);
  }

  const selectTeacherEvent = (teacher) => {
    setSelectedTeacher(teacher);
  }



  return (
    <div className="container">
      <Menu />
      <div className="row mt-4">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Teacher
            </div>
            <div className="card-body">
              <TeacherTask addTeacher={addTeacher} selectedTeacher={selectedTeacher} setSelectedTeacher={setSelectedTeacher} updateTeacher={updateTeacher} deleteTeacher={deleteTeacher} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Teacher List
            </div>
            <div className="card-body">

              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Username</th>
                    <th scope="col">Active</th>
                    <th scope="col">Class Name</th>
                  </tr>
                </thead>
                <tbody>

                  {teacherList ?
                    teacherList.map((teacher, key) => (
                      <tr key={key} className={`${selectedTeacher.id === teacher.id ? "btn-warning" : ""}`}>
                        <th><button className="btn btn-success" onClick={() => selectTeacherEvent(teacher)}>Select</button></th>
                        <td>{teacher.name}</td>
                        <td>{teacher.surname}</td>
                        <td>{teacher.username}</td>
                        <td>{teacher.active}</td>
                        <td>-</td>
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
