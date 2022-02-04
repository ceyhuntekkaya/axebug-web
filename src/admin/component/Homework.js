import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import { loremIpsum } from "lorem-ipsum";
const SectionList = require("../../model/Section.json")
const EpisodeList = require("../../model/episode.json")

export default function Homework() {

    const [episodes, setEpisodes] = useState([]);
    const [schoolRooms, setSchoolRooms] = useState([]);
    const [students, setStudents] = useState([]);
    const [selectedSchoolRoom, setSelectedSchoolRoom] = useState({});

    useEffect(() => {

        const axeBug = [];
        EpisodeList.episodes.forEach(episode => {
            const sections = SectionList.sections.filter(s => s.episodeId === episode.id);
            let ep = {
                episodeId: episode.id,
                episodeName: episode.name,
                sectionCount: sections.length,
                sections: sections
            };
            axeBug.push(ep);
        })
        setEpisodes(axeBug);

        const schoolRoomListEffect = [];
        const studentListEffect = [];
        for (var i = 0; i < 10; i++) {
            const schoolRomm = { "id": (i + 1), "name": ("Class " + i), "grade": 3, "active": true };
            schoolRoomListEffect.push(schoolRomm)

            for (var j = 0; j < 24; j++) {
                const student = {
                    "id": (i * 100) + j,
                    "name": loremIpsum({ count: 1, units: "word" }),
                    "surname": loremIpsum({ count: 1, units: "word" }),
                    "schoolRoomId": 1
                }
                studentListEffect.push(student);
            }
        }
        setSchoolRooms(schoolRoomListEffect);
        setStudents(studentListEffect);


    }, [])

    const SchoolRoomSelect = () => {
        return (
            <select className="form-select" aria-label="Default select example" value={selectedSchoolRoom} onChange={(e) => setSelectedSchoolRoom(e.target.value)}>
                <option selected>Open this select menu</option>
                {
                    schoolRooms.map(room => (
                        <option value={room.id}>{room.name}</option>
                    ))
                }
            </select>
        )
    }

    return (
        <div className="container">
            <Menu />
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            Student
                        </div>
                        <div className="card-body">
                            <SchoolRoomSelect />
                            <hr />
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th rowSpan={2} scope="col">Student</th>
                                        {
                                            episodes.map(episode => (
                                                <th colSpan={episode.sectionCount} scope="col">{episode.episodeName}</th>
                                            ))
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            episodes.map(episode => (
                                                episode.sections.map(sec => (
                                                    <th scope="col">{sec.name}</th>
                                                ))
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((std, key) => (
                                            <tr key={key}>
                                                <td>{std.name + " " + std.surname}</td>
                                                {
                                                    episodes.map(episode => (
                                                        episode.sections.map(sec => (
                                                            <td> </td>
                                                        ))
                                                    ))
                                                }
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
