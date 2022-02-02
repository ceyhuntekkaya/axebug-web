import { useState } from 'react';
const config = require('./config.json');

export default function usePublicationContent() {
    const [result, setResult] = useState(null);






    const handleChange = async (type, params) => {
        if (type === "createStudent") {
            await createStudent(params);
        } else if (type === "updateStudent") {
            await updateStudent(params);
        } else if (type === "deleteStudent") {
            await deleteStudent(params);
        } else if (type === "findAllStudent") {
            await findAllStudent();
        } else if (type === "findByIdStudent") {
            await findByIdStudent(params);
        } else if (type === "findByNameStudent") {
            await findByNameStudent(params);
        } else if (type === "findBySchoolRoomStudent") {
            await findBySchoolRoomStudent(params);
        } else if (type === "findBySchoolStudent") {
            await findBySchoolStudent(params);
        } else if (type === "findByGradeStudent") {
            await findByGradeStudent(params.schoolId, params.grade);
        } else if (type === "loginStudent") {
            await loginStudent(params);
        }
    }
    return [result, handleChange];
}
