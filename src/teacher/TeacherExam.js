import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useExam from '../api/useExam'
import Exam1 from '../app/exams/Exam1'
import Exam2 from '../app/exams/Exam2'
import FinishExam from '../app/exams/FinishExam'
import Quiz1 from '../app/exams/Quiz1'
import Quiz2 from '../app/exams/Quiz2'
import Quiz3 from '../app/exams/Quiz3'
import Quiz4 from '../app/exams/Quiz4'

import Quiz5 from '../app/exams/Quiz5'
import Quiz6 from '../app/exams/Quiz6'
import Quiz7 from '../app/exams/Quiz7'
import Quiz8 from '../app/exams/Quiz8'
import Quiz9 from '../app/exams/Quiz9'
import Quiz10 from '../app/exams/Quiz10'
import Quiz11 from '../app/exams/Quiz11'
import Quiz12 from '../app/exams/Quiz12'
import Quiz13 from '../app/exams/Quiz13'
import Quiz14 from '../app/exams/Quiz14'
import Quiz15 from '../app/exams/Quiz15'
import Quiz16 from '../app/exams/Quiz16'


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
                examName === "Exam 2" ? <Exam2 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 1" ? <Quiz1 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 2" ? <Quiz2 sendExam={sendExam} /> : null
            }
            {/* {
                examName === "Quiz 3" ? <Quiz3 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 4" ? <Quiz4 sendExam={sendExam} /> : null
            } */}

            {
                examName === "Quiz 5" ? <Quiz5 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 6" ? <Quiz6 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 7" ? <Quiz7 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 8" ? <Quiz8 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 9" ? <Quiz9 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 10" ? <Quiz10 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 11" ? <Quiz11 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 12" ? <Quiz12 sendExam={sendExam} /> : null
            }
            {/* {
                examName === "Quiz 13" ? <Quiz13 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 14" ? <Quiz14 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 15" ? <Quiz15 sendExam={sendExam} /> : null
            }
            {
                examName === "Quiz 16" ? <Quiz16 sendExam={sendExam} /> : null
            } */}




            {
                examName === "Finish" ? <FinishExam /> : null
            }
        </React.Fragment>
    )
}
