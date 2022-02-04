import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useChapter() {
    const [result, setResult] = useState(null);
    const RequestMapping = "chapter";

    const createChapter = async (chapter) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, chapter);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateChapter = async (chapter) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${RequestMapping}/`, chapter);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteChapter = async (chapterId) => {
        try {
            await axios.delete(`${config.api.invokeUrl}/${RequestMapping}/${chapterId}`);
            setResult("SUCCESS");
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllChapters = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByIdChapter = async (chapterId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${chapterId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByNameChapter = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllChaptersWithEpisodes = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/episode/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const handleChange = async (type, params) => {
        if (type === "createChapter") {
            await createChapter(params);
        } else if (type === "updateChapter") {
            await updateChapter(params);
        } else if (type === "deleteChapter") {
            await deleteChapter(params);
        } else if (type === "findAllChapters") {
            await findAllChapters();
        } else if (type === "findByIdChapter") {
            await findByIdChapter(params);
        } else if (type === "findByNameChapter") {
            await findByNameChapter(params);
        } else if (type === "findAllChaptersWithEpisodes") {
        await findAllChaptersWithEpisodes();
    } 
    }
    return [result, handleChange];
}
