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


    return (
        <div className="card">
            <div className="card-header">
                {selectedContent.name}
            </div>
            <div className="card-body">
                <audio controls className='w-100'>
                    <source src={`assests/${selectedContent.soundUrl}`} type="audio/mpeg" />
                </audio>
                <img src={`assests/${selectedContent.imageEmptyUrl}`} alt="" className="w-50" />
                <div className="alert alert-secondary mt-2" role="alert">
                    {selectedContent.text}
                </div>
                <div className="mb-3">
                    <label htmlFor="txt" className="form-label">Write text...</label>
                    <input type="email" className="form-control" id="txt" placeholder="Write text..." />
                </div>

                <div className="container">
                    <div className="row row-cols-auto">
                        <div className="col"><button className="btn btn-primary">Record Your Voice</button></div>
                        <div className="col"><button className="btn btn-primary">Next Exercise</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
