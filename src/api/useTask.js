import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useTask() {
    const [result, setResult] = useState(null);
    const RequestMapping = "task";

    const createTask = async (task) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, task);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateTask = async (task) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${RequestMapping}/`, task);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`${config.api.invokeUrl}/${RequestMapping}/${taskId}`);
            setResult("SUCCESS");
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllTasks = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByEpisode = async (episodeId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/episode/${episodeId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const findById = async (taskId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${taskId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }


    const findByNameTask = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "createTask") {
            await createTask(params);
        } else if (type === "updateTask") {
            await updateTask(params);
        } else if (type === "findAllTasks") {
            await findAllTasks();
        } else if (type === "findByEpisode") {
            await findByEpisode(params);
        } else if (type === "findById") {
            await findById(params);
        } else if (type === "findByNameTask") {
            await findByNameTask(params);
        } else if (type === "deleteTask") {
            await deleteTask(params);
        }
    }
    return [result, handleChange];
}
