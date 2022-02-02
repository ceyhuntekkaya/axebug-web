import { useState } from 'react';
const config = require('./config.json');

export default function useStudent() {
    const [result, setResult] = useState(null)

    const createStudent = async (student) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/student/`, student);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateStudent = async (student) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/student/`, student);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteStudent = async (studentId) => {
        try {
            await axios.delete(`${config.api.invokeUrl}/student/${studentId}`);
            setResult("SUCCESS");
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllStudent = async () => {
        try {
            await axios.delete(`${config.api.invokeUrl}/student/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByIdStudent = async (studentId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/student/${studentId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByNameStudent = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/student/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findBySchoolRoomStudent = async (schoolRoomId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/student/schoolroom/${schoolRoomId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findBySchoolStudent = async (schoolId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/student/school/${schoolId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByGradeStudent = async (schoolId, grade) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/student/school/${schoolId}/grade/${grade}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const loginStudent = async (loginInfo) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/student/login/`, loginInfo);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

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
