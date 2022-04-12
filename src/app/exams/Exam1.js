import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Exam1Answer.json');

export default function Exam1(props) {
    const [answer, setAnswer] = useState({ ...answerEmpty })
    const [pageNo, setPageNo] = useState(0)
    const [maxPage, ] = useState(8)

    const nextPage = () => {
        if (pageNo < maxPage - 1) setPageNo(pageNo + 1)
    }
    const prevPage = () => {
        if (pageNo > 0) setPageNo(pageNo - 1)
    }

    const setStudentOpenAnswer = (skils, section, queationNumber, value, compare) => {
        const temp = { ...answer };
        temp.result[skils][section][queationNumber].student = value;
        let finalScore = temp.result[skils][section][queationNumber].weigth;
        // if (compare) {
            var similarity = stringSimilarity.compareTwoStrings(clearText(value), clearText(temp.result[skils][section][queationNumber].answer));
            finalScore = similarity * parseFloat(temp.result[skils][section][queationNumber].weigth)
            temp.result[skils][section][queationNumber].score = finalScore;
        // }
        // else {
        //     if(value=== temp.result[skils][section][queationNumber].answer){
        //         temp.result[skils][section][queationNumber].score = finalScore;
        //     }
        //     else{
        //         temp.result[skils][section][queationNumber].score = 0;
        //     }
        // }
        if (finalScore > (temp.result[skils][section][queationNumber].weigth / 10 * 6)) {
            temp.result[skils][section][queationNumber].functionScore = true;
        }
        else {
            temp.result[skils][section][queationNumber].functionScore = false;
        }
        setAnswer(temp)
    }

    const getSpeechText = (text, questionNumber) => {
        setStudentOpenAnswer(3, 0, questionNumber, text, true)
    }

    const clearText = (text) => {
        let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
        newText = newText.toLowerCase();
        return newText;
    }

    return (
        <div className='container'>
            <div className="card mt-5 mb-5">

                <div className="card-header">
                    <div className="d-flex justify-content-center">
                        <h5 className="card-title mt-3"><h1><strong>AXE EXAM CHAPTER 1</strong></h1></h5>

                    </div>
                </div>
                <div className="card-body p-5 pt-3">
                    {
                        answer ?
                            <React.Fragment>
                                <div style={{ fontSize: "18pt" }}>
                                    {
                                        pageNo === 0 ?
                                            <React.Fragment>
                                                <div className="alert alert-success mt-3" role="alert">
                                                    READING
                                                </div>
                                                <div className="alert alert-dark" role="alert">
                                                    <strong>A. Read the Passage and answer the questions.</strong>
                                                </div>
                                                <div className="d-flex justify-content-center pb-3"><strong><h3>THE GUY WITH THE CRAZY HAIR</h3></strong></div>
                                                <div className="paragraf">
                                                    Known as the biggest science discoverist. Born and raised in Germany, Einstein was a high leveled student through his life. His father supported him to science activities, discussions and experiments. Researching about new ideas, keeping notes and expanding statements was his thing. “Anyone who has never made a mistake, has never tried anything new” was one of his sayings.
                                                </div>
                                                <div className="paragraf">When he was young, he met a teacher called Max Talmund. He started having conversations with him, thus Talmund was teaching him how to experiment a lot. Einstein started to be more curious about light due to Talmund’s light experiments. Investigating became a desire to Einstein. “If you can’t explain it to a six year old, you don’t understand it yourself” he said.
                                                </div>
                                                <div className="paragraf">When he was much older, he became a professor in Germany. Many years later he went to America becauese of political issues. This made him examine more of his theories. He was intrusive about time,space,matter,energy and gravity. He is very special for his “Theory of relativity”.</div>
                                                <div className="paragraf">The theory aims to solve problems that classical Physics can not be enough to. Two types of relativity was explained. Special relativity and general relativity.</div>
                                                <div className="paragraf">It was revealed in 1905, that things going in the same direction at the same speed are called ‘Inertial frame’. This was special relativity’s concentration. On the other side, general theory focused on gravitional lensing which express the light bending when it comes to larger objects.</div>
                                                <div className="paragraf">Einstein’s work was mad and hard to sink in. It is still very significant for the World.</div>
                                                <div className="paragraf">We can clearly understand that he was a smart cunning man who thought knowledge is estential to everyone no matter what. He got a Nobel prize too.</div>
                                                <div className="paragraf">Einstein died in 1955. He was named "Person of the century" by Time Magazine.</div>
                                                <div className='mt-3'><strong>Write the answers in the blanks.</strong></div>
                                                <div className='mt-2'>1. What was his teachers name?
                                                    <input className='form-control' value={answer.result[0][0][1].student} onChange={(e) => setStudentOpenAnswer(0, 0, 1, e.target.value, true)} type="text" />
                                                </div>
                                                <div>2. Was Einstein born and raised in Germany?
                                                    <input className='form-control' value={answer.result[0][0][2].student} onChange={(e) => setStudentOpenAnswer(0, 0, 2, e.target.value, true)} type="text" />
                                                </div>
                                                <div>3. Why did he go to America when he was older?
                                                    <input className='form-control' value={answer.result[0][0][3].student} onChange={(e) => setStudentOpenAnswer(0, 0, 3, e.target.value, true)} type="text" />
                                                </div>
                                                <div>4. Which issues did he focus on?
                                                    <input className='form-control' value={answer.result[0][0][4].student} onChange={(e) => setStudentOpenAnswer(0, 0, 4, e.target.value, true)} type="text" />
                                                </div>
                                                <div>5. What do you think ‘Person of the century’ mean?
                                                    <input className='form-control' value={answer.result[0][0][5].student} onChange={(e) => setStudentOpenAnswer(0, 0, 5, e.target.value, true)} type="text" />
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }

                                    {
                                        pageNo === 1 ?
                                            <React.Fragment>
                                                <div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>B. Multiple choice. Read and choose the best answer.</strong>
                                                    </div>

                                                    <div className='row p-2'>
                                                        <strong>6. Einstein’s father supported him to ___________________ .</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) write books
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                B) do science activities
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                C) do drama plays
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                D) play in sports
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row p-2'>
                                                        <strong>7. He became a professor in ___________________ .</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) England
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                B) France
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                C) Germany
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                D) Spain
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row p-2'>
                                                        <strong>8. The two types of relativity are ___________________ .</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) Special relativity and general relativity
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                B) General relativity and second relativity
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                C) Second relativity and special relativity
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                D) Space relativity and general relativity
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row p-2'>
                                                        <strong>9. General theory focused on ___________________ which express the light bending when it comes to larger objects.</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) control panels
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                B) gravitional lensing
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                C) mass lensing
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                D) velocity panels
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='row p-2'>
                                                        <strong>10. Einstein died in ___________________ .</strong>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "A")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                A) 1953
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "B")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                B) 1954
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "C")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                C) 1955
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "D")} />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                D) 1956
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }

                                    {
                                        pageNo === 2 ?
                                            <React.Fragment>
                                                <div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>B. Read the story. Choose a word from the box below. Write the correct word in the blank.</strong>
                                                    </div>
                                                    <div>
                                                        Michael picked up a plane from the carpet and checked it very carefully. He was amused. ‘This is so nice, I love it! He said to his Uncle George.
                                                    </div>
                                                    <div className="paragraf">
                                                        Uncle George lived in Paris. Michael visited him on holidays with his parents. Uncle George was a
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value, true)} />
                                                        so he had a lot of
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value, true)} />in his house. Michael loved being here because he loves to hear plane stories and his Uncle’s adventures.
                                                    </div>
                                                    <div className="paragraf">“Please Uncle, tell me another
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value, true)} /> tonight!” he said with his hands clapping.
                                                    </div>
                                                    <div className="paragraf">
                                                        “All right. I’ll tell you the one in 1995 then...” he said sitting on his couch with his warm cup of tea.
                                                    </div>
                                                    <div className="paragraf">“You mean the one with the
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value, true)} />.”
                                                    </div>


                                                    <div className="paragraf">“Yeah. It was a cold and rainy night in
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value, true)} />. The tower allowed us to fly so we did. But it was a total
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value, true)} /> on the plane.”
                                                    </div>
                                                    <div className="paragraf">“What happened?” he said and Uncle George
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value, true)} />.
                                                    </div>
                                                    <div className="paragraf">“We had two people fighting over a lost case at court. I guess they knew eachother from before. They were lawyers. They had knives and tried to
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value, true)} /> eachother. I was the one to stop them.”
                                                    </div>
                                                    <div className="paragraf">“But what about the plane? It will crash if you’re not flying it!”
                                                    </div>
                                                    <div className="paragraf">“That’s why we have
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value, true)} /> on the plane son!”
                                                    </div>
                                                    <div className="paragraf">Michael reached to another plane and starting speaking.</div>
                                                    <div className="paragraf">“I want you to tell me more stories. I also want to know more about planes. Maybe I’ll become a pilot one day, just like you. I love you and I want to be like you. You’re a
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value, true)} /> Uncle!”
                                                    </div>
                                                    <div className="paragraf">Uncle George wiped his tears from his cheeks and gave his nephew a big
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value, true)} />. He opened his old cabinet and showed him his
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value, true)} /> and books about planes. They They spoke and laughed all night until there weren’t any stars left in the
                                                        <input className="form-input textformat" type="text" value={answer.result[0][1][13].student} onChange={(e) => setStudentOpenAnswer(0, 1, 13, e.target.value, true)} /> .
                                                    </div>
                                                    <div className='mt-4 border border border-info p-3'>
                                                        <div className="d-flex justify-content-center"><strong> Scroll the words into the right blanks.</strong></div>
                                                        <strong><hr />
                                                            <div className='row'>
                                                                <div className='col-2'>hug</div>
                                                                <div className='col-2'>hero</div>
                                                                <div className='col-2'>sky</div>
                                                                <div className='col-2'>magazines</div>
                                                                <div className='col-2'>pilot</div>
                                                                <div className='col-2'>story</div>
                                                                <div className='col-2'>accident</div>
                                                                <div className='col-2'>plane</div>
                                                                <div className='col-2'>toys</div>
                                                                <div className='col-2'>nodded</div>
                                                                <div className='col-2'>England</div>
                                                                <div className='col-2'>nightmare</div>
                                                                <div className='col-2'>co pilots</div>
                                                                <div className='col-2'>hurt</div>
                                                            </div>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }

                                    {
                                        pageNo === 3 ?
                                            <React.Fragment>
                                                <div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>A. Listen and fill in the blanks.</strong>
                                                    </div>
                                                    <div className="paragraf">
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][1].student} onChange={(e) => setStudentOpenAnswer(1, 0, 1, e.target.value)} />.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Dung Beetle:</strong> Except for the fact that there is no life in outer space
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][2].student} onChange={(e) => setStudentOpenAnswer(1, 0, 2, e.target.value)} />.
                                                    </div>
                                                    <div className="paragraf">
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][3].student} onChange={(e) => setStudentOpenAnswer(1, 0, 3, e.target.value)} />: I think there is!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Dung Beetle:</strong> Axebug says there isn’t.
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][4].student} onChange={(e) => setStudentOpenAnswer(1, 0, 4, e.target.value)} />.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Ladybug:</strong> He said it only for the solar system.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Dung Beetle:</strong> Yes, she is right.
                                                    </div>
                                                    <div className="paragraf">
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][5].student} onChange={(e) => setStudentOpenAnswer(1, 0, 5, e.target.value)} /> : We don’t know whether there is
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][6].student} onChange={(e) => setStudentOpenAnswer(1, 0, 6, e.target.value)} />
                                                        in the unknown places of space.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> Anyway, we will
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][7].student} onChange={(e) => setStudentOpenAnswer(1, 0, 7, e.target.value)} />. It is time to go back to home.
                                                    </div>

                                                    <div className="paragraf">
                                                        <strong>Axebug:</strong> Could you please check the control panel for me?
                                                    </div>
                                                    <div className="paragraf">
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][8].student} onChange={(e) => setStudentOpenAnswer(1, 0, 8, e.target.value)} />
                                                        : I think now is the best time to talk about it.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Ladybug:</strong> Why?
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Ladybug :</strong> You had better
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][9].student} onChange={(e) => setStudentOpenAnswer(1, 0, 9, e.target.value)} />.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Dung Beetle :</strong> No way!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Robug 13 :</strong>
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][10].student} onChange={(e) => setStudentOpenAnswer(1, 0, 10, e.target.value)} />
                                                        , please help!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug :</strong> It is an emergency call.</div>
                                                    <div className="paragraf">
                                                        <strong>Axebug :</strong> Guys!
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][11].student} onChange={(e) => setStudentOpenAnswer(1, 0, 11, e.target.value)} />
                                                        Our return home.
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug :</strong> I think we found
                                                        <input className="form-input textformat" type="text" value={answer.result[1][0][12].student} onChange={(e) => setStudentOpenAnswer(1, 0, 12, e.target.value)} />
                                                        . Wooohooo!!!
                                                    </div>
                                                    <div className="paragraf">
                                                        <strong>Axebug :</strong> Let’s go and find out.
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }
                                    {
                                        pageNo === 4 ?
                                            <React.Fragment>
                                                <div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>B. Listen and read. Then put the words below in order according to the story. Which one happens first?</strong>
                                                    </div>
                                                    <div className="paragraf"><strong>Insect Brown:</strong> There is a rumour: “It landed on the town square.” And one question: “Have you seen it?”</div>
                                                    <div className="paragraf"><strong>Insect Purple:</strong> They say it’s like a huge housefly. Is that right?</div>
                                                    <div className="paragraf"><strong>Butterfly:</strong> It would be better if it looked like a butterfly.</div>
                                                    <div className="paragraf"><strong>Mosquito: </strong>Look! There it is.</div>
                                                    <div className="paragraf"><strong>Axebug was ready for the take off.</strong></div>
                                                    <div className="paragraf"><strong>He was waiting for the two buddies.</strong></div>
                                                    <div className="paragraf"><strong>Soon, the two buddies appeared in the town square.</strong></div>
                                                    <div className="paragraf"><strong>Dung Beetle:</strong> Come on! Of course I had to take them with me. They are my personal stuff.</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> Here you are, finally! The spaceship is almost ready. We will set off soon.</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> Follow me! Let’s get your clothes changed for the journey.</div>
                                                    <div className="paragraf"><strong>Dung Beetle: </strong>Clothes? I have brought some with me.</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> Hah hah! You can’t travel to the space in jeans. You need space suits.</div>
                                                    <div className="paragraf"><strong> Axebug: </strong>There is o ne for each of you.</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> This is for you.</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> And this is yours.</div>
                                                    <div className="paragraf"><strong>Dung Beetle: </strong>I think my own pyjamas are more comfortable. But whatever...</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> Come on! All aboard.</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> We are ready to take off if you are both seated. Can you please check the control panel for me?</div>
                                                    <div className="paragraf"><strong>Dung Beetle: </strong>What do you want me to check? This is too complicated.</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> Tell me when you see thetart" notice on screen.</div>
                                                    <div className="paragraf"><strong>Spaceship Computer:</strong> I tihnk there is 9 seconds. 8...7...6...5...4...3...2...1... Lanch!</div>
                                                    <div className="paragraf"><strong>Axebug:</strong> Well... Here we go. Hold tight!</div>
                                                    <div className="mt-5 border border-info p-5">
                                                        <table>
                                                            <tr>
                                                                <td>Launch</td>
                                                                <td><input className="form-input textformat" type="text" value={answer.result[1][1][1].student} onChange={(e) => setStudentOpenAnswer(1, 1, 1, e.target.value)} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Control panel</td>
                                                                <td><input className="form-input textformat" type="text" value={answer.result[1][1][2].student} onChange={(e) => setStudentOpenAnswer(1, 1, 2, e.target.value)} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>ZZZ55</td>
                                                                <td><input className="form-input textformat" type="text" value={answer.result[1][1][3].student} onChange={(e) => setStudentOpenAnswer(1, 1, 3, e.target.value)} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Space suits</td>
                                                                <td><input className="form-input textformat" type="text" value={answer.result[1][1][4].student} onChange={(e) => setStudentOpenAnswer(1, 1, 4, e.target.value)} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Personal stuff</td>
                                                                <td><input className="form-input textformat" type="text" value={answer.result[1][1][5].student} onChange={(e) => setStudentOpenAnswer(1, 1, 5, e.target.value)} />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }
                                    {
                                        pageNo === 5 ?
                                            <React.Fragment>
                                                <div>

                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>A. Read the dialogue and choose the best answer for the blanks. Use the box below.</strong>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <div className="paragraf"><strong>1. Dung Beetle :</strong> Where did earth go?</div>
                                                            <div className="paragraf"><strong>Axebug :</strong>
                                                                <input className="form-input textformat" type="text" value={answer.result[2][0][1].student} onChange={(e) => setStudentOpenAnswer(2, 0, 1, e.target.value)} />
                                                            </div>
                                                            <div className="paragraf"><strong>2. Axebug: </strong>Are you ready for the answer?</div>
                                                            <div className="paragraf"><strong>Dung Beetle :</strong>
                                                                <input className="form-input textformat" type="text" value={answer.result[2][0][2].student} onChange={(e) => setStudentOpenAnswer(2, 0, 2, e.target.value)} />
                                                            </div>

                                                            <div className="paragraf"><strong>3. Ladybug:</strong> I’m ready! Let’s find out.</div>
                                                            <div className="paragraf"><strong>Axebug :</strong>
                                                                <input className="form-input textformat" type="text" value={answer.result[2][0][3].student} onChange={(e) => setStudentOpenAnswer(2, 0, 3, e.target.value)} />
                                                            </div>

                                                            <div className="paragraf"><strong>4. Axebug:</strong> Close your eyes until i tell you to open them.</div>
                                                            <div className="paragraf"><strong>Axebug :</strong>
                                                                <input className="form-input textformat" type="text" value={answer.result[2][0][4].student} onChange={(e) => setStudentOpenAnswer(2, 0, 4, e.target.value)} />
                                                            </div>

                                                            <div className="paragraf"><strong>5. Dung Beetle:</strong> wow! Spectacular.</div>
                                                            <div className="paragraf"><strong>Ladybug :</strong>
                                                                <input className="form-input textformat" type="text" value={answer.result[2][0][5].student} onChange={(e) => setStudentOpenAnswer(2, 0, 5, e.target.value)} />
                                                            </div>
                                                            <div className="paragraf"><strong>Ladybug :</strong>
                                                                <input className="form-input textformat" type="text" value={answer.result[2][0][6].student} onChange={(e) => setStudentOpenAnswer(2, 0, 6, e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <div className="paragraf alert alert-success"><strong>A. </strong>Yayy! I’m ready. How about you?</div>
                                                            <div className="paragraf alert alert-success"><strong>B. </strong>Now open your eyes!</div>
                                                            <div className="paragraf alert alert-success"><strong>C. </strong>No! It’s impossible.</div>
                                                            <div className="paragraf alert alert-success"><strong>D. </strong>Don’t panic. It’s right behind us.</div>
                                                            <div className="paragraf alert alert-success"><strong>E. </strong>He was right.</div>
                                                            <div className="paragraf alert alert-success"><strong>F. </strong>All right then... lets hang a left now. But first...</div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </React.Fragment>
                                            : null
                                    }
                                    {
                                        pageNo === 6 ?
                                            <React.Fragment>
                                                <div>
                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>B. Macth a synonym for each word.</strong>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-2 alert alert-info m-3">
                                                            Emergency
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][1].student} onChange={(e) => setStudentOpenAnswer(2, 1, 1, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Travel
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][2].student} onChange={(e) => setStudentOpenAnswer(2, 1, 2, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Possible
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][3].student} onChange={(e) => setStudentOpenAnswer(2, 1, 3, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Amazing
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][4].student} onChange={(e) => setStudentOpenAnswer(2, 1, 4, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Transfer
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][5].student} onChange={(e) => setStudentOpenAnswer(2, 1, 5, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Cancel
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][6].student} onChange={(e) => setStudentOpenAnswer(2, 1, 6, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Rush
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][7].student} onChange={(e) => setStudentOpenAnswer(2, 1, 7, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Center
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][8].student} onChange={(e) => setStudentOpenAnswer(2, 1, 8, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Right
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][9].student} onChange={(e) => setStudentOpenAnswer(2, 1, 9, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Strange
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][10].student} onChange={(e) => setStudentOpenAnswer(2, 1, 10, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Master
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][11].student} onChange={(e) => setStudentOpenAnswer(2, 1, 11, e.target.value)} />
                                                        </div>
                                                        <div className="col-2 alert alert-info m-3">
                                                            Cluttered
                                                            <input style={{ fontSize: 30 }} className="form-input w-100" type="text" value={answer.result[2][1][12].student} onChange={(e) => setStudentOpenAnswer(2, 1, 12, e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-2 alert alert-warning m-1">
                                                            Middle
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            End
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            Send
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            Super
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            King
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            Visit
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            Quick
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            Sos
                                                        </div>
                                                        <div className="col-2 alert alert-warning m-1">
                                                            Correct
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            Right
                                                        </div>
                                                        <div className="col-1 alert alert-warning m-1">
                                                            Weird
                                                        </div>
                                                        <div className="col-2 alert alert-warning m-1">
                                                            Untidy
                                                        </div>
                                                    </div>

                                                </div>
                                            </React.Fragment>
                                            : null
                                    }
                                    {
                                        pageNo === 7 ?
                                            <React.Fragment>
                                                <div>

                                                    <div className="alert alert-dark" role="alert">
                                                        <strong>A. Listen to the audio. Then, repeat the sentences clearly.</strong>
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber={1} />
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber={2} />
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber={3} />
                                                    </div>
                                                    <div className='border border-success p-3 mt-3'>
                                                        <SpechText getSpeechText={getSpeechText} questionNumber={4} />
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }

                                </div>

                            </React.Fragment>
                            : null
                    }
                </div>

                <div className="card-footer">
                    <div className='row'>
                        {
                            pageNo !== 0 ?
                                <div className='col-auto'>
                                    <button className='btn btn-success' onClick={() => prevPage()}>PREV</button>
                                </div>
                                : null
                        }
                        {
                            pageNo !== maxPage - 1 ?
                                <div className="col-auto pl-2">
                                    <button className='btn btn-success' onClick={() => nextPage()}>NEXT</button>
                                </div>
                                : null
                        }
                        {
                            pageNo === maxPage - 1 ?
                                <div className="col-auto pl-2">
                                    <button className='btn btn-success' onClick={() => props.sendExam(answer)}>FINISH EXAM</button>
                                </div>
                                : null
                        }

                    </div>
                </div>
            </div>
        </div >
    )

}
