import { useState } from 'react';
import axios from 'axios'
const config = require('./config.json');

export default function useYearlyPlan() {
    const [result, setResult] = useState(null);
    const RequestMapping = "yearly-plan";

    const createYearlyPlan = async (params) => {
        try {
            const res = await axios.post(`${config.api.invokeUrl}/${RequestMapping}/`, params);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const updateYearlyPlan = async (params) => {
        try {
            const res = await axios.patch(`${config.api.invokeUrl}/${RequestMapping}/`, params);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const deleteYearlyPlan = async (params) => {
        try {
            const res = await axios.delete(`${config.api.invokeUrl}/${RequestMapping}/${params.schoolId}/${params.yearlyPlanId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const findYearlyPlanBySchool = async (schoolId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/${schoolId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const findActivePlanBySchool = async (schoolId) => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/${RequestMapping}/active/${schoolId}`);
            setResult(res.data);
        } catch (err) {
            setResult(`An error has occurred: ${err}`);
        }
    }

    const handleChange = async (type, params) => {
        if (type === "createYearlyPlan") {
            await createYearlyPlan(params);
        } else if (type === "updateYearlyPlan") {
            await updateYearlyPlan(params);
        } else if (type === "deleteYearlyPlan") {
            await deleteYearlyPlan(params);
        } else if (type === "findYearlyPlanBySchool") {
            await findYearlyPlanBySchool(params);
        } else if (type === "findActivePlanBySchool") {
            await findActivePlanBySchool(params);
        }

    }
    return [result, handleChange];
}
