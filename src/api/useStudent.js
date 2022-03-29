import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useStudent() {
    const [result, setResult] = useState(null)
    const RequestMapping = "student";

    const createStudent = async (student) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, student);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateStudent = async (student) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${RequestMapping}/`, student);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteStudent = async (studentId) => {
        try {
            const res = await axios.delete(`${config.api.invokeUrl}/${RequestMapping}/${studentId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllStudent = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findById = async (studentId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${studentId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByNameStudent = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findBySchoolRoomStudent = async (schoolRoomId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/schoolroom/${schoolRoomId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findBySchoolStudent = async (schoolId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/school/${schoolId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByGradeStudent = async (schoolId, grade) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/school/${schoolId}/grade/${grade}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const login = async (loginInfo) => {
        try {
            const res = await axios.put(`${config.api.invokeUrl}/${RequestMapping}/login/`, loginInfo);
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
        } else if (type === "findByNameStudent") {
            await findByNameStudent(params);
        } else if (type === "findById") {
            await findById(params);
        } else if (type === "findBySchoolRoomStudent") {
            await findBySchoolRoomStudent(params);
        } else if (type === "findBySchoolStudent") {
            await findBySchoolStudent(params);
        } else if (type === "findByGradeStudent") {
            await findByGradeStudent(params.schoolId, params.grade);
        } else if (type === "login") {
            await login(params);
        }
    }
    return [result, handleChange];
}
