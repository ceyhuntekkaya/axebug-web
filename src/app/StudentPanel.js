import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useStudentWork from '../api/useStudentWork'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const scoreModel = {
  examScore: 0,
  quizScore: 0,
  skillsScore: 0,
  readScore: 0,
  writeScore: 0,
  speakingScore: 0,
  listeningScore: 0,
}

export default function StudentPanel() {
  const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });
  const [studentWorkTaskList, setStudentWorkApi] = useStudentWork([]);
  const [studentScore, setStudentScore] = useStudentWork(scoreModel);

  console.log(studentScore)

  useEffect(() => {
    document.body.style.backgroundColor = '#eeeeee'; // '#231F20';
    const studentData = JSON.parse(localStorage.getItem("student"));
    setStudent(studentData);
    setStudentWorkApi("studentActiveTask", studentData.id)
    setStudentScore("studentScore", studentData.id)
  }, [])

  useEffect(() => {
    if (studentWorkTaskList) {
      const activeTaskList = studentWorkTaskList.schoolRoomWorkList;
      localStorage.setItem("schoolRoomWorkList", JSON.stringify(activeTaskList))
    }
  }, [studentWorkTaskList])

  const checkComplated = (task, exam) => {
    if (task) {
      const find = studentWorkTaskList.studentWorkList.find(
        sw => sw.episodeTaskPanel ? sw.episodeTaskPanel.episodeTask.id === task.id : null);
      if (find)
        return false
    }
    else if (exam) {
      const find = studentWorkTaskList.studentWorkList.find(
        sw => sw.exam ? sw.exam.id === exam.id : null);
      if (find)
        return false
    }
    return true
  }

  const myAvatar = () => {
    return (
      <div className='d-flex justify-content-end mt-4'><img src={`assets/${student.avatar}`} style={{ height: "140px", backgroundColor: "black" }} alt='Avatar' /></div>)
  }
  const contentMenu = () => {
    return (<React.Fragment>
      <div className="row mt-2" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
        <Square col="3" backgroundColor="black"><b>MISSIONS</b> </Square>
        <Square col="3" backgroundColor="pink" to="/exam"><b>EXAM</b></Square>
        <Square col="3" backgroundColor="lightblue" to="/quiz"><b>QUIZ</b></Square>
        <Square col="3" backgroundColor="lightgreen" to="/chapter"><b>AXE4SKILS</b></Square>
      </div>
      <div className="row" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
        <Square col="3" backgroundColor="black"><b>MATERIALS</b></Square>
        <Square col="3" backgroundColor="orange" to="/wordbank"><b>WORDBANK</b></Square>
        <Square col="3" backgroundColor="yellow" to="/speling"><b>SPELLING</b></Square>
      </div>
      <div className="row" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
        <Square col="3" backgroundColor="black"><b>SCORBOARD</b></Square>
        <Square col="3" backgroundColor="lightgray" to="/report"><b>REPORT</b></Square>
      </div>

    </React.Fragment>)
  }
  const scoreBoard = () => {
    return (
      <div className="border border-2 border-dark p-2 mt-3" style={{ backgroundColor: "black", color: "white" }}>
        <div className='d-flex justify-content-center mt-3' style={{ fontWeight: "bold" }}><h1>SCORE BOARD</h1></div>
        <hr />
        {
          studentScore ?
            <React.Fragment>
              <div className='row  m-3'>
                <div className='col-6'>
                  <h2>EXAM SCORE : {parseInt(studentScore.examScore)}</h2>
                  <div className="progress" style={{ height: "30px" }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar" style={{ width: parseInt(studentScore.examScore) + "%" }}
                      aria-valuenow={parseInt(studentScore.examScore)} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-6'>
                  <h2>QUIZ SCORE : {parseInt(studentScore.quizScore)}</h2>
                  <div className="progress" style={{ height: "30px" }}>
                    <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                      role="progressbar" style={{ width: parseInt(studentScore.quizScore) + "%" }}
                      aria-valuenow={parseInt(studentScore.quizScore)} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <hr />

              <div className='row m-3'>
                <h2>AXE 4 SKILLS SCORE : {parseInt(studentScore.skillsScore)}</h2>
                <div className="progress" style={{ height: "30px" }}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated"
                    role="progressbar" style={{ width: parseInt(studentScore.skillsScore) + "%" }}
                    aria-valuenow={parseInt(studentScore.skillsScore)} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className='row m-4'>

                <div className='col-3'>
                  <div className='d-flex justify-content-center'>
                    <h4>SPEAKING</h4>
                  </div>
                  <CircularProgressbar value={parseInt(studentScore.speakingScore)} text={`${parseInt(studentScore.speakingScore)}%`} />
                </div>
                <div className='col-3'>
                  <div className='d-flex justify-content-center'>
                    <h4>READING</h4>
                  </div>
                  <CircularProgressbar value={parseInt(studentScore.readScore)} text={`${parseInt(studentScore.readScore)}%`} />
                </div>
                <div className='col-3'>
                  <div className='d-flex justify-content-center'>
                    <h4>WRITTING</h4>
                  </div>
                  <CircularProgressbar value={parseInt(studentScore.writeScore)} text={`${parseInt(studentScore.writeScore)}%`} />
                </div>
                <div className='col-3'>
                  <div className='d-flex justify-content-center'>
                    <h4>LISTENING</h4>
                  </div>
                  <CircularProgressbar value={parseInt(studentScore.listeningScore)} text={`${parseInt(studentScore.listeningScore)}%`} />
                </div>
              </div>

              <hr />

              <div className='row  m-3 mb-5'>
                <h2>OVERALL SCORE : {parseInt(studentScore.skillsScore)}</h2>
                <div className="progress" style={{ height: "30px" }}>
                  <div className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                    role="progressbar" style={{ width: parseInt(studentScore.skillsScore) + "%" }}
                    aria-valuenow={parseInt(studentScore.skillsScore)} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </React.Fragment>
            : null
        }
      </div>
    )//examType
  }
  const activeTaskShow = (type) => {
    return (<React.Fragment>
      <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
        {
          studentWorkTaskList ?
            studentWorkTaskList.schoolRoomWorkList.map((task, key) =>
              type || checkComplated(task.episodeTask, task.exam) === true ?
                task.episodeTask ?
                  <Square key={key} fontSize={30} col="3" backgroundColor="white" to={`/study/?id=${task.episodeTask.id}`}><b>{task.episodeTask.name}</b></Square>
                  :
                  task.exam.examType === "EXAM" ?
                    <Square key={key} fontSize={30} col="3" backgroundColor="white" to={`/app/exam/${task.exam.id}`}><b>{task.exam.name}</b></Square>
                    :
                    <Square key={key} fontSize={30} col="3" backgroundColor="white" to={`/app/quiz/${task.exam.id}`}><b>{task.exam.name}</b></Square>
                : null
            )
            : null
        }
      </div>
    </React.Fragment>)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <div className="text-white bg-dark border border-2 border-dark p-2 mt-4 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>AXEBUG DIGITAL</b></h2></div>
              <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{student.name}'s TASK</b></h2></div>
            </div>
            <div className='col-auto'>
              {
                myAvatar()
              }
            </div>
          </div>
          {
            scoreBoard()

          }
        </div>
        <div className='col'>
          <div>
            <div className="border border-2 border-dark p-2 mt-4 d-flex justify-content-center black900" style={{ width: "100%", color: "white", backgroundColor: "black" }}><h2><b>YOUR TASKS</b></h2></div>
          </div><div className='row'>
            {
              activeTaskShow(true)
            }
          </div>
          {
            contentMenu()
          }
        </div>
      </div>
    </div>
  );
}
