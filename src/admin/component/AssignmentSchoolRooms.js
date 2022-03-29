import React from 'react'

export default function AssignmentSchoolRooms(props) {
    //<li className="list-group-item active">An active item</li>
    // setSelectedSchoolRoom
    return (
        <ul className="list-group">
            {
                props.schoolRoomList ?
                props.schoolRoomList.map(room => (
                    <li 
                    className={`list-group-item ${props.selectedSchoolRoom.id === room.id ? "active" :""}`}
                    onClick={() => props.setSelectedSchoolRoom(room)}
                    >{room.name}</li>
                )) : null
            }
        </ul>
    )
}
