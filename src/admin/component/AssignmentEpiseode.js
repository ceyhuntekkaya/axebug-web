import React from 'react'

export default function AssignmentEpiseode(props) {
    return (
        <ul className="list-group">
        {
            props.episodes.map(episode => (
                <li 
                className={`list-group-item ${props.selectedEpisode.id === episode.id ? "active" :""}`}
                onClick={() => props.setSelectedEpisode(episode)}
                >{episode.name}</li>
            ))
        }
    </ul>
    )
}
