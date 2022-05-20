import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useWordScore() {
    const [result, setResult] = useState(null);
    const RequestMapping = "word-score";

    const createWordScore = async (score) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, score);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const getWordScore = async (score) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/get/`, score);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    const wordScoreReport = async (userId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${userId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
  

    const handleChange = async (type, params) => {
        if (type === "createWordScore") {
            await createWordScore(params);
        } else if (type === "getWordScore") {
            await getWordScore(params);
        } else if (type === "wordScoreReport") {
            await wordScoreReport(params);
        } 
    }
    return [result, handleChange];
}
