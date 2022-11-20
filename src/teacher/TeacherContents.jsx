import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Square from '../app/components/Square'
import useDocument from '../api/useDocument';
import useTask from '../api/useTask';
import { useParams } from 'react-router-dom';
import useExam from '../api/useExam';
import Axios from 'axios';

var fileDownload = require('js-file-download');

export default function TeacherContents() {
  const [documents, setDocuments] = useDocument([]);
  const [exams, setExams] = useExam([]);
  const [open, setOpen] = useState(true);
  const [tasks, setTasks] = useTask([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [linkType, setLinkType] = useState("");

  let { id } = useParams();

  useEffect(() => {
    setDocuments("findAllDocuments", "")
    setExams("findAllExam", "")
    setTasks("findAllTasks", "")
  }, [])

  const download = (url, filename) => {
    Axios.get(url, {
      responseType: 'blob',
    }).then(res => {
      fileDownload(res.data, filename);
    });
  }

  useEffect(() => {
    if (id && documents) {
      setOpen(false)
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


        documents.sort(function(a, b){
          return a.id - b.id;
      });
        documents.forEach(element => {
          if (element.type === id) {
            activeList.push(element)
          }
        });
        setLinkType("OUT")
      }
      setSelectedDocuments(activeList)
    }
    else {
      setOpen(true)
    }
  }, [id, documents])


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-4'>
          <div className='row'>
            <div className='col-12'>
              <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
            </div>
            {/* <div className='col-12'>
              <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>Teacher's Contents</b></h2></div>
            </div> */}
          </div>
        </div>
        {
          open
        }

        {
          open === true ?
            <div className='col-12 mt-3'>
              <div className='row'>
                <Square col="2" backgroundColor="black" ><b><span >PLANNING</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/YEARLY_PLAN" ><b><span >YEARLY PLAN</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/DAILY_PLAN" ><b><span >LESSON PLAN</span></b> </Square>
              </div>
              <div className='row'>
                <Square col="2" backgroundColor="black" ><b><span >ASSESSMENT</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/EXAMS" ><b><span >EXAMS</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/QUIZS"><b><span >QUIZS</span></b> </Square>
              </div>
              <div className='row'>
                <Square col="2" backgroundColor="black" ><b><span >CONTENTS</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/COMICS" ><b><span >COMIC BOOKS</span></b> </Square>
              </div>
              <div className='row'>
                <Square col="2" backgroundColor="black" ><b><span >STUDENT MATERIALS</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/ACTIVTY" ><b><span >ACTIVTY BOOKS</span></b> </Square>
              </div>
              <div className='row'>
                <Square col="2" backgroundColor="black" ><b><span >CONNECTION</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/CONNECTION" ><b><span >SCIENCE & MATH</span></b> </Square>
              </div>
              <div className='row'>
                <Square col="2" backgroundColor="black" ><b><span >APPLICATION</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/TASKS" ><b><span >AXE4SKILLS</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-spelling-list" ><b><span >SPELLING</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-wordbank-list" ><b><span >WORDBANK</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/GAME" ><b><span >CLASS GAMES</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/PLAY" ><b><span >PLAYS</span></b> </Square>
                <Square col="2" backgroundColor="white" to="/teacher-contents/SHOW_TIME" ><b><span >SHOW TIME</span></b> </Square>
              </div>
            </div>
            :

            <div className='col-12 mt-3'>


              <div className='row'>
                <Square backgroundColor="black" to="/teacher-contents" style={{cursor:"pointer"}}><b><span style={{cursor:"pointer"}}>BACK</span></b> </Square>
              </div>
              <div className='row'>

                {
                  linkType === "OUT" ?
                    selectedDocuments ?
                      selectedDocuments.map((document, key) =>
                        <Square key={key} col="1" backgroundColor="white" >
                          <b>
                            <span>
                              <a className='btn btn-success' target="_blank" href={`http://madeinbrain.net/pdf/${document.link}`}>
                                <span >{document.name}</span>
                              </a>
                            </span>
                          </b>
                        </Square>

                      ) : null
                    : null
                }
                {
                  linkType === "TASKS" ?
                    selectedDocuments ?
                      selectedDocuments.map((document, key) =>
                        <Square key={key} col="2" backgroundColor="white" to={`/teacher-tasks/${document.id}`} ><b>{document.name}</b> </Square>
                      ) : null
                    : null
                }
                {
                  linkType === "EXAMS" ?
                    exams ?
                      exams.map((document, key) =>
                        document.examType === "EXAM" ?
                          <Square key={key} col="2" backgroundColor="white" to={`/teacher-exam/${document.id}`} ><b>{document.name}</b> </Square>
                          : null
                      ) : null
                    : null

                }
                {
                  linkType === "QUIZS" ?
                    exams ?
                      exams.map((document, key) =>
                        document.examType === "QUIZ" ?
                          <Square key={key} col="2" backgroundColor="white" to={`/teacher-exam/${document.id}`} ><b>{document.name}</b> </Square>
                          : null
                      ) : null
                    : null
                }
                {
                  linkType === "COMICS" ?
                    <React.Fragment>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Chapter1/index.html"><img className='w-100' src={`../assets/ch1.png`} /></a></div>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Chapter2/index.html"><img className='w-100' src={`../assets/ch2.png`} /></a></div>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Chapter3/index.html"><img className='w-100' src={`../assets/ch3.png`} /></a></div>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Chapter4/index.html"><img className='w-100' src={`../assets/ch4.png`} /></a></div>
                    </React.Fragment>
                    : null
                }
                {
                  linkType === "ACTIVTY" ?
                    <React.Fragment>

                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Activite1/index.html"><img className='w-100' src={`../assets/ab1.png`} /></a>
                              <a className='mt-2 border border-success p-2 d-flex justify-content-center' target="_blank" href={`http://madeinbrain.net/pdf/Activite_1_Book_key.pdf`}>
                                <span>DOWNLOAD KEY</span>
                              </a>
                      </div>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Activite2v3/index.html"><img className='w-100' src={`../assets/ab2.png`} /></a>
                        <a target="_blank" href="../pdf/Activite_2_Book_key.pdf">
                          <div className='mt-2 border border-success p-2 d-flex justify-content-center'><b>DOWNLOAD KEY</b></div></a></div>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Activite3/index.html"><img className='w-100' src={`../assets/ab3.png`} /></a>
                        <a target="_blank" href="../pdf/Activite_3_Book_key.pdf">
                          <div className='mt-2 border border-success p-2 d-flex justify-content-center'><b>DOWNLOAD KEY</b></div></a></div>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Activite4/index.html"><img className='w-100' src={`../assets/ab4.png`} /></a>
                        <a target="_blank" href="../pdf/Activite_4_Book_key.pdf">
                          <div className='mt-2 border border-success p-2 d-flex justify-content-center'><b>DOWNLOAD KEY</b></div></a></div>
                    </React.Fragment>
                    : null
                }
                {
                  linkType === "CONNECTION" ?
                    <React.Fragment>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Mathematics/index.html"><img className='w-100' src={`../assets/math.png`} /></a></div>
                      <div className="col-3 p-2"><a target="_blank" href="../HTML/Science/index.html"><img className='w-100' src={`../assets/science.png`} /></a></div>
                    </React.Fragment>
                    : null
                }
              </div>
            </div>
        }
      </div>
    </div>
  )
}
