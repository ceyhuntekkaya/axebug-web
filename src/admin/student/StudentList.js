import React, { useState } from 'react'
import Menu from '../component/Menu'
import StudentTask from './StudentTask'

export default function StudentList() {
    //<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    const [studentList, setStudentList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState({});

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

      
    const addStudent = (student) => {
        const stdList = JSON.parse(JSON.stringify(studentList, getCircularReplacer()));
        student.id = studentList.length+1;
        stdList.push(student);
        setStudentList(stdList);
    }

    const updateStudent = (student) => {
        let stdList = [];
        studentList.forEach((data, i) => {
            if(data.id=== student.id){
                stdList.push(student)
            }
            else{
                stdList.push(data)
            }
        })
        setStudentList(stdList);
    }

    const deleteStudent = (student) => {
        let stdList = [];
        studentList.forEach((data, i) => {
            if(data.id !== student.id){
                stdList.push(data)
            }
        })
        setStudentList(stdList);
    }

    const selectStudentEvent = (student) => {
        setSelectedStudent(student)
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
                            <StudentTask addStudent={addStudent} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} updateStudent={updateStudent} deleteStudent={deleteStudent}/>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Student List
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
                                        studentList.map((std, key) => (
                                            <tr key={key} className={`${selectedStudent.id=== std.id ? "btn-warning": ""}`}>
                                                <th><button className="btn btn-success" onClick={()=>selectStudentEvent(std)}>Select</button></th>
                                                <td>{std.name}</td>
                                                <td>{std.surname}</td>
                                                <td>{std.username}</td>
                                                <td>{std.active}</td>
                                                <td>{std.id}</td>
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
