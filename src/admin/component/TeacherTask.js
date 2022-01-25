import React, { useState, useEffect } from 'react'

const teacherModel = {
    "id": 0,
    "name": "",
    "surname": "",
    "username": "",
    "password": "",
    "active": true,
}

export default function TeacherTask(props) {
    const [name, setName] = useState(teacherModel.name);
    const [surname, setSurname] = useState(teacherModel.surname);
    const [username, setUsername] = useState(teacherModel.username);
    const [password, setPassword] = useState(teacherModel.password);
    const [active, setActive] = useState(teacherModel.active);
    const [id, setId] = useState(teacherModel.id);

    useEffect(() => {
        if (props.selectedTeacher.id) {
            setName(props.selectedTeacher.name);
            setSurname(props.selectedTeacher.surname);
            setUsername(props.selectedTeacher.username);
            setPassword(props.selectedTeacher.password);
            setActive(props.selectedTeacher.active);
            setId(props.selectedTeacher.id);
        }
    }, [props.selectedTeacher])

    const cancelEvent = (e) => {
        e.preventDefault();
        setName(teacherModel.name);
        setSurname(teacherModel.surname);
        setUsername(teacherModel.username);
        setPassword(teacherModel.password);
        setActive(teacherModel.active);
        setId(teacherModel.id);
        props.setSelectedTeacher({});
    }


    const addEvent = (e) => {
        e.preventDefault();
        const addTeacher = { "name": name, "surname": surname, "username": username, "password": password, "active": active };
        props.addTeacher(addTeacher);
    }

    const updateEvent = (e) => {
        e.preventDefault();
        const updateTeacher = {"id":id, "name": name, "surname": surname, "username": username, "password": password, "active": active };
        props.updateTeacher(updateTeacher);
    }

    const deleteEvent = (e) => {
        e.preventDefault();
        const deleteTeacher = { "id":id, "name": name, "surname": surname, "username": username, "password": password, "active": active };
        props.deleteTeacher(deleteTeacher);
    }



    return (
        <form>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-6">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>

                <div className="col-6">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col-6">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-6 mt-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={active} onChange={(e) => setActive(e.target.value)} />
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

