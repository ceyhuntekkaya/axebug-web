import React, {useEffect, useState} from 'react';
import useTeacher from "../../api/useTeacher";
import useSchoolRoom from "../../api/useSchoolRoom";

export default function TeacherSchoolRoom(props) {
    const [teacherSchoolRoomList, setTeacherSchoolRoomList] = useTeacher([]);
    const [teacher, setTeacher] = useState(props.selectedTeacher);
    const [selectedSchoolRoomId, setSelectedSchoolRoomId] = useState(null);
    const [schoolRoomList, setSchoolRoomList] = useSchoolRoom([]);


    useEffect(() => {
        if(props.selectedTeacher && props.selectedTeacher.school){
            setTeacher(props.selectedTeacher);
            setTeacherSchoolRoomList("schoolRoomList", props.selectedTeacher.id);
            setSchoolRoomList("findAllSchoolRoom", teacher.school.id);
        }

        // eslint-disable-next-line
    }, [props])

    const addTeacher = () => {
        setTeacherSchoolRoomList("schoolRoomAdd", {teacherId: teacher.id, schoolroomId: selectedSchoolRoomId});
    }
    const deleteTeacher = (schoolroom) => {
        setTeacherSchoolRoomList("schoolRoomRemove", {teacherId: teacher.id, schoolroomId: schoolroom.id});
    }

    const handleSchoolroomChange = (schoolRoomId) => {
        setSelectedSchoolRoomId(schoolRoomId)
    }


    return <div>
        <h2>Teacher's Schoolrooms</h2>
        <div>
            <select className="form-select" id="schoolRoomGrade" value={selectedSchoolRoomId}
                    onChange={(e) => handleSchoolroomChange(e.target.value)}>
                <option value="0">Select School Room</option>
                {
                    schoolRoomList && Array.isArray(schoolRoomList) ?
                        schoolRoomList.map((schoolroom, key) => (
                            <option key={key} value={`${schoolroom.id}`}>{schoolroom.name}</option>
                        )) : null
                }
            </select>
            <button className="btn btn-success" onClick={() => addTeacher()}>Add Schoolroom</button>
        </div>


        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Grade</th>
            </tr>
            </thead>
            <tbody>

            {
                teacherSchoolRoomList && Array.isArray(teacherSchoolRoomList) ?
                    teacherSchoolRoomList.map((room, key) => (
                        <tr key={key} className={`${selectedSchoolRoomId === room.id ? "btn-warning" : ""}`}>
                            <th>
                                <button className="btn btn-success" onClick={() => deleteTeacher(room)}>Delete</button>
                            </th>
                            <td>{room.name}</td>
                            <td>{room.grade}</td>
                        </tr>
                    )) : null
            }
            </tbody>
        </table>


    </div>;
}
