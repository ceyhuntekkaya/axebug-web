import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useSchoolRoomWork from '../api/useSchoolRoomWork'

export default function Student() {
  const[student, setStudent] = useState({name:"", surname: "", avatar:""});
  const [schoolRoomWorkList, setSchoolRoomWorkList] = useSchoolRoomWork(null);

  useEffect(() => {
    document.body.style.backgroundColor = 'white'; // '#231F20';
    const studentData = JSON.parse(localStorage.getItem("student"));
    setStudent(studentData);
    setSchoolRoomWorkList("getSchoolRoomWorks", studentData.schoolRoom.id)
  }, [])


  useEffect(() => {
    if(schoolRoomWorkList){
      localStorage.setItem("schoolRoomWorkList", JSON.stringify(schoolRoomWorkList))
    }
  }, [schoolRoomWorkList])

  const unCompletedQuiz = () => { return (<React.Fragment><Square col="3" backgroundColor="white" to="/exam"><b>QUIZ 01</b></Square></React.Fragment>) }
  const unCompletedExam = () => { return (<React.Fragment><Square col="3" backgroundColor="white" to="/app/exam"><b>EXAM 01</b></Square></React.Fragment>) }
  const unCompletedTask = () => { return (<React.Fragment><Square col="3" backgroundColor="white" to="/exam"><b>TASK 01</b></Square></React.Fragment>) }
  const myTasks = () => {
    return (<div className="row mt-3">
      <Square col="3" backgroundColor="white" to="/exam"><b>EXAM 01</b></Square>
      <Square col="3" backgroundColor="white" to="/quiz"><b>QUIZ 01</b></Square>
      <Square col="3" backgroundColor="white" to="/quiz"><b>TASK 01</b></Square>
    </div>)
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
            {
              myTasks()
            }
            {
              contentMenu()
            }
          </div>
          <div className='col'>
            <div>
              <div className="text-white bg-dark border border-2 border-dark p-2 mt-4 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>UNCOMPLATED TASK</b></h2></div>
            </div><div className='row'>
              {
                unCompletedExam()
              }
              {
                unCompletedQuiz()
              }
              {
                unCompletedTask()
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
