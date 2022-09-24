import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Square from '../app/components/Square'
import useDocument from '../api/useDocument';
import useTask from '../api/useTask';
import { useParams } from 'react-router-dom';
import useExam from '../api/useExam';

export default function TeacherReports() {
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
             <div className='col-12'>
              <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>There is no any report.</b></h2></div>
            </div> 
          </div>
        </div>
       

      
      </div>
    </div>
  )
}
