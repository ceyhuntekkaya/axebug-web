import React, { useState, useEffect } from 'react'
import useTeacher from "../../api/useTeacher"

const teacherModel = {
    "id": 0,
    "name": "",
    "surname": "",
    "username": "",
    "password": "",
    "active": true,
}

export default function TeacherTask(props) {
    const [teacherList, setTeacherList] = useTeacher([]);
    const [teacher, setTeacher] = useState(teacherModel);
    


    useEffect(() => {
        if(props.selectedTeacher){
            setTeacher(props.selectedTeacher);
        }
    }, [props.selectedTeacher])


    const cancelEvent = (e) => {
        e.preventDefault();
        setTeacher(teacherModel);
        props.setSelectedTeacher(teacherModel)
    }

    const addEvent = (e) => {
        e.preventDefault();
        props.addTeacher(teacher);
    }

    const updateEvent = (e) => {
        e.preventDefault();
    }

    const deleteEvent = (e) => {
        e.preventDefault();
        props.deleteTeacher(teacher);
    }



    return (
        <form>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={teacher.name} onChange={(e) => setTeacher({ ...teacher, name: e.target.value })} />
                </div>
                <div className="col-6">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="surname" value={teacher.surname} onChange={(e) => setTeacher({ ...teacher, surname: e.target.value })} />
                </div>

                <div className="col-6">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={teacher.username} onChange={(e) => setTeacher({ ...teacher, username: e.target.value })} />
                </div>
                <div className="col-6">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="Password" value={teacher.password} onChange={(e) => setTeacher({ ...teacher, password: e.target.value })} />
                </div>
                <div className="col-6 mt-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={teacher.active} onChange={(e) => setTeacher({ ...teacher, active: e.target.value })} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                {
                    !props.selectedTeacher.id ?
                        <div className="container mt-4">
                            <div className="row row-cols-auto">
                                <div className="col"><button href="#" className="btn btn-primary" onClick={(e) => cancelEvent(e)}>Cancel</button></div>
                                <div className="col"><button href="#" className="btn btn-primary" onClick={(e) => addEvent(e)}>Save</button></div>
                            </div>
                        </div>
                        :
                        <div className="container mt-4">
                            <div className="row row-cols-auto">
                                <div className="col"><button href="#" className="btn btn-primary" onClick={(e) => cancelEvent(e)}>Cancel</button></div>
                                <div className="col"><button href="#" className="btn btn-primary" onClick={(e) => updateEvent(e)}>Update</button></div>
                                <div className="col"><button href="#" className="btn btn-primary" onClick={(e) => deleteEvent(e)}>Delete</button></div>
                            </div>
                        </div>
                }
            </div>
        </form>
    )
}

