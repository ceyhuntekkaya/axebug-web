import React, { useState, useEffect } from 'react'
import ContentBase from './components/ContentBase';

const ContentList = require("../model/content.json")

export default function Study(props) {

    const [contents, setContents] = useState([]);
    const [startContent, setStartContent] = useState(false);
    const [selectedContent, setSelectedContent] = useState({});
    const [activeContentKey, setActiveContentKey] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = 'white'; // '#231F20';
    }, [])

    useEffect(() => {
        setContents(ContentList.contents)
        setSelectedContent(contents[0]);
        onSectionContent(contents[0], 0)

    }, [])

    const onSectionContent = (content, key) => {
        setSelectedContent(content);
        setStartContent(true);
        setActiveContentKey(key)
    }

    const showNextContent = () => {
        if (activeContentKey < contents.length - 1) {
            onSectionContent(contents[activeContentKey + 1], activeContentKey + 1);
        }
    }

    return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-2 mr-2">
                        <div className="card" style={{ cursor: "pointer" }}>
                            <div className="row">
                                {
                                    contents.map((content, key) => (
                                        <img src={`assets/${content.imageFullUrl}`} key={key} className={`col-6`} onClick={() => onSectionContent(content, key)} style={{ cursor: "pointer" }} />
                                    ))
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
