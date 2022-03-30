import React, { useState, useEffect } from 'react'
import ContentBase from './components/ContentBase';
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

    student: {id:0},
    episodeTaskPanel: {id:0},
}

export default function Study(props) {
    const [panels, setPanels] = usePanel([]);
    const [startContent, setStartContent] = useState(false);
    const [selectedContent, setSelectedContent] = useState({});
    const [activeContentKey, setActiveContentKey] = useState(false);
    const [searchParams,] = useSearchParams();

    const [studentWork, setStudentWork] = useState(studentWorkTemplate);

    const [studentWorkTaskList, setStudentWorkApi] = useStudentWork(false);

    useEffect(() => {

        document.body.style.backgroundColor = 'white';
        var id = searchParams.get("id");
        setPanels("findByTask", id);

        const student = JSON.parse(localStorage.getItem("student"));
        setStudentWork({...studentWork, student:{id:student.id}})

        setStudentWorkApi("checkStudentWorkTask", {studentId: student.id, taskId: id});
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

    const setEvulations=(type, value, evulation)=>{
        if(type==="1"){
            setStudentWork({...studentWork, read:value, readEvaluation:evulation});
        }
        else if(type==="2"){
            setStudentWork({...studentWork, write:value, writeEvaluation:evulation});
        }
        else if(type==="3"){
            setStudentWork({...studentWork, speaking:value, speakingEvaluation:evulation});
        }
        else if(type==="4"){
            setStudentWork({...studentWork, listening:value, listeningEvaluation:evulation});
        }
        setStudentWorkApi("createStudentWork", studentWork);
    }


    useEffect(() => {
        if (selectedContent) {
            setStudentWork({...studentWork, episodeTaskPanel:{id:selectedContent.id}});
            
            if(studentWorkTaskList){
                const selectedPanelStudentWork = studentWorkTaskList.find(sw=> sw.episodeTaskPanel.id === selectedContent.id);
                if(selectedPanelStudentWork){
                    setStudentWork(selectedPanelStudentWork);
                }
            }
           
            // TODO:  eski avulatipnları yükle

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
                                        <img src={`../assets/${panel.imageEmptyUrl}`} key={key} className={`col-6`} onClick={() => onSectionContent(panel, key)} style={{ cursor: "pointer" }} />
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
