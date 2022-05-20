import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Exam1 from './exams/Exam1';
import Quiz1 from './exams/Quiz1';
import Quiz2 from './exams/Quiz2';
import Quiz3 from './exams/Quiz3';
import Quiz4 from './exams/Quiz4';

import useExam from "../api/useExam"
import FinishExam from './exams/FinishExam';

export default function Exam() {
    let { id } = useParams();
    const [selectedExam, setSelectedExam] = useExam(null);
    const [, saveSelectedExamResult] = useExam(null);
    const [examName, setExamName] = useState(null);
    const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });

    useEffect(() => {
        const studentData = JSON.parse(localStorage.getItem("student"));
        setStudent(studentData);
        document.body.style.backgroundColor = 'white'; // '#231F20';
        setSelectedExam("findById", id)
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (selectedExam) {
            setExamName(selectedExam.name);
        }
        // eslint-disable-next-line 
    }, [selectedExam])


    const sendExam = (answer, examType, isFinish) => {
        const answerList = [];
        answer.result.forEach((skill, skillNo) => {
            skill.forEach((section, sectionNo) => {
                section.forEach((studentAnswer, studentAnswerNo) => {
                    if (studentAnswerNo > 0) {
                        const singleAnswer = {
                            answerData: studentAnswer.student,
                            answerDateTime: 0,
                            score: studentAnswer.score,
                            weight: studentAnswer.weigth,
                            method: studentAnswer.method,
                            functionCode: studentAnswer.function,
                            functionResult: studentAnswer.functionScore,
                            skillName: findSkillName(skillNo, examType),
                            sectionName: findSectionName(sectionNo),
                            questionNo: studentAnswerNo,
                            studentId: student.id,
                            examId: id
                        }
                        answerList.push(singleAnswer)
                    }
                });
            });
        });

        saveSelectedExamResult("saveExamResult", answerList)
        if (isFinish === true)
            setExamName("Finish")

    }

    const findSkillName = (skillNo, examType) => {
        if (examType === "QUIZ") return "GENERAL"

        if (skillNo === 0) return "READING";
        else if (skillNo === 1) return "WRITTING";
        else if (skillNo === 2) return "LISTENING";
        else if (skillNo === 3) return "SPEAKING";
        return ""
    }

    const findSectionName = (sectionNo) => {
        if (sectionNo === 0) return "A";
        else if (sectionNo === 1) return "B";
        else if (sectionNo === 2) return "C";
        else if (sectionNo === 3) return "D";
        else if (sectionNo === 4) return "E";
        return ""
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
