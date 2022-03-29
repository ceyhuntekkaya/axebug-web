import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useSchoolRoom() {
    const [result, setResult] = useState(null);
    const apiUrl="schoolroom";


    const createSchoolRoom = async (schoolRoom) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${apiUrl}/`, schoolRoom);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateSchoolRoom = async (schoolRoom) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${apiUrl}/`, schoolRoom);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteSchoolRoom = async (schoolRoomId) => {
        try {
            const res = await axios.delete(`${config.api.invokeUrl}/${apiUrl}/${schoolRoomId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllSchoolRoomBySchool = async (schoolId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${apiUrl}/school/${schoolId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByIdSchoolRoom = async (schooId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${apiUrl}/${schooId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }



    const handleChange = async (type, params) => {
        if (type === "createSchoolRoom") {
            await createSchoolRoom(params);
        } else if (type === "updateSchoolRoom") {
            await updateSchoolRoom(params);
        } else if (type === "deleteSchoolRoom") {
            await deleteSchoolRoom(params);
        } else if (type === "findAllSchoolRoom") {
            await findAllSchoolRoomBySchool(params);
        } else if (type === "findByIdSchoolRoom") {
            await findByIdSchoolRoom(params);
        }
    }
    return [result, handleChange];
}
