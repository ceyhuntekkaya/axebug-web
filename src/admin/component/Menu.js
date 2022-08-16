import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="row row-cols-auto mt-4">
            <div className="col"> <h3>AXE BUG COMICS</h3></div>
            <div className="col"><Link to="/admin">Dash Board</Link></div>
            <div className="col"><Link to="/admin/teacher">Teachers</Link></div>
            <div className="col"><Link to="/admin/student">Students</Link></div>
            <div className="col"><Link to="/admin/reportlist">Reports</Link></div>
            <div className="col"><Link to="/admin/schoolroom">School Rooms</Link></div>
            <div className="col"><Link to="/admin/episode">Episodes</Link></div>
            <div className="col"><Link to="/admin/assignment">Assignment</Link></div>
            <div className="col"><Link to="/admin/homework">Home Wok Control</Link></div>
            <div className="col"><Link to="/admin/schedule">Yearly Plan</Link></div>
        </div>
    )
}
