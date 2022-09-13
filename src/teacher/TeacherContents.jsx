import React from 'react'
import { Link } from 'react-router-dom'
import Square from '../app/components/Square'

export default function TeacherContents() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-4'>
          <div className='row'>
            <div className='col-12'>
              <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
            </div>
            <div className='col-12'>
              <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>Teacher's Contents</b></h2></div>
            </div>
          </div>
        </div>
        <div className='col-6 mt-3'>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>PLANNING</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/yearly-plans" ><b><span className='smallBoxFont'>YEARLY PLAN</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/lesson-plans" ><b><span className='smallBoxFont'>LESSON PLAN</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>ASSESSMENT</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/exams" ><b><span className='smallBoxFont'>EXAMS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/quizs" ><b><span className='smallBoxFont'>QUIZS</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>CONTENTS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/comics" ><b><span className='smallBoxFont'>COMIC BOOKS</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>STUDENT MATERIALS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/activities" ><b><span className='smallBoxFont'>ACTIVTY BOOKS</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>CONNECTION</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/connections" ><b><span className='smallBoxFont'>SIENCE & MATH</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>APPLICATION</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/4skills" ><b><span className='smallBoxFont'>AXE4SKILLS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/spelling" ><b><span className='smallBoxFont'>SPELLING</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/wordbank" ><b><span className='smallBoxFont'>WORDBANK</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/games" ><b><span className='smallBoxFont'>CLASS GAMES</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/plays" ><b><span className='smallBoxFont'>PLAYS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher/teach/show-time" ><b><span className='smallBoxFont'>SHOW TIME</span></b> </Square>
          </div>
        </div>
        <div className='col-6 mt-3'>
          Hİ
        </div>
      </div>
    </div>
  )
}
