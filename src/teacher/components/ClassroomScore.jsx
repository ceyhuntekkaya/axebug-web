import { Button } from 'bootstrap'
import React, { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { Link } from 'react-router-dom'


export default function ClassroomScore(params) {

  const [schoolroomScore, setSchoorooState] = useState(params.schoolRoom)

  useEffect(() => {
    setSchoorooState(params.schoolRoom)
  }, [])

  return (
    <React.Fragment>
      <div className='row mb-2'>
        <div className='col-2'>
          <h2>{params.schoolRoom.name}</h2>
        </div>
        <div className='col-5'>
          <h6>OVERALL : {parseInt(schoolroomScore.skillsScore)}</h6>
          <div className="progress" style={{ height: "30px", padding: 0 }}>
            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated"
              role="progressbar" style={{ width: parseInt(schoolroomScore.skillsScore) + "%" }}
              aria-valuenow={parseInt(schoolroomScore.skillsScore)} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='col-5'>
          <h6>TASK4SKILLS : {parseInt(schoolroomScore.skillsScore)}</h6>
          <div className="progress" style={{ height: "30px", padding: 0 }}>
            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated"
              role="progressbar" style={{ width: parseInt(schoolroomScore.skillsScore) + "%" }}
              aria-valuenow={parseInt(schoolroomScore.skillsScore)} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-2'>
          <div className='d-flex justify-content-center'>
            <h6>Speak</h6>
          </div>
          <CircularProgressbar value={parseInt(schoolroomScore.speakingScore)} text={`${parseInt(schoolroomScore.speakingScore)}%`} />
        </div>
        <div className='col-2'>
          <div className='d-flex justify-content-center'>
            <h6>Read</h6>
          </div>
          <CircularProgressbar value={parseInt(schoolroomScore.readScore)} text={`${parseInt(schoolroomScore.readScore)}%`} />
        </div>
        <div className='col-2'>
          <div className='d-flex justify-content-center'>
            <h6>Write</h6>
          </div>
          <CircularProgressbar value={parseInt(schoolroomScore.writeScore)} text={`${parseInt(schoolroomScore.writeScore)}%`} />
        </div>
        <div className='col-2'>
          <div className='d-flex justify-content-center'>
            <h6>Listen</h6>
          </div>
          <CircularProgressbar value={parseInt(schoolroomScore.listeningScore)} text={`${parseInt(schoolroomScore.listeningScore)}%`} />
        </div>
        <div className='col-4'>
          <div className='row'>
            <Link to={`/teacher-students/${schoolroomScore.schoolRoomId}`} className='mt-5 btn btn-success w-100'>STUDENT LIST</Link>
          </div>

          {/* <div className='row'>
            <div className='col-6'>
              <h6>EXAM : {parseInt(schoolroomScore.examScore)}</h6>
              <div className="progress" style={{ height: "30px", padding: 0 }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar" style={{ width: parseInt(schoolroomScore.examScore) + "%" }}
                  aria-valuenow={parseInt(schoolroomScore.examScore)} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className='col-6'>
              <h6>QUIZ : {parseInt(schoolroomScore.quizScore)}</h6>
              <div className="progress" style={{ height: "30px", padding: 0 }}>
                <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                  role="progressbar" style={{ width: parseInt(schoolroomScore.quizScore) + "%" }}
                  aria-valuenow={parseInt(schoolroomScore.quizScore)} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>  */}
        </div>
      </div>
      <hr />

    </React.Fragment>
  )
}
