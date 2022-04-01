import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useStudentWork from '../api/useStudentWork'

const scoreModel = {
  examScore: 0,
  quizScore: 0,
  skillsScore: 0,
  readScore: 0,
  writeScore: 0,
  speakingScore: 0,
  listeningScore: 0,
}

export default function Student() {
  const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });
  const [studentWorkTaskList, setStudentWorkApi] = useStudentWork([]);
  const [studentScore, setStudentScore] = useStudentWork(scoreModel);

  useEffect(() => {
    document.body.style.backgroundColor = 'white'; // '#231F20';
    const studentData = JSON.parse(localStorage.getItem("student"));
    setStudent(studentData);
    setStudentWorkApi("studentActiveTask", studentData.id)
    setStudentScore("studentScore", studentData.id)
  }, [])

  useEffect(() => {
    if (studentWorkTaskList) {
      const activeTaskList = studentWorkTaskList.schoolRoomWorkList;
      const studentWorkList = studentWorkTaskList.studentWorkList;
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
      <div className='mt-4'><img src={`assets/${student.avatar}`} style={{ width: "100%", backgroundColor: "black" }} alt='Avatar' /></div>)
  }
  const contentMenu = () => {
    return (<React.Fragment>
      <div className="row mt-5">
        <Square col="3" backgroundColor="black"><b>MISSIONS</b> </Square>
        <Square col="3" backgroundColor="white" to="/exam"><b>EXAM</b></Square>
        <Square col="3" backgroundColor="white" to="/quiz"><b>QUIZ</b></Square>
        <Square col="3" backgroundColor="white" to="/chapter"><b>AXE4SKILS</b></Square>
      </div>
      <div className="row">
        <Square col="3" backgroundColor="black"><b>MATERIALS</b></Square>
        <Square col="3" backgroundColor="white" to="/wordbank"><b>WORDBANK</b></Square>
        <Square col="3" backgroundColor="white" to="/speling"><b>SPELLING</b></Square>
      </div>
      <div className="row">
        <Square col="3" backgroundColor="black"><b>SCORBOARD</b></Square>
        <Square col="3" backgroundColor="white" to="/report"><b>REPORT</b></Square>
      </div>

    </React.Fragment>)
  }
  const scoreBoard = () => {
    return (
      <div className="border border-2 border-dark p-2 mt-2" style={{ backgroundColor: "black", color: "white" }}>
        <div className='row'><h1>SCORE BOARD</h1></div>

        {
          studentScore ?
            <React.Fragment>
              <div className='row  mt-3'>
                <div>EXAM SCORE</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.examScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.examScore)}</h2></div>
              </div>

              <div className='row  mt-3'>
                <div>QUIZ SCORE</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.quizScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.quizScore)}</h2></div>
              </div>

              <div className='row  mt-3'>
                <div>AXE 4 SKILLS SCORE</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.skillsScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.skillsScore)}</h2></div>
              </div>

              <div className='row  mt-3'>
                <div>SPEAKING</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.speakingScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.speakingScore)}</h2></div>
              </div>

              <div className='row  mt-3'>
                <div>READING</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.readScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.readScore)}</h2></div>
              </div>

              <div className='row  mt-3'>
                <div>WRITTING</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.writeScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.writeScore)}</h2></div>
              </div>

              <div className='row  mt-3'>
                <div>LISTENING</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.listeningScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.listeningScore)}</h2></div>
              </div>

              <div className='row  mt-3'>
                <div>OVERALL SCORE</div>
                <progress className='col' style={{ height: "30px", width: "100%", border: "2px black" }} value={parseInt(studentScore.skillsScore)} max="100"> 78% </progress>
                <div className='col-auto' style={{ height: 30 }}><h2>% {parseInt(studentScore.skillsScore)}</h2></div>
              </div>
            </React.Fragment>
            : null
        }
      </div>
    )
  }

  const activeTaskShow = (type) => {
    return (<React.Fragment>
      {
        studentWorkTaskList ?
          studentWorkTaskList.schoolRoomWorkList.map((task, key) =>
            type || checkComplated(task.episodeTask, task.exam) === true ?
              task.episodeTask ?
                <Square key={key} col="3" backgroundColor="white" to={`/study/?id=${task.episodeTask.id}`}><b>{task.episodeTask.name}</b></Square>
                :
                <Square key={key} col="3" backgroundColor="white" to={`/app/exam/?id=${task.exam.id}`}><b>{task.exam.name}</b></Square>
              : null
          )
          : null
      }
    </React.Fragment>)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='col-7'>
              <div className="text-white bg-dark border border-2 border-dark p-2 mt-4 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>AXEBUG DIGITAL</b></h2></div>
              <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{student.name}'s TASK</b></h2></div>
            </div>
            <div className='col-5'>
              {
                myAvatar()
              }
            </div>
          </div>
          {
            contentMenu()
          }
        </div>
        <div className='col'>
          <div>
            <div className="text-white bg-dark border border-2 border-dark p-2 mt-4 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>UNCOMPLATED TASK</b></h2></div>
          </div><div className='row'>
            {
              activeTaskShow(true)
            }
          </div>
          {
            scoreBoard()
          }
        </div>
      </div>
    </div>
  );
}
