import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useEpisode() {
    const [result, setResult] = useState(null);
    const RequestMapping = "episode";

    const createEpisode = async (episode) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, episode);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateEpisode = async (episode) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${RequestMapping}/`, episode);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteEpisode = async (episodeId) => {
        try {
            await axios.delete(`${config.api.invokeUrl}/${RequestMapping}/${episodeId}`);
            setResult("SUCCESS");
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllEpisodes = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByChapter = async (chapterId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/chapter/${chapterId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const findById = async (episodeId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${episodeId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }


    const findByNameEpisode = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "createEpisode") {
            await createEpisode(params);
        } else if (type === "updateEpisode") {
            await updateEpisode(params);
        } else if (type === "findAllEpisodes") {
            await findAllEpisodes();
        } else if (type === "findByChapter") {
            await findByChapter(params);
        } else if (type === "findById") {
            await findById(params);
        } else if (type === "findByNameEpisode") {
            await findByNameEpisode(params);
        } else if (type === "deleteEpisode") {
            await deleteEpisode(params);
        }
    }
    return [result, handleChange];
}
