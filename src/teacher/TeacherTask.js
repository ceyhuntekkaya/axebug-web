import React, { useState, useEffect } from 'react'
import ContentBase from '../app/components/ContentBasePanel';
import usePanel from '../api/usePanel';
import { useParams } from 'react-router-dom';

export default function TeacherTask() {
    const [panels, setPanels] = usePanel([]);
    const [startContent, setStartContent] = useState(false);
    const [selectedContent, setSelectedContent] = useState({});
    const [activeContentKey, setActiveContentKey] = useState(false);


    let { id } = useParams();


    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        setPanels("findByTask", id);
        // eslint-disable-next-line 
    }, [])


    useEffect(() => {
        if (panels) {
            setSelectedContent(panels[0]);
            onSectionContent(panels[0], 0)
        }
        // eslint-disable-next-line 
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



    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-2 mr-2">
                    <div className="card" style={{ cursor: "pointer" }}>
                        <div className="row">
                            {
                                panels ?
                                    panels.map((panel, key) => (
                                        selectedContent.id === panel.id ?
                                            <img src={`https://app.axebug.com/axebug/assets/${panel.imageFullUrl}`} key={key} className={`col-6 mb-4 border border-danger rounded-circle`} onClick={() => onSectionContent(panel, key)} style={{ cursor: "pointer" }} alt={key} />

                                            :
                                            <img src={`https://app.axebug.com/axebug/assets/${panel.imageFullUrl}`} key={key} className={`col-6 mb-4`} onClick={() => onSectionContent(panel, key)} style={{ cursor: "pointer" }} alt={key} />



                                    )) : null
                            }
                        </div>
                    </div>
                </div>
                <div className="col ml-2">
                    <div className="mb-4">
                        {
                            startContent ? <ContentBase teacher={true} studentWorkTaskList={null} studentWork={null} setEvulations={null} selectedContent={selectedContent} onNextContent={showNextContent} /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
