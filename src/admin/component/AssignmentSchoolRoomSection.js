import React from 'react'

export default function AssignmentSchoolRoomSection(props) {
    return (
        <ul className="list-group">
        {
            props.schoolRoomAssignments.filter(s=> s.schoolRoomId === props.selectedSchoolRoom.id).map(section => (
                <li className={`list-group-item`}
                >{section.section.name} <button className="btn btn-primary" onClick={()=>props.deleteAssignmentedSectionEvent(section.id)}>REMOVE</button>  </li>
            ))
        }
    </ul>
    )
}
