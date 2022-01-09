import React, { useState, useEffect } from 'react'


const schoolRoomtModel = {
    "id": 0,
    "name": "",
    "grade": "",
    "active": true,
}


export default function SchoolRoomTask(props) {
    const [name, setName] = useState(schoolRoomtModel.name);
    const [grade, setGrade] = useState(schoolRoomtModel.grade);
    const [active, setActive] = useState(schoolRoomtModel.active);
    const [id, setId] = useState(schoolRoomtModel.id);

    useEffect(() => {
        if (props.selectedSchoolRoom.id) {
            setName(props.selectedSchoolRoom.name);
            setGrade(props.selectedSchoolRoom.grade);
            setActive(props.selectedSchoolRoom.active);
            setId(props.selectedSchoolRoom.id);
        }
    }, [props.selectedSchoolRoom])

    const cancelEvent = (e) => {
        e.preventDefault();
        setName(schoolRoomtModel.name);
        setGrade(schoolRoomtModel.grade);;
        setActive(schoolRoomtModel.active);
        setId(schoolRoomtModel.id);
        props.setSelectedSchoolRoom({});
    }


    const addEvent = (e) => {
        e.preventDefault();
        const addSchoolRomm = { "name": name, "grade": grade, "active": active };
        props.addSchoolRoom(addSchoolRomm);
    }

    const updateEvent = (e) => {
        e.preventDefault();
        const updateSchoolRomm = {"id":id, "name": name, "grade": grade, "active": active };
        props.updateSchoolRoom(updateSchoolRomm);
    }

    const deleteEvent = (e) => {
        e.preventDefault();
        const deleteSchoolRomm = { "id":id, "name": name, "grade": grade, "active": active };
        props.deleteSchoolRoom(deleteSchoolRomm);
    }



    return (
        <form>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="schoolRoomName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="schoolRoomName" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="col-6">
                    <label htmlFor="schoolRoomGrade" className="form-label">Grade</label>
                    <input type="text" className="form-control" id="schoolRoomGrade" value={grade} onChange={(e) => setGrade(e.target.value)} />
                </div>
                <div className="col-6 mt-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={active} onChange={(e) => setActive(e.target.value)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                {
                    !props.selectedSchoolRoom.id ?
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
