import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function usePanel() {
    const [result, setResult] = useState(null);
    const RequestMapping = "panel";

    const createPanel = async (panel) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, panel);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updatePanel = async (panel) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${RequestMapping}/`, panel);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deletePanel = async (panelId) => {
        try {
            await axios.delete(`${config.api.invokeUrl}/${RequestMapping}/${panelId}`);
            setResult("SUCCESS");
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllPanels = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByTask = async (taskId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/task/${taskId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const findById = async (panelId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${panelId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }


    const findByNamePanel = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "createPanel") {
            await createPanel(params);
        } else if (type === "updatePanel") {
            await updatePanel(params);
        } else if (type === "findAllPanels") {
            await findAllPanels(params);
        } else if (type === "findByTask") {
            await findByTask(params);
        } else if (type === "findById") {
            await findById(params);
        } else if (type === "findByNamePanel") {
            await findByNamePanel(params);
        } else if (type === "deletePanel") {
            await deletePanel(params);
        }
    }
    return [result, handleChange];
}
