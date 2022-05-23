import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import useChapter from '../api/useChapter';
import { Link } from 'react-router-dom';


export default function ChapterList() {
  const [student, setStudent] = useState({ name: "", surname: "", avatar: "" });
  const [chapters, setChapters] = useChapter([]);
  const [chapterWorks, setChapterWorks] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#eeeeee'; // '#231F20';
    const studentData = JSON.parse(localStorage.getItem("student"));
    setStudent(studentData);
    const schoolRoomWorkList = JSON.parse(localStorage.getItem("schoolRoomWorkList"));
    const chapterWork = [];
    schoolRoomWorkList.forEach(element => {
      if (element.episodeTask) {
        const foundedChapter = element.episodeTask.episode.chapter;
        const hasChapter = chapterWork.find(cw => cw.id === foundedChapter.id);
        if (!hasChapter)
          chapterWork.push(element.episodeTask.episode.chapter)
      }
    });
    setChapterWorks(chapterWork)
    setChapters("findAllChapters", null);
    // eslint-disable-next-line 
  }, [])
  const activeTaskShow = (type) => {
    return (
      chapters ?
        chapters.map((chapter, key) =>
          chapterWorks.find(cw => cw.id === chapter.id) ?
            <Square key={key} col="3"
              backgroundColor="black"
              to={`/episode/?id=${chapter.id}`}
            ><h1><b>{chapter.name}</b></h1> </Square>
            :
            <Square key={key} col="3"
              backgroundColor="white"
            ><h1><b>{chapter.name}</b></h1> </Square>
        )
        : null
    )
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-5 mt-4'>
          <div className='row'>
            <div className='col-12'>
              <div className="text-white bg-dark border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b> <Link to="/student" style={{ color: "white", textDecoration: "none" }}> AXEBUG DIGITAL</Link></b></h2></div>
            </div>
            <div className='col-12'>
              <div className="border border-2 border-dark p-2 mt-3 d-flex justify-content-center" style={{ width: "100%" }}><h2><b>{student.name}'s TASK</b></h2></div>
            </div>
          </div>
        </div>
        <div className='col-7 mt-3'>
          <div>
            <div className="border border-2 border-dark p-2 mt-4 d-flex justify-content-center black900" style={{ width: "100%", color: "white", backgroundColor: "black" }}><h2><b>YOUR TASKS</b></h2></div>
          </div>
          <div className='row p-2'>
            {
              activeTaskShow(true)
            }
          </div>
        </div>
      </div>
    </div>
  );
}


