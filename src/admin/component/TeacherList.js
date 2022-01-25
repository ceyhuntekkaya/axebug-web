import React, { useState } from 'react'
import Menu from './Menu'
import TeacherTask from './TeacherTask'

export default function TeacherList(props) {
  const [teacherList, setTeacherList] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState({});

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };


  const addTeacher = (teacher) => {
    const teachers = JSON.parse(JSON.stringify(teacherList, getCircularReplacer()));
    teacher.id = teacherList.length + 1;
    teacherList.push(teacher);
    setTeacherList(teacher);
  }


  const updateTeacher = (teacher) => {
    let teachers = [];
    teacherList.forEach((data, i) => {
      if (data.id === teacher.id) {
        teachers.push(teacher)
      }
      else {
        teachers.push(data)
      }
    })
    setTeacherList(teachers);
  }

  const deleteTeacher = (teacher) => {
    let teachers = [];
    teacherList.forEach((data, i) => {
      if (data.id !== teacher.id) {
        teachers.push(data)
      }
    })
    setTeacherList(teachers);
  }

  const selectTeacherEvent = (teacher) => {
    setSelectedTeacher(teacher)
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

                  {
                    teacherList.map((teacher, key) => (
                      <tr key={key} className={`${selectedTeacher.id === teacher.id ? "btn-warning" : ""}`}>
                        <th><button className="btn btn-success" onClick={() => selectTeacherEvent(teacher)}>Select</button></th>
                        <td>{teacher.name}</td>
                        <td>{teacher.surname}</td>
                        <td>{teacher.username}</td>
                        <td>{teacher.active}</td>
                        <td>{teacher.id}</td>
                      </tr>
                    ))
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
