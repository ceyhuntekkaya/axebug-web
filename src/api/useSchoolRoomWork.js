import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useSchoolRoomWork() {
    const [result, setResult] = useState(null);
    const apiUrl="work";


    const createSchoolRoomWork = async (schoolRoomWork) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${apiUrl}/`, schoolRoomWork);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteSchoolRoomWork = async (schoolRoomWorkId) => {
        try {
            const res = await axios.delete(`${config.api.invokeUrl}/${apiUrl}/${schoolRoomWorkId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const getSchoolRoomWorks = async (schoolRoomId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${apiUrl}/${schoolRoomId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

   const handleChange = async (type, params) => {
        if (type === "createSchoolRoomWork") {
            await createSchoolRoomWork(params);
        } else if (type === "deleteSchoolRoomWork") {
            await deleteSchoolRoomWork(params);
        }  else if (type === "getSchoolRoomWorks") {
            await getSchoolRoomWorks(params);
        }
    }
    return [result, handleChange];
}
