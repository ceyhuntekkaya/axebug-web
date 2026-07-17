import { useState } from 'react';
import axios from './axiosInstance';
const config = require('./config.json');

export default function useSchool() {
    const [result, setResult] = useState(null);

    const findAllSchool = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/school/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "findAllSchool") {
            await findAllSchool();
        }
    }
    return [result, handleChange];
}
