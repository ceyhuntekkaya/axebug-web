import React, { useState, useEffect } from 'react'
import AssignmentEpiseode from './AssignmentEpiseode'
import AssignmentSchoolRooms from './AssignmentSchoolRooms'
import AssignmentSchoolRoomSection from './AssignmentSchoolRoomSection'
import AssignmentSections from './AssignmentSections'
import Menu from './Menu'

const SectionList = require("../../model/Section.json")
const ContentList = require("../../model/content.json")
const EpisodeList = require("../../model/episode.json")


export default function Assignment() {
    const [sections, setSections] = useState([]);
    const [contents, setContents] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [schoolRooms, setSchoolRooms] = useState([]);
    const [schoolRoomAssignments, setSchoolRoomAssignments] = useState([]);
    const [selectedSchoolRoom, setSelectedSchoolRoom] = useState({});
    const [selectedAssignSection, setSelectedAssignSection] = useState({});
    const [selectedEpisode, setSelectedEpisode] = useState({});
    const [selectesSection, setSelectedSection] = useState({});

    useEffect(() => {
        setSections(SectionList.sections)
        setContents(ContentList.contents)
        setEpisodes(EpisodeList.episodes)
        const schoolRoomListEffect = [];
        for (var i = 0; i < 10; i++) {
            const schoolRomm = { "id": (i + 1), "name": ("Class " + i), "grade": 3, "active": true };
            schoolRoomListEffect.push(schoolRomm)
        }
        setSchoolRooms(schoolRoomListEffect);

    }, [])

    const assignmentSectionEvent=(section)=>{
        setSelectedSection(section);
        const assignmentSection = {
            schoolRoomId : selectedSchoolRoom.id,
            episodeId : selectedEpisode.id,
            section : section
        }

        const controlList = schoolRoomAssignments.filter(sra => sra.schoolRoomId === assignmentSection.schoolRoomId && sra.section.id === assignmentSection.section.id);

        console.log(controlList)
        if(controlList.length===0){
            const assList = JSON.parse(JSON.stringify(schoolRoomAssignments));
            assignmentSection.id = schoolRoomAssignments.length+1;
            assList.push(assignmentSection);
            setSchoolRoomAssignments(assList);
        }
    }
    const deleteAssignmentedSectionEvent=(id)=>{
        let assList = [];
        schoolRoomAssignments.forEach((data, i) => {
            if(data.id !== id){
                assList.push(data)
            }
        })
        setSchoolRoomAssignments(assList);
    }

    return (
        <div className="container">
            <Menu />
            <div className="row mt-4">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            School Rooms
                        </div>
                        <div className="card-body">
                            <AssignmentSchoolRooms schoolRooms={schoolRooms} selectedSchoolRoom={selectedSchoolRoom} setSelectedSchoolRoom={setSelectedSchoolRoom} />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            Assignments
                        </div>
                        <div className="card-body">
                            <AssignmentSchoolRoomSection schoolRoomAssignments={schoolRoomAssignments} selectedAssignSection={selectedAssignSection} selectedSchoolRoom={selectedSchoolRoom} deleteAssignmentedSectionEvent={deleteAssignmentedSectionEvent} />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            Episodes
                        </div>
                        <div className="card-body">
                            <AssignmentEpiseode episodes={episodes} selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode} />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            Sections
                        </div>
                        <div className="card-body">
                            <AssignmentSections 
                            sections={sections} 
                            selectesSection={selectesSection}  
                            selectedEpisode={selectedEpisode} 
                            setSelectedSection={setSelectedSection} 
                            assignmentSectionEvent={assignmentSectionEvent}
                            selectedSchoolRoom={selectedSchoolRoom}
                            schoolRoomAssignments={schoolRoomAssignments} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
