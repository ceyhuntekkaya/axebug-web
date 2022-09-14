import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useDocument() {
    const [result, setResult] = useState(null);
    const RequestMapping = "document";

 
    const findAllDocuments = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }
   
    const handleChange = async (type, params) => {
        if (type === "findAllDocuments") {
            await findAllDocuments();
        } 
      
    }
    return [result, handleChange];
}
