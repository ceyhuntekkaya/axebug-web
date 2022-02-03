import React, { useEffect, useState } from 'react';
import OpticalForm from './components/OpticalForm';
import MultiSelection from './questionTypes/MultiSelection';


export default function Exam() {
    const [questions, setQestions] = useState([]);
    const [selectedQuestions, setSelectedQestions] = useState({ number: 0, type: "" });


    useEffect(() => {
        const questionList = [];
        for (var i = 0; i < 20; i++) {
            const question = { number: (i + 1), type: "multi" }
            questionList.push(question)
        }
        setQestions(questionList);

    }, [])


    const nextQuestions = () => {

    }

    const prevQuestions = () => {

    }

    return <React.Fragment>
        <div className="container">
            <div className="row pt-4">
                <h3>AXE BUG COMICS</h3>
            </div>

            <div className="row mt-4">
                <div className="col-auto mr-2" style={{ width: 270 }}>
                    <div className="card" style={{ cursor: "pointer" }}>
                        <div className="card-body">
                            <h5 className="card-title" >Questions</h5>
                        </div>
                        <ul className="list-group list-group-flush pl-2">
                            {
                                questions.map((question, key) => (
                                    // <li key={key} className={`list-group-item ${question.id === question.id ? "btn btn-success" : ""}`} style={{ cursor: "pointer" }}>{question.number}</li>
                                    <OpticalForm question={question} setSelectedQestions={setSelectedQestions} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col ml-2">
                    <div className="mb-4">
                        <div className="card">
                            <div className="card-header">
                                isim alanı
                            </div>
                            <div className='row m-2'>
                                <div className='col-4 boxWhite mr-5'><h3><b>EXAM NO</b></h3></div>
                                <div className='col-8 boxDark ml-5'><h4>EPISODE NAME</h4></div>
                            </div>
                            <div className="card-body">
                                <div className="">
                                    {
                                        selectedQuestions.type === "multi" ?
                                            <MultiSelection selectedQuestions={selectedQuestions} />
                                            : null
                                    }

                                </div>
                                <div className="row row-cols-auto mt-2">
                                    <div className="col"><button className="btn btn-dark" onClick={prevQuestions}>Prev Question</button></div>

                                    <div className="col"><button className="btn btn-dark" onClick={nextQuestions}>Next Question</button></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;
}
