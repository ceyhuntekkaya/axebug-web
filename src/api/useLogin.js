import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');


export default function useLogin() {
    const [result, setResult] = useState(null)
    const RequestMapping = "login";

    const handleChange = async (params) => {
        try {
            const res = await axios.put(`${config.api.invokeUrl}/${RequestMapping}/`, params);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
    return [result, handleChange];
}