import React, { useState, useEffect } from 'react'
import ContentBase from './components/contentBase';

const SectionList = require("../model/Section.json")
const ContentList = require("../model/content.json")


export default function Studty(props) {

    const [sections, setSections] = useState([]);
    const [contents, setContents] = useState([]);
    const [selectedSection, setSelectedSection] = useState({name:"Select One"});
    const [startContent, setStartContent] = useState(false);
    const [pageMode, setPageMode] = useState("section");
    const [selectedContent, setSelectedContent] = useState({});

    useEffect(() => {
        setSections(SectionList.sections)
        setContents(ContentList.contents)

    }, [])

    const onSectionSubmit = (section) => {
        setSelectedSection(section);
        setSelectedContent(contents[0]);
        setStartContent(true);
        setPageMode("content")
    }

    const onSectionContent = (content) => {
        setSelectedContent(content);
        setStartContent(true);
    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="row pt-4">
                    <h3>AXE BUG COMICS</h3>
                </div>
                <div className="row mt-4">
                    <div className="col-2 mr-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{selectedSection ? selectedSection.name : "Select Section"}</h5>
                            </div>
                            {
                                pageMode === "section" ?
                                    <ul className="list-group list-group-flush">
                                        {
                                            sections.map((section, key) => (
                                                <li key={key} className={`list-group-item ${section.id===selectedSection.id ? "btn btn-success" : ""}`} onClick={() => onSectionSubmit(section)}>{section.name}</li>
                                            ))
                                        }
                                    </ul>
                                    :
                                    <ul className="list-group list-group-flush">
                                        {
                                            contents.map((content, key) => (
                                                <li key={key} className={`list-group-item ${content.id===selectedContent.id ? "btn btn-success" : ""}`} onClick={() => onSectionContent(content)}>{content.name}</li>
                                            ))
                                        }
                                    </ul>
                            }

                        </div>
                    </div>
                    <div className="col ml-2">
                        <div className="mb-4">
                            {
                                startContent ? <ContentBase selectedContent={selectedContent} /> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
