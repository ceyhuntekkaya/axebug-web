import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useExam from '../api/useExam'
import Exam1 from '../app/exams/Exam1'
import FinishExam from '../app/exams/FinishExam'
import Quiz1 from '../app/exams/Quiz1'
import Quiz2 from '../app/exams/Quiz2'
import Quiz3 from '../app/exams/Quiz3'
import Quiz4 from '../app/exams/Quiz4'

export default function TeacherExam() {
    const [examName, setExamName] = useState(null);
    const [selectedExam, setSelectedExam] = useExam(null);
    let { id } = useParams();

    useEffect(() => {
        document.body.style.backgroundColor = 'white'; // '#231F20';
        setSelectedExam("findById", id)
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (selectedExam) {
            setExamName(selectedExam.name);
            localStorage.setItem('quiz', selectedExam.name)
        }
        // eslint-disable-next-line 
    }, [selectedExam])

    const sendExam = (answer, examType, isFinish) => {

    }

    return (
        <React.Fragment>
            {
                examName === "Exam 1" ? <Exam1 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 1" ? <Quiz1 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 2" ? <Quiz2 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 3" ? <Quiz3 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 4" ? <Quiz4 sendExam={sendExam} /> : null
            }
            {
                examName === "Finish" ? <FinishExam /> : null
            }
        </React.Fragment>
    )
}
