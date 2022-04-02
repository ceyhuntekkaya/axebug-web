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



    const handleChange = async (type, params) => {
        if (type === "findById") {
            await findById(params);
        } 
    }
    return [result, handleChange];
}
