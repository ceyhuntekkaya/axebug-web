import React, { useState, useEffect } from 'react'
import ContentBase from './components/ContentBasePanel';
import usePanel from '../api/usePanel';
import { useSearchParams } from 'react-router-dom';
import useStudentWork from '../api/useStudentWork'

const studentWorkTemplate = {
    read: "",
    write: "",
    speaking: "",
    listening: "",

    readEvaluation: 0,
    writeEvaluation: 0,
    speakingEvaluation: 0,
    listeningEvaluation: 0,

    student: { id: 0 },
    episodeTaskPanel: { id: 0 },
}

export default function Study(props) {
    const [panels, setPanels] = usePanel([]);
    const [startContent, setStartContent] = useState(false);
    const [selectedContent, setSelectedContent] = useState({});
    const [activeContentKey, setActiveContentKey] = useState(false);
    const [searchParams,] = useSearchParams();
    const [studentWork, setStudentWork] = useState(studentWorkTemplate);
    const [studentWorkTaskList, setStudentWorkApi] = useStudentWork(null);
    const [studentId, setStudentId] = useState(0);

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        var id = searchParams.get("id");
        setPanels("findByTask", id);
        const student = JSON.parse(localStorage.getItem("student"));
        setStudentId(student.id )
        setStudentWorkApi("checkStudentWorkTask", { studentId: student.id, taskId: id });
        setStudentWork({ ...studentWork, student: { id: studentId } })
    }, [])

    useEffect(() => {
        if (panels) {
            setSelectedContent(panels[0]);
            onSectionContent(panels[0], 0)
        }
    }, [panels])

    const onSectionContent = (content, key) => {
        setSelectedContent(content);
        setStartContent(true);
        setActiveContentKey(key)
    }

    const showNextContent = () => {
        if (activeContentKey < panels.length - 1) {
            onSectionContent(panels[activeContentKey + 1], activeContentKey + 1);
        }
    }

    const setEvulations = (type, value, evulation) => {
        let values = { ...studentWork };
        if (type === 1) {
            values.read = value
            values.readEvaluation = evulation
        }
        else if (type === 2) {
            values.write = value
            values.writeEvaluation = evulation
        }
        else if (type === 3) {
            values.speaking = value
            values.speakingEvaluation = evulation
        }
        else if (type === 4) {
            values.listening = value
            values.listeningEvaluation = evulation
        }
        values.student.id = studentId;
        setStudentWork(values)
        setStudentWorkApi("createStudentWork", values);
    }

    useEffect(() => {
        if (selectedContent) {
            setStudentWork({ ...studentWork, episodeTaskPanel: { id: selectedContent.id } });
            if (studentWorkTaskList) {
                const selectedPanelStudentWork = studentWorkTaskList.find(sw => sw.episodeTaskPanel.id === selectedContent.id);
                if (selectedPanelStudentWork) {
                    setStudentWork(selectedPanelStudentWork);
                }
            }
        }
    }, [selectedContent])

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-2 mr-2">
                    <div className="card" style={{ cursor: "pointer" }}>
                        <div className="row">
                            {
                                panels ?
                                    panels.map((panel, key) => (
                                        <img src={`../assets/${panel.imageFullUrl}`} key={key} className={`col-6 pb-4`} onClick={() => onSectionContent(panel, key)} style={{ cursor: "pointer" }} />
                                    )) : null
                            }
                        </div>
                    </div>
                </div>
                <div className="col ml-2">
                    <div className="mb-4">
                        {
                            startContent ? <ContentBase studentWork={studentWork} setEvulations={setEvulations} selectedContent={selectedContent} onNextContent={showNextContent} /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
