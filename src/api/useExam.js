import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useExam() {
    const [result, setResult] = useState(null);


    const findById = async (examId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/exam/${examId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const saveExamResult = async (params) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/exam-result/`, params);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }


    const createReport = async (params) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/report/${params.studentId}/${params.examId}`);
            console.log('ceyhun')
            console.log(res.data)
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const reportList = async (params) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/report/examList/${params}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }


    const findAllExam = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/exam/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }



    const handleChange = async (type, params) => {
        if (type === "findById") {
            await findById(params);
        } else if (type === "saveExamResult") {
            await saveExamResult(params);
        } else if (type === "createReport") {
            await createReport(params);
        } else if (type === "reportList") {
            await reportList(params);
        } else if (type === "findAllExam") {
            await findAllExam();
        }
    }
    return [result, handleChange];
}
