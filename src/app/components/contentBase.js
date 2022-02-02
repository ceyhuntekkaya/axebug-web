import React, { useState, useEffect } from 'react'

const contentModel = {
    "id": 1,
    "name": "",
    "imageEmptyUrl": "cizgi1.jpg",
    "imageFullUrl": "cizgi2.png",
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "soundUrl": "voice.mp3",
    "orderNumber": 1,
    "sectionId": 1
}

export default function ContentBase(props) {
    const [selectedContent, setSelectedContent] = useState(contentModel);
    const [level, setLevel] = useState(1);
    useEffect(() => {
        if (props.selectedContent) {
            setSelectedContent(props.selectedContent);
            setLevel(1);
        }
    }, [props.selectedContent])

    const nextExersize = () => {
        if (level < 4)
            setLevel(level + 1);
        else {
            props.onNextContent();
        }
    }
    const prevtExersize = () => {
        if (level > 1)
            setLevel(level - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                {selectedContent.name}
            </div>
            <div className="card-body">
                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class={`btn btn-${level === 1 ? "dark" : "secondary"}`} onClick={() => setLevel(1)}>Listen & Speak</button>
                        <button type="button" class={`btn btn-${level === 2 ? "dark" : "secondary"}`} onClick={() => setLevel(2)}>Read & Speak</button>
                        <button type="button" class={`btn btn-${level === 3 ? "dark" : "secondary"}`} onClick={() => setLevel(3)}>Listen & Write</button>
                        <button type="button" class={`btn btn-${level === 4 ? "dark" : "secondary"}`} onClick={() => setLevel(4)}>Read & Write</button>
                    </div>
                </div>
                {
                    level === 1 || level === 3 ?
                        <audio controls className='w-100'>
                            <source src={`assests/${selectedContent.soundUrl}`} type="audio/mpeg" />
                        </audio> : null
                }
                {
                    level === 1 ?
                        <img src={`assests/${selectedContent.imageEmptyUrl}`} alt="" className="w-50" style={{ height: 400 }} /> : null
                }
                {
                    level === 2 || level === 4 ?
                        <img src={`assests/${selectedContent.imageFullUrl}`} alt="" className="w-50" style={{ height: 400 }} /> : null
                }
                {
                    level === 4 ?
                        <div className="alert alert-secondary mt-2" role="alert">
                            {selectedContent.text}
                        </div> : null
                }
                {
                    level === 3 || level === 4 ?
                        <div className="mb-3">
                            <label htmlFor="txt" className="form-label">Write text...</label>
                            <input type="email" className="form-control" id="txt" placeholder="Write text..." />
                        </div> : null
                }
                <div className="row row-cols-auto mt-2">
                    {
                        level === 1 || level === 2 ?
                            <div className="col"><button className="btn btn-primary">Record Your Voice</button></div> : null
                    }
                    {
                        level > 1 ?
                            <div className="col"><button className="btn btn-primary" onClick={prevtExersize}>Prev</button></div>
                            : null
                    }
                    <div className="col"><button className="btn btn-primary" onClick={nextExersize}>{level === 4 ? "Next Content" : "Next"}</button></div>
                </div>
            </div>
        </div>
    )
}
