import React, { useState, useEffect } from 'react'
import SchoolRoomTask from './SchoolRoomTask'
import useSchoolRoom from '../../api/useSchoolRoom'
import Menu from '../component/Menu'

export default function SchoolRoomList() {
    const [schoolRoomList, setSchoolRoomList] = useSchoolRoom([]);
    const [selectedSchoolRoom, setSelectedSchoolRoom] = useState({});
    const [school, setSchool] = useState(null);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem("school"));
        setSchool(res);
        setSchoolRoomList("findAllSchoolRoom", res.id);
      }, [])


    const addSchoolRoom = (schoolroom) => {
        schoolroom.school = { id: school.id };
        console.log(schoolroom)
        setSchoolRoomList("createSchoolRoom", schoolroom);
      }
    
    
      const updateSchoolRoom = (schoolroom) => {
    //updateSchoolRoom
      }
    
      const deleteSchoolRoom = (schoolroom) => {
        setSchoolRoomList("deleteSchoolRoom", schoolroom.id);
      }
    
      const selectSchoolRoomEvent = (schoolroom) => {
        setSelectedSchoolRoom(schoolroom);
      }


    return (
        <div className="container">
            <Menu />
            <div className="row mt-4">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            School Room
                        </div>
                        <div className="card-body">
                            {
                            <SchoolRoomTask addSchoolRoom={addSchoolRoom} selectedSchoolRoom={selectedSchoolRoom} setSelectedSchoolRoom={setSelectedSchoolRoom} updateSchoolRoom={updateSchoolRoom} deleteSchoolRoom={deleteSchoolRoom}/>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            School Room List
                        </div>
                        <div className="card-body">

                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Grade</th>
                                        <th scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        schoolRoomList ?
                                        schoolRoomList.map((room, key) => (
                                            <tr key={key} className={`${selectedSchoolRoom.id=== room.id ? "btn-warning": ""}`}>
                                                <th><button className="btn btn-success" onClick={()=>selectSchoolRoomEvent(room)}>Select</button></th>
                                                <td>{room.name}</td>
                                                <td>{room.grade}</td>
                                                <td>{room.active}</td>
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
