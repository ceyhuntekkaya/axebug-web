import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useExam from "../../api/useExam"


export default function Report() {
    let { id } = useParams();
    const [reportData, setReportData] = useExam(null);

    useEffect(() => {
        const studentData = JSON.parse(localStorage.getItem("student"));
        document.body.style.backgroundColor = 'white'; 
        setReportData({studentId: studentData.id, examId: id})
    }, [])

    useEffect(() => {
        if(reportData){
            console.log(reportData)
        }
    }, [reportData])


  return (
    <div>Report</div>
  )
}
