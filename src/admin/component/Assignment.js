import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import useSchoolRoom from '../../api/useSchoolRoom'
import useChapter from '../../api/useChapter'
import useSchoolRoomWork from '../../api/useSchoolRoomWork'

export default function Assignment() {
    const [episodeList, setEpisode] = useState([]);
    const [chapterList, setChapter] = useState([]);
    const [episodeTaskList, setEpisodeTask] = useState([]);
    const [examList, setExamList] = useState([]);
    const [quizList, setQuizList] = useState([]);
    const [selectedSchoolRoom, setSelectedSchoolRoom] = useState({ id: 0 });
    const [selectedEpisode, setSelectedEpisode] = useState({});
    const [selectedChapter, setSelectedChapter] = useState({});
    const [schoolRoomList, setSchoolRoomList] = useSchoolRoom([]);
    const [schoolRoomWorkList, setSchoolRoomWorkList] = useSchoolRoomWork([]);
    const [allChapterDetail, setAllChapterDetail] = useChapter(null);
    const [selectedType, setSelectedType] = useState([]);
    const [happyWorks, setHappyWorks] = useState([]);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem("school"));
        setSchoolRoomList("findAllSchoolRoom", res.id);
        setAllChapterDetail("findAllDetail", null);
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (selectedSchoolRoom)
            if (selectedSchoolRoom.id !== 0)
                setSchoolRoomWorkList("getSchoolRoomWorks", selectedSchoolRoom.id)
                // eslint-disable-next-line 
    }, [selectedSchoolRoom])

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
        hasHappyWorks(epi.id)
        setSelectedEpisode(epi)
        setEpisodeTask(allChapterDetail.taskList.filter((task) => task.episode.id === epi.id));
    }

    const assignmentWork = (work) => {
        const param = {
            schoolRoomId: selectedSchoolRoom.id,
            studyStartDate: 0,
            studyFinishDate: 0
        }
        if (selectedType === 1) {
            param.workType = "TASK";
            param.episodeTaskId = work.id;
        }
        else if (selectedType === 2 || selectedType === 3) {
            param.workType = "EXAM";
            param.examId = work.id;
        }
        setSchoolRoomWorkList("createSchoolRoomWork", param)
    }

    const hasTask = (id) => {
        if (schoolRoomWorkList)
            if (schoolRoomWorkList.length > 0) {
                const findTask = schoolRoomWorkList.find(task => task.episodeTask && task.episodeTask.id === id);
                if (findTask) return true;
            }
        return false;
    }
    const hasExam = (id) => {
        if (schoolRoomWorkList)
            if (schoolRoomWorkList.length > 0) {
                const findTask = schoolRoomWorkList.find(task => task.exam && task.exam.id === id);
                if (findTask) return true;
            }
        return false;
    }
    const hasHappyWorks = (id) => {
        if (schoolRoomWorkList)
            if (schoolRoomWorkList.length > 0) {
                if (selectedType === 1) {//Task
                    const filterWorks = schoolRoomWorkList.filter(task => task.episodeTask && task.episodeTask.episode.id === id);
                    setHappyWorks(filterWorks);
                }
                else if (selectedType === 2) {//Quiz

                }
                else if (selectedType === 3) {// Exam

                }
            }
    }
    useEffect(() => {
        if (selectedType === 1) {//Task
            hasHappyWorks(selectedEpisode.id)
        }
        else if (selectedType === 2) {//Quiz
        }
        else if (selectedType === 3) {// Exam
        }
        // eslint-disable-next-line 
    }, [schoolRoomWorkList])

    const assignmentWorkDelete = (work) => {
        setSchoolRoomWorkList("deleteSchoolRoomWork", work.id)
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
                                            onClick={() => setSelectedType(1)}
                                        >Task</li>
                                        <li key="key2"
                                            className={`list-group-item ${selectedType === 2 ? "active" : ""}`}
                                            onClick={() => setSelectedType(2)}
                                        >Quiz</li>
                                        <li key="key3"
                                            className={`list-group-item ${selectedType === 3 ? "active" : ""}`}
                                            onClick={() => setSelectedType(3)}
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
                                                                >{task.name}{
                                                                        hasTask(task.id) === false ?
                                                                            <button className="btn btn-primary" onClick={() => assignmentWork(task)}>ADD</button>
                                                                            : null
                                                                    }
                                                                </li>
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
                                                            >{exam.name}
                                                                {
                                                                    hasExam(exam.id) === false ?
                                                                        <button className="btn btn-primary" onClick={() => assignmentWork(exam)}>ADD</button>
                                                                        : null
                                                                }
                                                            </li>
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
                                                            >{quiz.name}  {
                                                                    hasExam(quiz.id) === false ?
                                                                        <button className="btn btn-primary" onClick={() => assignmentWork(quiz)}>ADD</button>
                                                                        : null
                                                                }
                                                            </li>
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
                                        {
                                            happyWorks ?
                                                happyWorks.map((hp, key) => (
                                                    <li key={key}
                                                        className={`list-group-item`}
                                                    >{hp.episodeTask.name}  {
                                                            hasExam(hp.id) === false ?
                                                                <button className="btn btn-primary" onClick={() => assignmentWorkDelete(hp)}>REMOVE</button>
                                                                : null
                                                        }
                                                    </li>
                                                )) : null
                                        }
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
