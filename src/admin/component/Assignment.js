import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import useSchoolRoom from '../../api/useSchoolRoom'
import useChapter from '../../api/useChapter'

export default function Assignment() {
    const [episodeList, setEpisode] = useState([]);
    const [chapterList, setChapter] = useState([]);
    const [episodeTaskList, setEpisodeTask] = useState([]);
    const [examList, setExamList] = useState([]);
    const [quizList, setQuizList] = useState([]);
    const [selectedSchoolRoom, setSelectedSchoolRoom] = useState({id:0});
    const [selectedEpisode, setSelectedEpisode] = useState({});
    const [selectedChapter, setSelectedChapter] = useState({});
    const [selectedTask, setSelectedTask] = useState({});
    const [selectedExam, setSelectedExam] = useState({});
    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [schoolRoomList, setSchoolRoomList] = useSchoolRoom([]);
    const [allChapterDetail, setAllChapterDetail] = useChapter(null);
    const [selectedType, setSelectedType] = useState([]);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem("school"));
        setSchoolRoomList("findAllSchoolRoom", res.id);
        setAllChapterDetail("findAllDetail", null);
    }, [])
    useEffect(() => {
        if (allChapterDetail) {
            setChapter(allChapterDetail.chapterList)
            setQuizList(allChapterDetail.examList.filter((exam) => exam.examType === "QUIZ"))
            setExamList(allChapterDetail.examList.filter((exam) => exam.examType === "EXAM"))
        }
    }, [allChapterDetail])

    const getEpisodes = (chapter) => {
        setSelectedChapter(chapter)
        setEpisode(allChapterDetail.episodeList.filter((episode) => episode.chapter.id === chapter.id));
    }
    const getTasks = (epi) => {
        setSelectedEpisode(epi)
        setEpisodeTask(allChapterDetail.taskList.filter((task) => task.episode.id === epi.id));
    }

    const typeHandler = (id) => {
        setSelectedType(id)
        if (id === 1) {

        }
        else if (id === 2) {

        }
        else if (id === 3) {

        }
    }

    const assignmentSection =(assObject)=>{

    }

    return (
        <div className="container">
            <Menu />
            <div className="row mt-4">
                <div className="col-2">
                    <div className="card">
                        <div className="card-header">
                            School Rooms
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                {
                                    schoolRoomList ?
                                        schoolRoomList.map((room, key) => (
                                            <li key={key}
                                                className={`list-group-item ${selectedSchoolRoom.id === room.id ? "active" : ""}`}
                                                onClick={() => setSelectedSchoolRoom(room)}
                                            >{room.name}</li>
                                        )) : null
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    selectedSchoolRoom.id !== 0 ?
                        <React.Fragment>
                            <div className="col-2">
                                <div className="card">
                                    <div className="card-header">
                                        Assignment Type
                                    </div>
                                    <div className="card-body">
                                        <li key="key1"
                                            className={`list-group-item ${selectedType === 1 ? "active" : ""}`}
                                            onClick={() => typeHandler(1)}
                                        >Task</li>
                                        <li key="key2"
                                            className={`list-group-item ${selectedType === 2 ? "active" : ""}`}
                                            onClick={() => typeHandler(2)}
                                        >Quiz</li>
                                        <li key="key3"
                                            className={`list-group-item ${selectedType === 3 ? "active" : ""}`}
                                            onClick={() => typeHandler(3)}
                                        >Exam</li>
                                    </div>
                                </div>
                            </div>
                            {
                                selectedType === 1 ?
                                    <React.Fragment>
                                        <div className="col-2">
                                            <div className="card">
                                                <div className="card-header">
                                                    Chapters
                                                </div>
                                                <div className="card-body">
                                                    {
                                                        chapterList ?
                                                            chapterList.map((chapter, key) => (
                                                                <li key={key}
                                                                    className={`list-group-item ${selectedChapter.id === chapter.id ? "active" : ""}`}
                                                                    onClick={() => getEpisodes(chapter)}
                                                                >{chapter.name}</li>
                                                            )) : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="card">
                                                <div className="card-header">
                                                    Episodes
                                                </div>
                                                <div className="card-body">
                                                    {
                                                        episodeList ?
                                                            episodeList.map((epi, key) => (
                                                                <li key={key}
                                                                    className={`list-group-item ${selectedEpisode.id === epi.id ? "active" : ""}`}
                                                                    onClick={() => getTasks(epi)}
                                                                >{epi.name}</li>
                                                            )) : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="card">
                                                <div className="card-header">
                                                    Tasks
                                                </div>
                                                <div className="card-body">
                                                    {
                                                        episodeTaskList ?
                                                            episodeTaskList.map((task, key) => (
                                                                <li key={key}
                                                                    className={`list-group-item`}
                                                                    onClick={() => setSelectedTask(task)}
                                                                >{task.name}
                                                                <button className="btn btn-primary" onClick={() => assignmentSection(task)}>ADD</button> </li>
                                                            )) : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    : null
                            }
                            {
                                selectedType === 3 ?
                                    <div className="col-2">
                                        <div className="card">
                                            <div className="card-header">
                                                Exam List
                                            </div>
                                            <div className="card-body">
                                                {
                                                    examList ?
                                                        examList.map((exam, key) => (
                                                            <li key={key}
                                                                className={`list-group-item`}
                                                                onClick={() => setSelectedExam(exam)}
                                                            >{exam.name}<button className="btn btn-primary" onClick={() => assignmentSection(exam)}>ADD</button></li>
                                                        )) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            }
                            {
                                selectedType === 2 ?
                                    <div className="col-2">
                                        <div className="card">
                                            <div className="card-header">
                                                Quiz List
                                            </div>
                                            <div className="card-body">
                                                {
                                                    quizList ?
                                                        quizList.map((quiz, key) => (
                                                            <li key={key}
                                                                className={`list-group-item`}
                                                                onClick={() => setSelectedQuiz(quiz)}
                                                            >{quiz.name}<button className="btn btn-primary" onClick={() => assignmentSection(quiz)}>ADD</button></li>
                                                        )) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            }
                            <div className="col-2">
                                <div className="card">
                                    <div className="card-header">
                                        Happy Works
                                    </div>
                                    <div className="card-body">
                                        atanmışla mı
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                        : null
                }
            </div>
        </div>
    )
}
