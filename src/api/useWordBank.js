import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useWordBank() {
    const [result, setResult] = useState(null);

    const RequestMapping = "word-bank";

    const createWordBank = async (episode) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, episode);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const updateWordBank = async (episode) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${RequestMapping}/`, episode);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const deleteWordBank = async (episodeId) => {
        try {
            await axios.delete(`${config.api.invokeUrl}/${RequestMapping}/${episodeId}`);
            setResult("SUCCESS");
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findAllWordBanks = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByIdWordBank = async (chapterId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/chapter/${chapterId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const findByNameWordBank = async (name) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/name/${name}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const findByEpisode = async (params) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/episode/${params.episodeId}/${params.category}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "createWordBank") {
            await createWordBank(params);
        } else if (type === "updateWordBank") {
            await updateWordBank(params);
        } else if (type === "deleteWordBank") {
            await deleteWordBank(params);
        } else if (type === "findAllWordBanks") {
            await findAllWordBanks();
        } else if (type === "findByIdWordBank") {
            await findByIdWordBank(params);
        } else if (type === "findByNameWordBank") {
            await findByNameWordBank(params);
        } else if (type === "findByEpisode") {
            await findByEpisode(params);
        }
    }
    return [result, handleChange];
}
