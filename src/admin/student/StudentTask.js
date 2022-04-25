import React, { useState, useEffect } from 'react'


const studentModel = {
    "id": 0,
    "name": "",
    "surname": "",
    "username": "",
    "password": "",
    "active": true,
}

export default function StudentTask(props) {

    const [name, setName] = useState(studentModel.name);
    const [surname, setSurname] = useState(studentModel.surname);
    const [username, setUsername] = useState(studentModel.username);
    const [password, setPassword] = useState(studentModel.password);
    const [active, setActive] = useState(studentModel.active);
    const [selectedSchoolRoomId, setSelectedSchoolRoomId] = useState(0);
    const [id, setId] = useState(studentModel.id);

    useEffect(() => {
        if (props.selectedStudent.id) {
            setName(props.selectedStudent.name);
            setSurname(props.selectedStudent.surname);
            setUsername(props.selectedStudent.username);
            setPassword(props.selectedStudent.password);
            setActive(props.selectedStudent.active);
            setId(props.selectedStudent.id);
            setSelectedSchoolRoomId(props.selectedStudent.schoolRoomId);
        }
        // eslint-disable-next-line 
    }, [props.selectedStudent])

    const cancelEvent = (e) => {
        e.preventDefault();
        setName(studentModel.name);
        setSurname(studentModel.surname);
        setUsername(studentModel.username);
        setPassword(studentModel.password);
        setActive(studentModel.active);
        setId(studentModel.id);
        setSelectedSchoolRoomId(0)
        props.setSelectedStudent({});
    }


    const addEvent = (e) => {
        e.preventDefault();
        const addStudent = { "name": name, "surname": surname, "username": username, "password": password, "active": active, schoolRoom: {"id": selectedSchoolRoomId}};
        props.addStudent(addStudent);
    }

    const updateEvent = (e) => {
        e.preventDefault();
        const updateStudent = { "id": id, "name": name, "surname": surname, "username": username, "password": password, "active": active, schoolRoom: {"id": selectedSchoolRoomId}};
        props.updateStudent(updateStudent);
    }

    const deleteEvent = (e) => {
        e.preventDefault();
        const deletetudent = { "id": id};
        props.deleteStudent(deletetudent);
    }



    return (
        <form>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="studentName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="studentName" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="col-6">
                    <label htmlFor="studentSurname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="studentSurname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>

                <div className="col-6">
                    <label htmlFor="studentUserName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="studentUserName" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col-6">
                    <label htmlFor="studentPassword" className="form-label">Password</label>
                    <input type="text" className="form-control" id="studentPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-12">
                    <label htmlFor="studentSchoolRoom" className="form-label">School Room</label>
                    <select className="form-select" id="schoolRoomGrade" value={selectedSchoolRoomId}
                        onChange={(e) => setSelectedSchoolRoomId(e.target.value)}>
                        <option value="0">Select School Room</option>
                        {
                            props.schoolRoomList ?
                                props.schoolRoomList.map((schoolroom, key) => (
                                    <option key={key} value={`${schoolroom.id}`}>{schoolroom.name}</option>
                                )) : null
                        }
                    </select>
                </div>
                <div className="col-6 mt-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={active} onChange={(e) => setActive(e.target.value)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                {
                    !props.selectedStudent.id ?
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
