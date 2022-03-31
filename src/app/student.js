import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useStudentWork from '../api/useStudentWork'

export default function Student() {
  const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });
  const [studentWorkTaskList, setStudentWorkApi] = useStudentWork([]);

  useEffect(() => {
    document.body.style.backgroundColor = 'white'; // '#231F20';
    const studentData = JSON.parse(localStorage.getItem("student"));
    setStudent(studentData);
    setStudentWorkApi("studentActiveTask", studentData.id)

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
      const find = studentWorkTaskList.studentWorkList.find(sw => sw.episodeTaskPanel.episodeTask.id === task.id);
      if (find)
        return false
    }
    else if (exam) {
      const find = studentWorkTaskList.studentWorkList.find(sw => sw.exam.id === exam.id);
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
        <div className='row'><h2>EXAM SCORE 93 </h2></div>
        <div className='row'><h2>QUIZ SCORE 84 </h2></div>
        <div className='row'><h2>AXE 4 SKILLS SCORE 72</h2></div>
        <div className='row'><h2>AXE 4 SKILLS SCORE 72</h2></div>
        <div className='row'><h2>AXE 4 SKILLS SCORE 72</h2></div>
        <div className='row'><h2>AXE 4 SKILLS SCORE 72</h2></div>
        <div className='row'><h2>AXE 4 SKILLS SCORE 72</h2></div>
        <div className='row'><h1>OVERALL SCORE 83</h1></div>
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
              <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{student.name}'s SECTION</b></h2></div>
              <div className="border border-2 border-dark p-2 mt-2 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>YOUR TASKS</b></h2></div>
            </div>
            <div className='col-5'>
              {
                myAvatar()
              }
            </div>
          </div>
          <div className="row mt-3">
            {
              activeTaskShow(true)
            }
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
              activeTaskShow(false)
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
