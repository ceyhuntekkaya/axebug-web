import { useState } from 'react';
import axios from "axios";
const config = require('./config.json');

export default function useReport() {
    const [result, setResult] = useState(null);

    const createReport = async (type, id) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/work/report/score/${type}/${id}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "createReport") {
            await createReport(params.type, params.id);
        }
    }
    return [result, handleChange];
}
