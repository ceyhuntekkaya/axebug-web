import React from 'react'

export default function AssignmentSections(props) {
    return (
        <ul className="list-group">
            {
                props.sections.filter(s => s.episodeId === props.selectedEpisode.id).map(section => (

                    props.schoolRoomAssignments.filter(sra => sra.schoolRoomId === props.selectedSchoolRoom.id && sra.section.id === section.id).length === 0 ?
                        <li className={`list-group-item`}
                        >{section.name} <button className="btn btn-primary" onClick={() => props.assignmentSectionEvent(section)}>ADD</button>  </li>
                        : null
                ))
            }
        </ul>
    )
}
