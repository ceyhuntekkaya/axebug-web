import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Square from '../app/components/Square'
import useDocument from '../api/useDocument';
import useTask from '../api/useTask';
import { useParams } from 'react-router-dom';
import useExam from '../api/useExam';


export default function TeacherContents() {
  const [documents, setDocuments] = useDocument([]);
  const [exams, setExams] = useExam([]);
  const [tasks, setTasks] = useTask([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [linkType, setLinkType] = useState("");

  let { id } = useParams();

  useEffect(() => {
    setDocuments("findAllDocuments", "")
    setExams("findAllExam", "")
    setTasks("findAllTasks", "")
  }, [])


  useEffect(() => {
    if (id && documents) {
      const activeList = [];

      if (id === "TASKS") {
        if (tasks)
          tasks.forEach(element => {
            activeList.push(element)
          });
        setLinkType("TASKS")
      }
      else if (id === "COMICS") {
        setLinkType("COMICS")
      }
      else if (id === "ACTIVTY") {
        setLinkType("ACTIVTY")
      }
      else if (id === "CONNECTION") {
        setLinkType("CONNECTION")
      }
      else if (id === "EXAMS") {
        setLinkType("EXAMS")
      }
      else if (id === "QUIZS") {
        setLinkType("QUIZS")
      }
      else {
        documents.forEach(element => {
          if (element.type === id) {
            activeList.push(element)
          }
        });
        setLinkType("OUT")
      }

      setSelectedDocuments(activeList)
    }
  }, [id, documents])

  console.log(exams)

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
            <Square col="2" backgroundColor="white" to="/teacher-contents/YEARLY_PLAN" ><b><span className='smallBoxFont'>YEARLY PLAN</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/DAILY_PLAN" ><b><span className='smallBoxFont'>LESSON PLAN</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>ASSESSMENT</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/EXAMS" ><b><span className='smallBoxFont'>EXAMS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/QUIZS"><b><span className='smallBoxFont'>QUIZS</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>CONTENTS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/COMICS" ><b><span className='smallBoxFont'>COMIC BOOKS</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>STUDENT MATERIALS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/ACTIVTY" ><b><span className='smallBoxFont'>ACTIVTY BOOKS</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>CONNECTION</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/CONNECTION" ><b><span className='smallBoxFont'>SIENCE & MATH</span></b> </Square>
          </div>
          <div className='row'>
            <Square col="2" backgroundColor="black" ><b><span className='smallBoxFont'>APPLICATION</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/TASKS" ><b><span className='smallBoxFont'>AXE4SKILLS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/spelling" ><b><span className='smallBoxFont'>SPELLING</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/wordbank" ><b><span className='smallBoxFont'>WORDBANK</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/GAME" ><b><span className='smallBoxFont'>CLASS GAMES</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/PLAY" ><b><span className='smallBoxFont'>PLAYS</span></b> </Square>
            <Square col="2" backgroundColor="white" to="/teacher-contents/SHOW_TIME" ><b><span className='smallBoxFont'>SHOW TIME</span></b> </Square>
          </div>
        </div>
        <div className='col-6 mt-3'>
          <div className='row'>
            {
              linkType === "OUT" ?
                selectedDocuments ?
                  selectedDocuments.map((document, key) =>
                    <div className={`col-3 p-2 m-1 row border border-4 border-success`}>
                      <a target="_blank" href={`../pdf/${document.link}`}>
                        <span className='smallBoxFont'>{document.name}</span>
                      </a>
                    </div>
                  ) : null
                : null
            }
            {
              linkType === "TASKS" ?
                selectedDocuments ?
                  selectedDocuments.map((document, key) =>
                    <Square key={key} col="4" backgroundColor="white" to={`/teacher-tasks/${document.id}`} ><b>{document.name}</b> </Square>
                  ) : null
                : null
            }
            {
              linkType === "EXAMS" ?
                exams ?
                  exams.map((document, key) =>
                    document.examType === "EXAM" ?
                      <Square key={key} col="4" backgroundColor="white" to={`/teacher-exam/${document.id}`} ><b>{document.name}</b> </Square>
                      : null
                  ) : null
                : null

            }
            {
              linkType === "QUIZS" ?
                exams ?
                  exams.map((document, key) =>
                    document.examType === "QUIZ" ?
                      <Square key={key} col="4" backgroundColor="white" to={`/teacher-exam/${document.id}`} ><b>{document.name}</b> </Square>
                      : null
                  ) : null
                : null
            }
            {
              linkType === "COMICS" ?
                <React.Fragment>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/index.html"><img className='w-100' src={`../assets/ch1.png`} /></a></div>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Chapter2/index.html"><img className='w-100' src={`../assets/ch2.png`} /></a></div>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Chapter3/index.html"><img className='w-100' src={`../assets/ch3.png`} /></a></div>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Chapter4/index.html"><img className='w-100' src={`../assets/ch4.png`} /></a></div>
                </React.Fragment>
                : null
            }
            {
              linkType === "ACTIVTY" ?
                <React.Fragment>

                  <div className="col-3 p-2"><a target="_blank" href="HTML/Activite1/index.html"><img className='w-100' src={`../assets/ab1.png`} /></a></div>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Activite2/index.html"><img className='w-100' src={`../assets/ab2.png`} /></a></div>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Activite3/index.html"><img className='w-100' src={`../assets/ab3.png`} /></a></div>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Activite4/index.html"><img className='w-100' src={`../assets/ab4.png`} /></a></div>
                </React.Fragment>
                : null
            }
            {
              linkType === "CONNECTION" ?
                <React.Fragment>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Mathematics/index.html"><img className='w-100' src={`../assets/math.png`} /></a></div>
                  <div className="col-3 p-2"><a target="_blank" href="HTML/Science/index.html"><img className='w-100' src={`../assets/science.png`} /></a></div>
                </React.Fragment>
                : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
