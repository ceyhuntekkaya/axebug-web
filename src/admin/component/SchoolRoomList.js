import React, { useState } from 'react'
import SchoolRoomTask from './SchoolRoomTask'
import Menu from './Menu'

export default function SchoolRoomList() {
    const [schoolRoomList, setSchoolRoomList] = useState([]);
    const [selectedSchoolRoom, setSelectedSchoolRoom] = useState({});

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

    const addSchoolRoom = (room) => {
        const roomList = JSON.parse(JSON.stringify(schoolRoomList, getCircularReplacer()));
        room.id = schoolRoomList.length+1;
        roomList.push(room);
        setSchoolRoomList(roomList);
    }

    const updateSchoolRoom = (room) => {
        let roomList = [];
        schoolRoomList.forEach((data, i) => {
            if(data.id=== room.id){
                roomList.push(room)
            }
            else{
                roomList.push(data)
            }
        })
        setSchoolRoomList(roomList);
    }

    const deleteSchoolRoom = (room) => {
        let roomList = [];
        schoolRoomList.forEach((data, i) => {
            if(data.id !== room.id){
                roomList.push(data)
            }
        })
        setSchoolRoomList(roomList);
    }

    const selectSchoolRoomEvent = (student) => {
        setSelectedSchoolRoom(student)
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
                                        <th scope="col">Class Name</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        schoolRoomList.map((room, key) => (
                                            <tr key={key} className={`${selectedSchoolRoom.id=== room.id ? "btn-warning": ""}`}>
                                                <th><button className="btn btn-success" onClick={()=>selectSchoolRoomEvent(room)}>Select</button></th>
                                                <td>{room.name}</td>
                                                <td>{room.grade}</td>
                                                <td>{room.active}</td>
                                                <td>{room.id}</td>
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
