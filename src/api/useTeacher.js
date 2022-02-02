import { useState } from 'react';
const config = require('./config.json');

export default function useTeacher() {
    const [result, setResult] = useState(null);

    const createteacher = async (teacher) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/teacher/`, teacher);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateteacher = async (teacher) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/teacher/`, teacher);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteteacher = async (teacherId) => {
        try {
            await axios.delete(`${config.api.invokeUrl}/teacher/${teacherId}`);
            setResult("SUCCESS");
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllteacher = async () => {
        try {
            await axios.delete(`${config.api.invokeUrl}/teacher/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByIdteacher = async (teacherId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/teacher/${teacherId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByNameteacher = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/teacher/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findBySchoolRoomteacher = async (schoolRoomId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/teacher/schoolroom/${schoolRoomId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findBySchoolteacher = async (schoolId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/teacher/school/${schoolId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByGradeteacher = async (schoolId, grade) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/teacher/school/${schoolId}/grade/${grade}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const loginteacher = async (loginInfo) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/teacher/login/`, loginInfo);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }





    const handleChange = async (type, params) => {
        if (type === "createteacher") {
            await createteacher(params);
        } else if (type === "updateteacher") {
            await updateteacher(params);
        } else if (type === "deleteteacher") {
            await deleteteacher(params);
        } else if (type === "findAllteacher") {
            await findAllteacher();
        } else if (type === "findByIdteacher") {
            await findByIdteacher(params);
        } else if (type === "findByNameteacher") {
            await findByNameteacher(params);
        } else if (type === "findBySchoolRoomteacher") {
            await findBySchoolRoomteacher(params);
        } else if (type === "findBySchoolteacher") {
            await findBySchoolteacher(params);
        } else if (type === "findByGradeteacher") {
            await findByGradeteacher(params.schoolId, params.grade);
        } else if (type === "loginteacher") {
            await loginteacher(params);
        }
    }
    return [result, handleChange];
}
