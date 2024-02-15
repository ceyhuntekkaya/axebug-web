import React, {useState, useEffect} from 'react'
import Menu from './Menu'
import useSchool from "../../api/useSchool";
import useSchoolRoom from "../../api/useSchoolRoom";
import useReport from "../../api/useReport";

const SectionList = require("../../model/Section.json")
const EpisodeList = require("../../model/episode.json")
const gradeList = require("../../model/grade.json")
const brandList = require("../../model/brand.json")

export default function Homework() {

    const [schoolList, setSchoolList] = useSchool([]);
    const [schoolroomList, setSchoolroomList] = useSchoolRoom([]);

    const [episodes, setEpisodes] = useState([]);
    const [students, setStudents] = useState([]);
    const [report, setReport] = useReport([]);


    const [selectedSchoolRoomId, setSelectedSchoolRoomId] = useState(0);

    const [selectedBrandId, setSelectedBrandId] = useState(0);
    const [selectedSchoolId, setSelectedSchoolId] = useState(0);
    const [selectedGradeId, setSelectedGradeId] = useState(5);
    const [selectedReportType, setSelectedReportType] = useState("schoolroom");

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


    }, [])


    useEffect(() => {

    }, [selectedReportType])

    useEffect(() => {

    }, [selectedBrandId])

    useEffect(() => {
        setSchoolroomList("findAllSchoolRoom", selectedSchoolId)

    }, [selectedSchoolId])

    useEffect(() => {
        console.log("schoolList")
        setSchoolList("findAllSchool", {})
    }, [selectedGradeId])

    useEffect(() => {

    }, [selectedSchoolRoomId])

    const handleCreateReportEvent = (e) => {
        e.preventDefault()
        const id = selectedReportType === "brand" ? selectedBrandId : selectedReportType === "school" ? selectedSchoolId : selectedReportType === "grade" ? selectedBrandId : selectedReportType === "schoolroom" ? selectedSchoolRoomId : ""
        console.log(id)
        setReport("createReport", {
            type: selectedReportType,
            id: id
        })

    }


    const ReportTypeSelect = () => {
        return (
            <select className="form-select" aria-label="Default select example" value={selectedReportType}
                    onChange={(e) => setSelectedReportType(e.target.value)}>
                <option selected>Open this select menu</option>
                <option value="brand">Brand Report</option>
                <option value="school">School Report</option>
                <option value="grade">Grade Report</option>
                <option value="schoolroom">Schoolroom Report</option>

            </select>
        )
    }

    const BrandListSelect = () => {
        return (
            <select className="form-select" aria-label="Default select example" value={selectedBrandId}
                    onChange={(e) => setSelectedBrandId(Number(e.target.value))}>
                <option selected>Select brand</option>
                {
                    brandList.map(brand => (
                        <option value={brand.id}>{brand.name}</option>
                    ))
                }
            </select>
        )
    }
    const SchoolListSelect = () => {
        return (
            <select className="form-select" aria-label="Default select example" value={selectedSchoolId}
                    onChange={(e) => setSelectedSchoolId(e.target.value)}>
                <option selected>Select school</option>
                {
                    schoolList.map(school => (
                        <option value={school.id}>{school.name}</option>
                    ))
                }
            </select>
        )
    }
    const GradeListSelect = () => {
        return (
            <select className="form-select" aria-label="Default select example" value={selectedGradeId}
                    onChange={(e) => setSelectedGradeId(e.target.value)}>
                <option selected>Select grade</option>
                {
                    gradeList.map(grade => (
                        <option value={grade.value}>{grade.name}</option>
                    ))
                }
            </select>
        )
    }
    const SchoolroomListSelect = () => {
        return (
            <select className="form-select" aria-label="Default select example" value={selectedSchoolRoomId}
                    onChange={(e) => setSelectedSchoolRoomId(e.target.value)}>
                <option selected>Select schoolroom</option>
                {
                    schoolroomList.map(room => (
                        <option value={room.id}>{room.name}</option>
                    ))
                }
            </select>
        )
    }


    return (
        <div className="container">
            <Menu/>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            Student
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-2"><ReportTypeSelect/></div>
                                <div className="col-2">
                                    {
                                        brandList && Array.isArray(brandList) && (selectedReportType === "brand" || selectedReportType === "school" || selectedReportType === "grade" || selectedReportType === "schoolroom") ?
                                            <BrandListSelect/> : null
                                    }
                                </div>
                                <div className="col-2">
                                    {
                                        schoolList && Array.isArray(schoolList) && (selectedReportType === "school" || selectedReportType === "grade" || selectedReportType === "schoolroom") ?
                                            <SchoolListSelect/> : null
                                    }
                                </div>
                                <div className="col-2">
                                    {
                                        gradeList && Array.isArray(gradeList) && (selectedReportType === "grade" || selectedReportType === "schoolroom") ?
                                            <GradeListSelect/> : null
                                    }
                                </div>
                                <div className="col-2">
                                    {
                                        schoolroomList && Array.isArray(schoolroomList) && (selectedReportType === "schoolroom") ?
                                            <SchoolroomListSelect/> : null
                                    }
                                </div>
                                <div className="col-2">
                                    <button onClick={handleCreateReportEvent} className="btn btn-success w-100">Show
                                    </button>
                                </div>
                            </div>


                            <hr/>
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
                                    report && Array.isArray(report) ?
                                        report.map((std, key) => (
                                            <tr key={key}>
                                                <td>{std.name + " " + std.lastname}</td>
                                                <td>{Math.floor(std.listening)}</td>
                                                <td>{Math.floor(std.speaking)}</td>
                                                <td>{Math.floor(std.writing)}</td>
                                                <td>{Math.floor(std.reading)}</td>
                                                <td> </td>
                                                <td> </td>
                                                <td>{Math.floor(std.total)}</td>

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
