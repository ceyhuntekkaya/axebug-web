import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useStudentWork() {
    const [result, setResult] = useState(null);
    const RequestMapping = "homework";

    const createStudentWork = async (studentWork) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, studentWork);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const checkStudentWorkTask = async (params) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${params.studentId}/${params.taskId}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const studentActiveTask = async (params) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/active/${params}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "createStudentWork") {
            await createStudentWork(params);
        } else if (type === "checkStudentWorkTask") {
            await checkStudentWorkTask(params);
        } else if (type === "studentActiveTask") {
            await studentActiveTask(params);
        } 
    }
    return [result, handleChange];
}
