import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Exam1 from './exams/Exam1';
import Quiz1 from './exams/Quiz1';
import Quiz2 from './exams/Quiz2';
import Quiz3 from './exams/Quiz3';
import Quiz4 from './exams/Quiz4';

import useExam from "../api/useExam"

export default function Exam() {
    let { id } = useParams();
    const [selectedExam, setSelectedExam] = useExam(null);
    const [examName, setExamName] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor = 'white'; // '#231F20';
        setSelectedExam("findById", id)
    }, [])

    useEffect(() => {
        if (selectedExam) {
            setExamName(selectedExam.name);
        }
    }, [selectedExam])



    return (
        <React.Fragment>
            {
                examName === "Exam1" ? <Exam1 /> :
                    examName === "Quiz 1" ? <Quiz1 /> :
                        examName === "Quiz 2" ? <Quiz2 /> :
                            examName === "Quiz 3" ? <Quiz3 /> :
                                examName === "Quiz 4" ? <Quiz4 />
                                    : null
            }
        </React.Fragment>
    )


}
