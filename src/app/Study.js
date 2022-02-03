import React, { useState, useEffect } from 'react'
import ContentBase from './components/ContentBase';
import usePanel from '../api/usePanel';
import { useSearchParams } from 'react-router-dom';

export default function Study(props) {
    const [panels, setPanels] = usePanel([]);
    const [startContent, setStartContent] = useState(false);
    const [selectedContent, setSelectedContent] = useState({});
    const [activeContentKey, setActiveContentKey] = useState(false);
    const [searchParams,] = useSearchParams();

    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        var id = searchParams.get("id");
        setPanels("findByTask", id);
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
                            startContent ? <ContentBase selectedContent={selectedContent} onNextContent={showNextContent} /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
